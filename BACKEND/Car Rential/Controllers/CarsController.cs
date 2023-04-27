using Car_Rential.Interfaces;
using Car_Rential.Model;
using Microsoft.AspNetCore.Mvc;

namespace Car_Rential.Controllers
{
    [ApiController]
    [Route("api/car")]
    public class CarsController : ControllerBase
    {
        private readonly ICarsService _carsService;

        public CarsController(ICarsService carsService)
        {
            _carsService = carsService;
        }

        [HttpGet("all")]
        public ActionResult GetAllCars()
        {
            var result = _carsService.GetAllCars();

            return Ok(result);
        }

        [HttpPost("add")]
        public ActionResult AddCar([FromBody] RegisterCarDto carDto)
        {
            var result = _carsService.AddCar(carDto);
            return Created($"/api/car/{result}", null);
        }
    }
}
