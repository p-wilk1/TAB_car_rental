﻿using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Abstractions;

namespace Car_Rential.Entieties
{
    public class RentialDbContext : DbContext
    {
        public RentialDbContext(DbContextOptions<RentialDbContext> contextOptions)
            : base(contextOptions) { }

        public DbSet<Car> Cars { get; set; }
        public DbSet<CarInfo> CarInfos { get; set; }
        public DbSet<Custormer> Custormers { get; set; }
        public DbSet<CustromerAddress> CustromerAddresses { get; set; }
        public DbSet<Discount> Discounts { get; set; }
        public DbSet<Office> Offices { get; set; }
        public DbSet<OfficeAddress> OfficeAddresses { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Custormer>().Property(c => c.FirstName).IsRequired();
            modelBuilder.Entity<CustromerAddress>().Property(a => a.Country).IsRequired();
        }
    }
}
