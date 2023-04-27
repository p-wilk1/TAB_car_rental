using Car_Rential.Entieties;
using Car_Rential.Model;

namespace Car_Rential.Interfaces
{
    public interface ICarsService
    {
        public IEnumerable<ReturnCarDto> GetAllCars();
        public int AddCar(RegisterCarDto carDto);
        public void DeleteCar(int carId);
    }
}
