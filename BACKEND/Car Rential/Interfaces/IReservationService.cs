using Car_Rential.Entieties;
using Car_Rential.Model;

namespace Car_Rential.Interfaces
{
    public interface IReservationService
    {
        public int AddReservation(ReservationInput reservationDto);
        public void DeleteReservation(int reservationId);
        public IEnumerable<ReturnReservationDto> GetAllReservations();
    }
}
