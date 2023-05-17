using Car_Rential.Entieties;

namespace Car_Rential.Model
{
    public class ReturnCarDto
    {
        public int Id { get; set; }
        public CarTypes Type { get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }
        public string RegistrationNumber { get; set; }
        public double pricePerDay { get; set; }

        public ReturnCarInfoDto CarInfo { get; set; }
        public Office Office { get; set; }
    }
}
