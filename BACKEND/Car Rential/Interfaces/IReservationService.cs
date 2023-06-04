using Car_Rential.Model;

namespace Car_Rential.Interfaces
{
    public interface IReservationService
    {
        public string AddReservation(ReservationInput reservationDto);
    }
}
