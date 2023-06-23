using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Abstractions;

namespace Car_Rential.Entieties
{
    public class RentalDbContext : DbContext
    {
        public RentalDbContext(DbContextOptions<RentalDbContext> contextOptions)
            : base(contextOptions) { }

        public DbSet<Car> Cars { get; set; }
        public DbSet<CarInfo> CarInfos { get; set; }
        public DbSet<Customer> Custormers { get; set; }
        public DbSet<CustomerAddress> CustromerAddresses { get; set; }
        public DbSet<Discount> Discounts { get; set; }
        public DbSet<Office> Offices { get; set; }
        public DbSet<OfficeAddress> OfficeAddresses { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<Image> Images { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Office>()
                .HasMany(p => p.PickUpReservations)
                .WithOne(r => r.PickupLocation)
                .HasForeignKey(k => k.PickupLocationId)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder
                .Entity<Office>()
                .HasMany(r => r.ReturnReservations)
                .WithOne(r => r.ReturnLocation)
                .HasForeignKey(k => k.ReturnLocationId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
