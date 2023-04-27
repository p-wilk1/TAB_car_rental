using AutoMapper;
using Car_Rential.Entieties;
using Car_Rential.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

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
            var newMigrations = _dbContext.Database.GetPendingMigrations();

            if (newMigrations.Any())
            {
                _dbContext.Database.Migrate();
            }

            if (_dbContext.Database.CanConnect())
            {
                if (!_dbContext.Custormers.Any())
                {
                    var users = GetCustomers();

                    _dbContext.AddRange(users);
                    _dbContext.SaveChanges();
                }
                if (!_dbContext.Cars.Any())
                {
                    var cars = GetCars();

                    _dbContext.AddRange(cars);
                    _dbContext.SaveChanges();
                }
            }
        }

        private List<Customer> GetCustomers()
        {
            var result = new List<Customer>();
            var admin = new Customer
            {
                FirstName = "Admin",
                LastName = "Admin",
                PhoneNumber = "000000000",
                Email = "admin",
                Pesel = "00000000000",
                CustromerAddress = new CustomerAddress
                {
                    Country = "Poland",
                    City = "Gliwice",
                    StreetName = "Akademicka",
                    BuildingNumber = "16",
                    ZipCode = "44100",
                    State = "Silesia"
                }
            };
            var adminPassword = "admin";
            admin.HassedPassword = _passwordHasher.HashPassword(admin, adminPassword);
            result.Add(admin);

            var c1 = new Customer
            {
                FirstName = "Adam",
                LastName = "Malysz",
                PhoneNumber = "1234567890",
                Email = "aaa@bbb.pl",
                Pesel = "11111111111",
                CustromerAddress = new CustomerAddress
                {
                    Country = "Poland",
                    City = "Zakopane",
                    StreetName = "Skocznia",
                    BuildingNumber = "6",
                    ZipCode = "42300",
                    State = "Silesia"
                }
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
                Pesel = "22222222222",
                CustromerAddress = new CustomerAddress
                {
                    Country = "England",
                    City = "Manchester",
                    StreetName = "Ashton New Rd",
                    BuildingNumber = "10",
                    ZipCode = "11111",
                    State = "Manchester"
                }
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
                Pesel = "33333333333",
                CustromerAddress = new CustomerAddress
                {
                    Country = "Poland",
                    City = "Biała Rawska",
                    StreetName = "Pudzian Streed",
                    BuildingNumber = "1",
                    ZipCode = "11111",
                    State = "Lodzkie"
                }
            };
            var c3Password = "MariuszPudzianowski123!";
            var c3HassedPassword = _passwordHasher.HashPassword(c3, c3Password);
            c3.HassedPassword = c3HassedPassword;
            result.Add(c3);

            return result;
        }

        private List<Car> GetCars()
        {
            var result = new List<Car>();

            var c1 = new Car
            {
                Type = CarTypes.Coupe,
                Model = "Focus MK2",
                Brand = "Ford",
                RegistrationNumber = "SMY6HK1",
                pricePerDay = 100,
                CarInfo = new CarInfo
                {
                    SeatsNumber = 1,
                    DoorsNumber = 1,
                    GearboxType = "Manu",
                    Color = "Blue",
                    Description = "My Car",
                    ProductionYear = 2005,
                    Mileage = 185000,
                    FuelType = "Gaseline"
                }
            };

            result.Add(c1);

            var c2 = new Car
            {
                Type = CarTypes.Coupe,
                Model = "911",
                Brand = "Porshe",
                RegistrationNumber = "aaaa",
                pricePerDay = 2000,
                CarInfo = new CarInfo
                {
                    SeatsNumber = 1,
                    DoorsNumber = 1,
                    GearboxType = "Manu",
                    Color = "Blue",
                    Description = "My Car",
                    ProductionYear = 2005,
                    Mileage = 185000,
                    FuelType = "Gaseline"
                }
            };
            result.Add(c2);
            return result;
        }
    }
}
