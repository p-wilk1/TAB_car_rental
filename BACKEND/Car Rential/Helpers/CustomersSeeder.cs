﻿using AutoMapper;
using Car_Rential.Entieties;
using Car_Rential.Model;
using Microsoft.AspNetCore.Identity;

namespace Car_Rential.Helpers
{
    public class CustomersSeeder
    {
        private readonly RentialDbContext _dbContext;
        private readonly IPasswordHasher<Customer> _passwordHasher;

        public CustomersSeeder(RentialDbContext context, IPasswordHasher<Customer> passwordHasher)
        {
            _dbContext = context;
            _passwordHasher = passwordHasher;
        }

        public void Seeder()
        {
            if (_dbContext.Database.CanConnect())
            {
                var users = GetCustomers();

                _dbContext.AddRange(users);
                _dbContext.SaveChanges();
            }
        }

        private List<Customer> GetCustomers()
        {
            var result = new List<Customer>();
            var c1 = new Customer
            {
                FirstName = "Adam",
                LastName = "Malysz",
                PhoneNumber = "1234567890",
                Email = "aaa@bbb.pl",
                Pesel = "00000000000",
            };
            var c1Password = "AdamMalysz123!";
            var c1HassedPassword = _passwordHasher.HashPassword(c1, c1Password);
            c1.HassedPassword = c1HassedPassword;
            result.Add(c1);

            var c2 = new Customer
            {
                FirstName = "Erling",
                LastName = "Haaland",
                PhoneNumber = "1234567890",
                Email = "ccc@ddd.pl",
                Pesel = "11111111111",
            };
            var c2Password = "ErlingHaaland123!";
            var c2HassedPassword = _passwordHasher.HashPassword(c2, c2Password);
            c2.HassedPassword = c2HassedPassword;
            result.Add(c2);

            var c3 = new Customer
            {
                FirstName = "Mariusz",
                LastName = "Pudzianowski",
                PhoneNumber = "1234567890",
                Email = "eee@fff.pl",
                Pesel = "22222222222",
            };
            var c3Password = "MariuszPudzianowski123!";
            var c3HassedPassword = _passwordHasher.HashPassword(c3, c3Password);
            c3.HassedPassword = c3HassedPassword;
            result.Add(c3);

            return result;
        }
    }
}
