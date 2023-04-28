using Car_Rential.Entieties;
using Car_Rential.Model;

namespace Car_Rential.Interfaces
{
    public interface ICarsService
    {
        public IEnumerable<ReturnCarDto> GetAllCars();
        public int AddCar(InputCarDto carDto);
        public void DeleteCar(int carId);
        public void UpdateCar(InputCarDto carDto, int carId);
    }
}
