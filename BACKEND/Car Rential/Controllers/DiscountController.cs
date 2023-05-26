using Car_Rential.Interfaces;
using Car_Rential.Model;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Car_Rential.Controllers
{
    [ApiController]
    [Route("api/discount")]
    public class DiscountController : ControllerBase
    {
        private readonly IDiscountService _discountService;

        public DiscountController(IDiscountService discountService)
        {
            _discountService = discountService;
        }

        [HttpPost]
        [Route("add")]
        public async Task<ActionResult<List<string>>> AddDiscoutCode(
            [FromQuery] int discountPercent,
            [FromQuery] int howMany,
            [FromQuery] int howLong
        )
        {
            var result = await _discountService.CreateDiscount(discountPercent, howMany, howLong);

            return Ok(result);
        }

        //[HttpPost]
        //[Route("test")]
        //public ActionResult<LoginCustomerDto> Test([FromForm] string a, [FromForm] IFormFile file)
        //{
        //    if (file != null)
        //    {
        //        var d = JsonConvert.DeserializeObject<LoginCustomerDto>(a);

        //        return Ok(d);
        //    }
        //    return NoContent();
        //}
    }
}
