using Car_Rential.Interfaces;
using Car_Rential.Model;
using Microsoft.AspNetCore.Mvc;

namespace Car_Rential.Controllers
{
    [ApiController]
    [Route("api/res")]
    public class ReservationController : ControllerBase
    {
        private readonly IReservationService _reservationService;

        public ReservationController(IReservationService reservationService)
        {
            _reservationService = reservationService;
        }

        [HttpPost]
        public ActionResult AddReservation([FromBody] ReservationInput reservation)
        {
            var reservationId = _reservationService.AddReservation(reservation);
            return Created($"api/res/{reservationId}", null);
        }

        [HttpDelete("{reservationId}")]
        public ActionResult DeleteReservation([FromRoute] int reservationId)
        {
            _reservationService.DeleteReservation(reservationId);
            return NoContent();
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            var result = _reservationService.GetAllReservations();
            return Ok(result);
        }
    }
}
