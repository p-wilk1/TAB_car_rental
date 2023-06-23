using Car_Rential.Entieties;
using Car_Rential.Model;
using Sieve.Models;
using System.Linq.Expressions;

namespace Car_Rential.Interfaces
{
    public interface IReservationService
    {
        public int AddReservation(ReservationInput reservationDto);
        public void DeleteReservation(int reservationId);

        //public Task<PaginatedOutput<ReturnReservationDto>> GetAllReservations(SieveModel model);
        public IEnumerable<ReturnReservationDto> GetAllReservations();

        public Reservation GetReservationById(
            int reservationId,
            params Expression<Func<Reservation, object>>[] expressions
        );
    }
}
