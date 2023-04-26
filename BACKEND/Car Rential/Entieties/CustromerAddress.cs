namespace Car_Rential.Entieties
{
    public class CustromerAddress
    {
        public int Id { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string StreetName { get; set; }
        public string BuildingNumber { get; set; }
        public string ZipCode { get; set; }
        public string State { get; set; }

        public int CustormerId { get; set; }
        public virtual Customer Custormer { get; set; }
    }
}
