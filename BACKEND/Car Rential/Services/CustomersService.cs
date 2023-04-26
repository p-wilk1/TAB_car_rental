using AutoMapper;
using Car_Rential.Entieties;
using Car_Rential.Exceptions;
using Car_Rential.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Car_Rential.Services
{
    public interface ICustomersService
    {
        IEnumerable<Customer> GetCustomers();
        int RegisterCustomer(RegisterCustomerDto customerDto);
        string LoginCustomer(LoginCustomerDto customerDto);
    }

    public class CustomersService : ICustomersService
    {
        private readonly RentialDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IPasswordHasher<Customer> _passwordHasher;
        private readonly AuthenticationSettings _authenticationSettings;

        public CustomersService(
            RentialDbContext context,
            IMapper mapper,
            IPasswordHasher<Customer> passwordHasher,
            AuthenticationSettings authenticationSettings
        )
        {
            _dbContext = context;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
            _authenticationSettings = authenticationSettings;
        }

        public IEnumerable<Customer> GetCustomers()
        {
            var customers = _dbContext.Custormers
                .Include(c => c.CustromerAddress)
                .Include(c => c.Reservations)
                .ToList();

            return customers;
        }

        public string LoginCustomer(LoginCustomerDto customerDto)
        {
            var user = _dbContext.Custormers.FirstOrDefault(c => c.Email == customerDto.Email);

            if (user == null)
            {
                throw new CustomerNotFoundException("Invalid username or password.");
            }

            var isPasswordCorrect = _passwordHasher.VerifyHashedPassword(
                user,
                user.HassedPassword,
                customerDto.Password
            );

            if (isPasswordCorrect == PasswordVerificationResult.Failed)
            {
                throw new CustomerNotFoundException("Invalid username or password.");
            }

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_authenticationSettings.JwtKey)
            );

            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(_authenticationSettings.JwtExpiredDays);

            var token = new JwtSecurityToken(
                _authenticationSettings.JwtIssuer,
                _authenticationSettings.JwtIssuer,
                claims,
                expires: expires,
                signingCredentials: cred
            );

            var tokenHandler = new JwtSecurityTokenHandler();
            return tokenHandler.WriteToken(token);
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
