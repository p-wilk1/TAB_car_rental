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
    }
}
