using AutoMapper;
using Car_Rential.Entieties;
using Car_Rential.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Car_Rential.Services
{
    public interface ICustomersService
    {
        IEnumerable<Customer> GetCustomers();
        int RegisterCustomer(RegisterCustomerDto customerDto);
    }

    public class CustomersService : ICustomersService
    {
        private readonly RentialDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IPasswordHasher<Customer> _passwordHasher;

        public CustomersService(
            RentialDbContext context,
            IMapper mapper,
            IPasswordHasher<Customer> passwordHasher
        )
        {
            _dbContext = context;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
        }

        public IEnumerable<Customer> GetCustomers()
        {
            var customers = _dbContext.Custormers
                .Include(c => c.CustromerAddress)
                .Include(c => c.Reservations)
                .ToList();

            return customers;
        }

        public int RegisterCustomer(RegisterCustomerDto customerDto)
        {
            var user = _mapper.Map<Customer>(customerDto);

            var userPassword = customerDto.Password;
            var userHassedPassword = _passwordHasher.HashPassword(user, userPassword);
            user.HassedPassword = userHassedPassword;

            _dbContext.Add(user);
            _dbContext.SaveChanges();

            return user.Id;
        }
    }
}
