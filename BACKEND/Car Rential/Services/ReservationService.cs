﻿using AutoMapper;
using Car_Rential.Entieties;
using Car_Rential.Exceptions;
using Car_Rential.Interfaces;
using Car_Rential.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Linq.Expressions;

namespace Car_Rential.Services
{
    public class ReservationService : IReservationService
    {
        private readonly IMapper _mapper;
        private readonly RentalDbContext _dbContext;
        private readonly ICustomersService _customersService;
        private readonly ICarsService _carsService;

        public ReservationService(
            IMapper mapper,
            RentalDbContext dbContext,
            ICustomersService customersService,
            ICarsService carsService
        )
        {
            _mapper = mapper;
            _dbContext = dbContext;
            _customersService = customersService;
            _carsService = carsService;
        }

        public int AddReservation(ReservationInput reservationDto)
        {
            var customer = _customersService.FindCustomer(reservationDto.CustomerId);
            var isBooked = isCarBooked(
                reservationDto.CarId,
                reservationDto.StartDate,
                reservationDto.EndDate
            );

            if (!isBooked)
            {
                throw new BookingException("Car is already booked at this time");
            }

            var reservation = _mapper.Map<Reservation>(reservationDto);

            var reservationNumber = Guid.NewGuid().ToString();

            reservation.ReservatonNumber = reservationNumber;
            customer.ReservationCount++;

            _dbContext.Add(reservation);
            _dbContext.SaveChanges();

            return reservation.Id;
        }

        public void DeleteReservation(int reservationId)
        {
            var reservation = GetReservationById(reservationId);

            _dbContext.Remove(reservation);
            _dbContext.SaveChanges();
        }

        public IEnumerable<ReturnReservationDto> GetAllReservations()
        {
            var res = _dbContext.Reservations
                .Include(r => r.Car)
                .Include(r => r.Custormer)
                .Include(r => r.PickupLocation)
                .Include(r => r.ReturnLocation)
                .ToList();

            var result = _mapper.Map<List<ReturnReservationDto>>(res);

            return result;
        }

        private bool isCarBooked(int carId, DateTime start, DateTime end)
        {
            var reservations = _dbContext.Reservations.Where(c => c.CarId == carId);

            foreach (var reservation in reservations)
            {
                if (
                    (start <= reservation.StartDate && end >= reservation.EndDate)
                    || (start >= reservation.StartDate && start <= reservation.EndDate)
                    || (end >= reservation.StartDate && end <= reservation.EndDate)
                )
                {
                    return false;
                }
            }
            return true;
        }

        private Reservation GetReservationById(
            int reservationId,
            params Expression<Func<Reservation, object>>[] expressions
        )
        {
            var query = _dbContext.Reservations.Where(r => r.Id == reservationId);

            foreach (var expression in expressions)
            {
                query.Include(expression);
            }

            var result = query.FirstOrDefault();
            if (result == null)
            {
                throw new ReservationNotFoundException("Reservation doesn't exist");
            }

            return result;
        }
    }
}
