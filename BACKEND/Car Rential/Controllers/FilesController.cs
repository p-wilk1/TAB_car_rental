using Car_Rential.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Car_Rential.Controllers
{
    [ApiController]
    [Route("api/files")]
    public class FilesController : ControllerBase
    {
        private readonly IFilesService _filesService;

        public FilesController(IFilesService filesService)
        {
            _filesService = filesService;
        }

        [HttpPost]
        public ActionResult AddCarPhotos([FromForm] List<IFormFile> files, [FromForm] int carId)
        {
            var names = _filesService.AddCarFiles(files, carId);
            return Ok(names);
        }

        [HttpGet("{carId}")]
        public ActionResult GetCarPhotos([FromRoute] int carId)
        {
            var photos = _filesService.GetImages(carId);
            return Ok(photos);
        }

        [HttpDelete]
        public ActionResult DeleteCarPhotos([FromQuery] int carId, [FromQuery] int photoId)
        {
            _filesService.RemovePhoto(photoId, carId);
            return NoContent();
        }
    }
}
