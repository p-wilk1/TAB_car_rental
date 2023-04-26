namespace Car_Rential.Entieties
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public int CarId { get; set; }

        public int? DiscountId { get; set; }
        public virtual Discount Discount { get; set; }

        public int CustomerId { get; set; }
        public virtual Customer Custormer { get; set; }

        public int PickupLocationId { get; set; }
        public virtual Office PickupLocation { get; set; }

        public int RetunLocationId { get; set; }
        public virtual Office ReturnLocation { get; set; }
    }
}
