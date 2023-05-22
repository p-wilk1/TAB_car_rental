using Car_Rential.Entieties;

namespace Car_Rential.Model
{
    public class OfficeDto
    {
        public string OfficeName { get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }

        public OfficeAddress OfficeAddress { get; set; }
    }
}
