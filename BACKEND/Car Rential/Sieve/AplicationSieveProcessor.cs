using Car_Rential.Entieties;
using Car_Rential.Model;
using Microsoft.Extensions.Options;
using Sieve.Models;
using Sieve.Services;

namespace Car_Rential.Sieve
{
    public class AplicationSieveProcessor : SieveProcessor
    {
        public AplicationSieveProcessor(IOptions<SieveOptions> options)
            : base(options) { }

        protected override SievePropertyMapper MapProperties(SievePropertyMapper mapper)
        {
            mapper.Property<Reservation>(r => r.StartDate).CanFilter().CanSort();
            mapper.Property<Reservation>(r => r.EndDate).CanFilter().CanSort();
            mapper.Property<Reservation>(r => r.ReservatonNumber).CanFilter().CanSort();
            mapper.Property<Reservation>(r => r.Car.Model).CanFilter().CanSort();
            mapper.Property<Reservation>(r => r.Car.Brand).CanFilter().CanSort();
            mapper.Property<Reservation>(r => r.Car.Type).CanFilter().CanSort();
            mapper
                .Property<Reservation>(r => r.PickupLocation.OfficeName)
                .CanFilter()
                .CanSort()
                .HasName("PickUpLocation");
            mapper
                .Property<Reservation>(r => r.ReturnLocation.OfficeName)
                .CanFilter()
                .CanSort()
                .HasName("ReturnLocation");
            mapper.Property<Reservation>(r => r.Customer.LastName).CanFilter().CanSort();
            mapper.Property<Reservation>(r => r.Customer.FirstName).CanFilter().CanSort();

            return mapper;
        }
    }
}
