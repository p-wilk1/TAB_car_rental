using Car_Rential.Model;
using Car_Rential.Services;
using Microsoft.AspNetCore.Mvc;

namespace Car_Rential.Controllers
{
    [Route("api")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly ICustomersService _customersService;

        public CustomersController(ICustomersService customersService)
        {
            _customersService = customersService;
        }

        [HttpGet("all")]
        public ActionResult GetAll()
        {
            var result = _customersService.GetCustomers();
            return Ok(result);
        }

        [HttpPost("register")]
        public ActionResult RegisterUser([FromBody] RegisterCustomerDto customerDto)
        {
            var result = _customersService.RegisterCustomer(customerDto);

            return Created($"/api/register/{result}", null);
        }
    }
}
