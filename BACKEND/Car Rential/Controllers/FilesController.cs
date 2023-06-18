using Car_Rential.Interfaces;
using iText.Kernel.Pdf;
using iText.Layout.Element;
using Microsoft.AspNetCore.Mvc;
using iText.Layout;
using Microsoft.AspNetCore.StaticFiles;

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

        [HttpGet]
        public ActionResult GetFile([FromQuery] string filePath)
        {
            var doesExsist = Path.Exists(filePath);

            if (!doesExsist)
            {
                return NotFound();
            }

            var contentProvider = new FileExtensionContentTypeProvider();
            contentProvider.TryGetContentType(filePath, out var contentType);
            var result = System.IO.File.ReadAllBytes(filePath);

            return File(result, contentType, "test");
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

        [HttpGet("invoice")]
        public ActionResult GetInvoice([FromQuery] int reservationId)
        {
            var doc = _filesService.GetInvoice(reservationId);

            MemoryStream stream = new MemoryStream();
            PdfWriter writer = new PdfWriter(stream);
            PdfDocument pdf = new PdfDocument(writer);
            Document document = new Document(pdf);

            // Dodaj zawartość do dokumentu
            Paragraph paragraph = new Paragraph(doc);
            document.Add(paragraph);

            // Zamknij dokument PDF
            document.Close();

            var contentType = "application/pdf";

            return File(stream.ToArray(), contentType, "Invoice.pdf");
        }
    }
}
