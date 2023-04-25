namespace Car_Rential.Entieties
{
    public class Discount
    {
        public int Id { get; set; }
        public string DiscountCode { get; set; }
        public int DiscountPercent { get; set; }
        public bool isAvailable { get; set; }
    }
}
