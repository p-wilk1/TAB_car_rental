using AutoMapper;
using Car_Rential.Entieties;
using Car_Rential.Exceptions;
using Car_Rential.Interfaces;
using Car_Rential.Model;
using Microsoft.EntityFrameworkCore;

namespace Car_Rential.Services
{
    public class CarsService : ICarsService
    {
        private readonly RentialDbContext _dbContext;
        private readonly IMapper _mapper;

        public CarsService(RentialDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public IEnumerable<ReturnCarDto> GetAllCars()
        {
            var cars = _dbContext.Cars.Include(c => c.CarInfo).Include(c => c.Office).ToList();

            var result = _mapper.Map<List<ReturnCarDto>>(cars);

            return result;
        }

        public int AddCar(RegisterCarDto carDto)
        {
            var car = _mapper.Map<Car>(carDto);

            _dbContext.Cars.Add(car);
            _dbContext.SaveChanges();
            return car.Id;
        }

        public void DeleteCar(int carId)
        {
            var car = GetCarById(carId);

            _dbContext.Remove(car);
            _dbContext.SaveChanges();
        }

        private Car GetCarById(int carId)
        {
            var car = _dbContext.Cars.FirstOrDefault(c => c.Id == carId);

            if (car == null)
            {
                throw new CarNotFoudException("Car doesn't exist");
            }

            return car;
        }
    }
}
