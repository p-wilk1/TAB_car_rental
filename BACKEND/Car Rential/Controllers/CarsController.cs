﻿using Car_Rential.Interfaces;
using Car_Rential.Model;
using Car_Rential.Model.Validators;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace Car_Rential.Controllers
{
    [ApiController]
    [Route("api/car")]
    public class CarsController : ControllerBase
    {
        private readonly ICarsService _carsService;
        private readonly IValidator<InputCarDto> _registerCarValidator;
        private readonly IValidator<InputCarDto> _updateCarValidator;

        public CarsController(
            ICarsService carsService,
            UpdateCarValidator updateCarValidator,
            RegisterCarValidator registerCarValidator
        )
        {
            _carsService = carsService;
            _updateCarValidator = updateCarValidator;
            _registerCarValidator = registerCarValidator;
        }

        [HttpGet("all")]
        public ActionResult GetAllCars()
        {
            var result = _carsService.GetAllCars();

            return Ok(result);
        }

        [HttpPost("add")]
        public ActionResult AddCar([FromBody] InputCarDto carDto)
        {
            _registerCarValidator.ValidateAndThrow(carDto);

            var result = _carsService.AddCar(carDto);
            return Created($"/api/car/{result}", null);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteCar([FromRoute] int id)
        {
            _carsService.DeleteCar(id);

            return NoContent();
        }

        [HttpPatch("{carId}")]
        public ActionResult UpdateCar([FromRoute] int carId, [FromBody] InputCarDto carDto)
        {
            _updateCarValidator.ValidateAndThrow(carDto);

            _carsService.UpdateCar(carDto, carId);
            return Ok();
        }
    }
}
