using Car_Rential.Model;
using Microsoft.AspNetCore.Mvc;

namespace Car_Rential.Controllers
{
    [ApiController]
    [Route("api/res")]
    public class ReservationController : ControllerBase
    {
        [HttpPost]
        public ActionResult AddReservation([FromBody] ReservationInput reservation)
        {
            return Ok();
        }
    }
}
