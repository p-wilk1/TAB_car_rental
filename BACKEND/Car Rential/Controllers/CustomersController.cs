using Car_Rential.Services;
using Microsoft.AspNetCore.Mvc;

namespace Car_Rential.Controllers
{
    [Route("api")]
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
    }
}
