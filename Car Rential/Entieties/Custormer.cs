namespace Car_Rential.Entieties
{
    public class Custormer
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Pesel { get; set; }
        public string HassedPassword { get; set; }

        public int CustomerAddressId { get; set; }
        public virtual CustromerAddress CustromerAddress { get; set; }
    }
}
