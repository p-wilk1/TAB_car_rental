namespace Car_Rential.Entieties
{
    public class OfficeAddress
    {
        public int Id { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string StreetName { get; set; }
        public int BuildingNumber { get; set; }

        public virtual Office Office { get; set; }
    }
}
