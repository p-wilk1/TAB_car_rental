using Car_Rential.Model;

namespace Car_Rential.Interfaces
{
    public interface IFilesService
    {
        public List<string> AddCarFiles(List<IFormFile> files, int carId);
        public List<ImageDto> GetImages(int carId);
        public void RemovePhoto(int photoId, int carId);
    }
}
