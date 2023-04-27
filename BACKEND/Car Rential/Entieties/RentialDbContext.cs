using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Abstractions;

namespace Car_Rential.Entieties
{
    public class RentialDbContext : DbContext
    {
        public RentialDbContext(DbContextOptions<RentialDbContext> contextOptions)
            : base(contextOptions) { }

        public DbSet<Car> Cars { get; set; }
        public DbSet<CarInfo> CarInfos { get; set; }
        public DbSet<Customer> Custormers { get; set; }
        public DbSet<CustomerAddress> CustromerAddresses { get; set; }
        public DbSet<Discount> Discounts { get; set; }
        public DbSet<Office> Offices { get; set; }
        public DbSet<OfficeAddress> OfficeAddresses { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().Property(c => c.FirstName).IsRequired();
            modelBuilder.Entity<CustomerAddress>().Property(a => a.Country).IsRequired();
        }
    }
}
