using AutoMapper;
using Bogus;
using Bogus.Extensions.UnitedKingdom;
using Car_Rential.Entieties;
using Car_Rential.Model;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Org.BouncyCastle.Crypto;

namespace Car_Rential.Helpers
{
    public class CustomersSeeder
    {
        private readonly RentalDbContext _dbContext;
        private readonly IPasswordHasher<Customer> _passwordHasher;
        private readonly IValidator<Reservation> _validator;

        public CustomersSeeder(
            RentalDbContext context,
            IPasswordHasher<Customer> passwordHasher,
            IValidator<Reservation> validator
        )
        {
            _dbContext = context;
            _passwordHasher = passwordHasher;
            _validator = validator;
        }

        public void Seeder(int howMany)
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
                    var users = GetCustomers(howMany);

                    _dbContext.AddRange(users);
                    _dbContext.SaveChanges();
                }
                if (!_dbContext.Offices.Any())
                {
                    var offices = GetOffices();

                    _dbContext.AddRange(offices);
                    _dbContext.SaveChanges();
                }
                if (!_dbContext.Cars.Any())
                {
                    var cars = GetCars(howMany);

                    _dbContext.AddRange(cars);
                    _dbContext.SaveChanges();
                }
                if (!_dbContext.Reservations.Any())
                {
                    var reservations = GetReservations(howMany);
                    _dbContext.AddRange(reservations);
                    _dbContext.SaveChanges();
                }
            }
        }

        private List<Customer> GetCustomers(int howMany)
        {
            var result = new List<Customer>();
            var admin = new Customer
            {
                FirstName = "Admin",
                LastName = "Admin",
                PhoneNumber = "000000000",
                Email = "admin@gmail.com",
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
            result.AddRange(GetCustomerss(howMany - 1));

            return result;
        }

        private List<Office> GetOffices()
        {
            var result = new List<Office>();

            var a = new Office
            {
                OfficeName = "Office A",
                PhoneNumber = 123456789,
                Email = "AOffice@SoGood.com",
                OfficeAddress = new OfficeAddress
                {
                    Country = "Poland",
                    State = "Silesia",
                    City = "Gliwice",
                    StreetName = "Akademicka",
                    BuildingNumber = 1,
                }
            };

            result.Add(a);
            var b = new Office
            {
                OfficeName = "Office B",
                PhoneNumber = 987654321,
                Email = "BOffice@SoGood.com",
                OfficeAddress = new OfficeAddress
                {
                    Country = "Poland",
                    State = "Silesia",
                    City = "Katowice",
                    StreetName = "Mariacka",
                    BuildingNumber = 2,
                }
            };
            result.Add(b);

            var c = new Office
            {
                OfficeName = "Office C",
                PhoneNumber = 123456789,
                Email = "COffice@SoGood.com",
                OfficeAddress = new OfficeAddress
                {
                    Country = "Poland",
                    State = "Lesser Poland Voivodeship",
                    City = "Kraków",
                    StreetName = "Floriańska",
                    BuildingNumber = 3,
                }
            };
            result.Add(c);

            return result;
        }

        private IEnumerable<Customer> GetCustomerss(int a)
        {
            var locale = "pl";
            var adress = new Faker<CustomerAddress>(locale)
                .RuleFor(a => a.Country, "Polska")
                .RuleFor(a => a.City, e => e.Address.City())
                .RuleFor(a => a.StreetName, e => e.Address.StreetAddress())
                .RuleFor(a => a.BuildingNumber, e => e.Address.BuildingNumber())
                .RuleFor(a => a.ZipCode, e => e.Address.ZipCode())
                .RuleFor(a => a.State, e => e.Address.State());

            var randomCustomers = new Faker<Customer>(locale)
                .RuleFor(c => c.FirstName, e => e.Person.FirstName)
                .RuleFor(c => c.LastName, e => e.Person.LastName)
                .RuleFor(c => c.PhoneNumber, e => e.Phone.PhoneNumber("###-###-###").ToString())
                .RuleFor(c => c.Email, e => e.Internet.Email())
                .RuleFor(c => c.Pesel, e => e.Random.String2(11, "123456789"))
                .RuleFor(c => c.CustromerAddress, e => adress.Generate());

            var result = randomCustomers.Generate(a);

            foreach (var customer in result)
            {
                var password = customer.FirstName + customer.LastName + "123!";
                var hassedPassword = _passwordHasher.HashPassword(customer, password);
                customer.HassedPassword = hassedPassword;
            }

            return result;
        }

        private IEnumerable<Car> GetCars(int a)
        {
            var local = "pl";
            var info = new Faker<CarInfo>(local)
                .RuleFor(i => i.SeatsNumber, e => e.Random.Int(min: 2, max: 5))
                .RuleFor(i => i.DoorsNumber, e => e.Random.Int(min: 2, max: 5))
                .RuleFor(i => i.GearboxType, e => e.PickRandom(GearType))
                .RuleFor(i => i.Color, e => e.PickRandom(Colors))
                .RuleFor(i => i.Description, e => e.Random.Words(15))
                .RuleFor(i => i.ProductionYear, e => e.Random.Int(min: 2019, max: 2023))
                .RuleFor(i => i.Mileage, e => e.Random.Int(min: 0, max: 100))
                .RuleFor(i => i.FuelType, e => e.Vehicle.Fuel());

            var offceIds = _dbContext.Offices.Select(a => a.Id).ToList();
            var car = new Faker<Car>(local)
                .RuleFor(c => c.Type, e => e.Vehicle.Type())
                .RuleFor(c => c.Model, e => e.Vehicle.Model())
                .RuleFor(c => c.Brand, e => e.Vehicle.Manufacturer())
                .RuleFor(
                    c => c.RegistrationNumber,
                    e => e.Random.String2(7, "QWERTYUIOPLKJHGFDASZXCVBNM123456789")
                )
                .RuleFor(c => c.pricePerDay, e => e.Random.UInt(100, 2500))
                .RuleFor(c => c.OfficeId, e => e.PickRandom(offceIds))
                .RuleFor(c => c.CarInfo, e => info.Generate());

            var result = car.Generate(a);
            return result;
        }

        private readonly string[] GearType = { "Manual", "Automat" };
        private readonly string[] Colors =
        {
            "Czerwony",
            "Niebieski",
            "Czarny",
            "Biały",
            "Zielony",
            "Szary"
        };

        private IEnumerable<Reservation> GetReservations(int a)
        {
            var result = new List<Reservation>();

            var carsId = _dbContext.Cars.Select(c => c.Id).ToList();
            var customersId = _dbContext.Custormers.Select(c => c.Id).ToList();
            var officesId = _dbContext.Offices.Select(c => c.Id).ToList();

            var locale = "pl";
            var res = new Faker<Reservation>(locale)
                .RuleFor(r => r.StartDate, e => e.Date.Future())
                .RuleFor(
                    r => r.EndDate,
                    (e, r) =>
                    {
                        var startDate = r.StartDate;
                        var endDate = e.Date.Future(refDate: startDate);

                        return endDate;
                    }
                )
                .RuleFor(r => r.ReservatonNumber, e => e.Random.Guid().ToString())
                .RuleFor(r => r.CustomerId, e => e.PickRandom(customersId))
                .RuleFor(r => r.CarId, e => e.PickRandom(carsId))
                .RuleFor(r => r.PickupLocationId, e => e.PickRandom(officesId))
                .RuleFor(r => r.ReturnLocationId, e => e.PickRandom(officesId));

            while (result.Count() != a)
            {
                var r = res.Generate();
                var vResult = _validator.Validate(r);

                if (vResult.IsValid)
                {
                    result.Add(r);
                }
            }

            return result;
        }
    }
}
