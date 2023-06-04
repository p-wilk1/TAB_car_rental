using AutoMapper;
using Car_Rential.Entieties;
using Car_Rential.Interfaces;
using Car_Rential.Model;

namespace Car_Rential.Services
{
    public class ReservationService : IReservationService
    {
        private readonly IMapper _mapper;
        private readonly RentalDbContext _dbContext;

        public ReservationService(IMapper mapper, RentalDbContext dbContext)
        {
            _mapper = mapper;
            _dbContext = dbContext;
        }

        public string AddReservation(ReservationInput reservationDto)
        {
            var reservation = _mapper.Map<Reservation>(reservationDto);

            var reservationNumber = Guid.NewGuid().ToString();

            reservation.ReservatonNumber = reservationNumber;

            _dbContext.Add(reservation);
            _dbContext.SaveChanges();

            return null;
        }
    }
}
