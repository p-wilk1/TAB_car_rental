using Car_Rential.Entieties;
using Car_Rential.Exceptions;
using Car_Rential.Interfaces;
using System;

namespace Car_Rential.Services
{
    public class DiscountService : IDiscountService
    {
        private readonly RentialDbContext _dbContext;

        public DiscountService(RentialDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<string>> CreateDiscount(
            int discountPercent,
            int howMany,
            int howLong
        )
        {
            if (howMany > 100 || howMany < 1)
            {
                throw new CreateCodeException("To many codes requested");
            }

            if (howLong < 8 || howMany > 25)
            {
                throw new CreateCodeException("Code lenght should be between 8 and 25");
            }

            var result = new List<string>();

            for (int i = 0; i < howMany; i++)
            {
                var code = new Discount
                {
                    DiscountPercent = discountPercent,
                    DiscountCode = RandomString(howLong),
                    isAvailable = true
                };
                await _dbContext.AddAsync(code);
                await _dbContext.SaveChangesAsync();
                result.Add(code.DiscountCode);
            }

            return result;
        }

        private string RandomString(int length)
        {
            var random = new Random();
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(
                Enumerable.Repeat(chars, length).Select(s => s[random.Next(s.Length)]).ToArray()
            );
        }
    }
}
