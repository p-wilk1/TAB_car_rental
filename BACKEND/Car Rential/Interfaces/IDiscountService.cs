namespace Car_Rential.Interfaces
{
    public interface IDiscountService
    {
        public Task<List<string>> CreateDiscount(int discountPercent, int howMany, int howLong);
    }
}
