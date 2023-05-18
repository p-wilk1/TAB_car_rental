using Car_Rential.Entieties;

namespace Car_Rential.Model
{
    public class ReturnCustomerDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Pesel { get; set; }

        public CustomerAdressDto customerAdress { get; set; }
        public List<Reservation> reservationList { get; set; }
    }
}
