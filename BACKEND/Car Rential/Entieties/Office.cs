namespace Car_Rential.Entieties
{
    public class Office
    {
        public int Id { get; set; }
        public string OfficeName { get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }

        public int OfficeAddressId { get; set; }
        public virtual OfficeAddress OfficeAddress { get; set; }

        public virtual List<Car> Cars { get; set; }
        public virtual List<Reservation> PickUpReservations { get; set; }
        public virtual List<Reservation> ReturnReservations { get; set; }
    }
}
