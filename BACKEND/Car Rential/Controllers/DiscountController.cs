using Car_Rential.Interfaces;
using Microsoft.AspNetCore.Mvc;

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
    }
}
