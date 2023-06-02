using AutoMapper;
using Car_Rential.Entieties;
using Car_Rential.Exceptions;
using Car_Rential.Interfaces;
using Car_Rential.Model;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Car_Rential.Services
{
    public class FilesService : IFilesService
    {
        private readonly RentialDbContext _dbContext;
        private readonly ICarsService _carsService;
        private readonly IMapper _mapper;

        public FilesService(RentialDbContext dbContext, ICarsService carsService, IMapper mapper)
        {
            _dbContext = dbContext;
            _carsService = carsService;
            _mapper = mapper;
        }

        public List<string> AddCarFiles(List<IFormFile> files, int carId)
        {
            if (files == null)
            {
                throw new ImageException("You need to add some photos");
            }

            var car = _carsService.GetCarById(carId, i => i.Images);

            var rootPath = Directory.GetCurrentDirectory();
            var folderPath = $"{rootPath}/Images/Cars/{car.Id}";

            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            var filesNames = new List<string>();

            foreach (IFormFile file in files)
            {
                var fileName = file.FileName;
                var extenction = Path.GetExtension(fileName);

                if (extenction != ".png" && extenction != ".jpeg" && extenction != ".jpg")
                {
                    throw new ImageException("Only png, jpeg and jpg extenction are allowed");
                }

                var filePath = $"{folderPath}/{fileName}";
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
                filesNames.Add(filePath);
                var img = new Image { ImagePath = filePath };
                car.Images.Add(img);
            }
            _dbContext.SaveChanges();
            return filesNames;
        }

        public List<ImageDto> GetImages(int carId)
        {
            var car = _carsService.GetCarById(carId, i => i.Images);
            ;
            var photos = car.Images;

            var result = _mapper.Map<List<ImageDto>>(photos);
            return result;
        }

        public void RemovePhoto(int photoId, int carId)
        {
            var car = _carsService.GetCarById(carId, i => i.Images);
            var photo = car.Images.FirstOrDefault(i => i.Id == photoId);
            var doesExist = File.Exists(photo.ImagePath);
            if (!doesExist || photo == null)
            {
                throw new ImageException("Photo doesn't exist");
            }

            File.Delete(photo.ImagePath);

            car.Images.Remove(photo);
            _dbContext.SaveChanges();
        }
    }
}
