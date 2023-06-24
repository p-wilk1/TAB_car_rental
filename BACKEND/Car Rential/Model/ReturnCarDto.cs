using Car_Rential.Entieties;

namespace Car_Rential.Model
{
    public class ReturnCarDto
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }
        public string RegistrationNumber { get; set; }
        public double pricePerDay { get; set; }
        public List<ImageDto> ImagePath { get; set; }

        public ReturnCarInfoDto CarInfo { get; set; }
        public OfficeDto Office { get; set; }
    }
}
