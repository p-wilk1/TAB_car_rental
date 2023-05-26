namespace Car_Rential.Entieties
{
    public class Car
    {
        public int Id { get; set; }
        public CarTypes Type { get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }
        public string RegistrationNumber { get; set; }
        public double pricePerDay { get; set; }
        public byte[] ImageData { get; set; }

        public int CarInfoId { get; set; }
        public virtual CarInfo CarInfo { get; set; }

        public int? OfficeId { get; set; }
        public virtual Office Office { get; set; }
    }

    public enum CarTypes
    {
        Sedan,
        Kombi,
        Hatchback,
        Liftback,
        Coupe,
        SUV,
        Pickup
    }
}
