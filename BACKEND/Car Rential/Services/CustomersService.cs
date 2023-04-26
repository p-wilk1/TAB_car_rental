using Car_Rential.Entieties;
using Microsoft.EntityFrameworkCore;

namespace Car_Rential.Services
{
    public interface ICustomersService
    {
        IEnumerable<Customer> GetCustomers();
    }

    public class CustomersService : ICustomersService
    {
        private readonly RentialDbContext _context;

        public CustomersService(RentialDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Customer> GetCustomers()
        {
            var customers = _context.Custormers
                .Include(c => c.CustromerAddress)
                //.Include(c => c.Reservations)
                .ToList();

            return customers;
        }
    }
}
