using Car_Rential.Entieties;

namespace Car_Rential.Model
{
    public class ReturnReservationDto
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string ReservatonNumber { get; set; }
        public ReturnCarDto Car { get; set; }
        public Discount Discount { get; set; }
        public OfficeDto PickupLocation { get; set; }
        public OfficeDto ReturnLocation { get; set; }
        public ReturnCustomerDto Customer { get; set; }
    }
}
