namespace Car_Rential.Model
{
    public class ReservationInput
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public int CarId { get; set; }
        public int? DiscountId { get; set; }
        public int CustomerId { get; set; }
        public int PickupLocationId { get; set; }
        public int RetunLocationId { get; set; }
    }
}
