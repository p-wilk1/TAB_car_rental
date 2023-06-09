﻿// <auto-generated />
using System;
using Car_Rential.Entieties;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Car_Rential.Migrations
{
    [DbContext(typeof(RentalDbContext))]
    [Migration("20230425181321_first")]
    partial class first
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Car_Rential.Entieties.Car", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Brand")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CarInfoId")
                        .HasColumnType("int");

                    b.Property<string>("Model")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OfficeId")
                        .HasColumnType("int");

                    b.Property<string>("RegistrationNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.Property<double>("pricePerDay")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("CarInfoId");

                    b.HasIndex("OfficeId");

                    b.ToTable("Cars");
                });

            modelBuilder.Entity("Car_Rential.Entieties.CarInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Color")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DoorsNumber")
                        .HasColumnType("int");

                    b.Property<string>("FuelType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GearboxType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Mileage")
                        .HasColumnType("int");

                    b.Property<int>("ProductionYear")
                        .HasColumnType("int");

                    b.Property<int>("SeatsNumber")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("CarInfos");
                });

            modelBuilder.Entity("Car_Rential.Entieties.Customer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CustomerAddressId")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HassedPassword")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pesel")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Custormers");
                });

            modelBuilder.Entity("Car_Rential.Entieties.CustromerAddress", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("BuildingNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CustormerId")
                        .HasColumnType("int");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StreetName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ZipCode")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CustormerId")
                        .IsUnique();

                    b.ToTable("CustromerAddresses");
                });

            modelBuilder.Entity("Car_Rential.Entieties.Discount", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("DiscountCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DiscountPercent")
                        .HasColumnType("int");

                    b.Property<bool>("isAvailable")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Discounts");
                });

            modelBuilder.Entity("Car_Rential.Entieties.Office", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OfficeAddressId")
                        .HasColumnType("int");

                    b.Property<string>("OfficeName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PhoneNumber")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OfficeAddressId")
                        .IsUnique();

                    b.ToTable("Offices");
                });

            modelBuilder.Entity("Car_Rential.Entieties.OfficeAddress", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("BuildingNumber")
                        .HasColumnType("int");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StreetName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("OfficeAddresses");
                });

            modelBuilder.Entity("Car_Rential.Entieties.Reservation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CarId")
                        .HasColumnType("int");

                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.Property<int?>("CustormerId")
                        .HasColumnType("int");

                    b.Property<int?>("DiscountId")
                        .HasColumnType("int");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("PickupLocationId")
                        .HasColumnType("int");

                    b.Property<int>("ReturnLocationId")
                        .HasColumnType("int");

                    b.Property<int?>("ReturnLocationId")
                        .HasColumnType("int");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("CustormerId");

                    b.HasIndex("DiscountId");

                    b.HasIndex("PickupLocationId");

                    b.HasIndex("ReturnLocationId");

                    b.ToTable("Reservations");
                });

            modelBuilder.Entity("Car_Rential.Entieties.Car", b =>
                {
                    b.HasOne("Car_Rential.Entieties.CarInfo", "CarInfo")
                        .WithMany()
                        .HasForeignKey("CarInfoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Car_Rential.Entieties.Office", "Office")
                        .WithMany("Cars")
                        .HasForeignKey("OfficeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CarInfo");

                    b.Navigation("Office");
                });

            modelBuilder.Entity("Car_Rential.Entieties.CustromerAddress", b =>
                {
                    b.HasOne("Car_Rential.Entieties.Customer", "Customer")
                        .WithOne("CustromerAddress")
                        .HasForeignKey("Car_Rential.Entieties.CustromerAddress", "CustormerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Customer");
                });

            modelBuilder.Entity("Car_Rential.Entieties.Office", b =>
                {
                    b.HasOne("Car_Rential.Entieties.OfficeAddress", "OfficeAddress")
                        .WithOne("Office")
                        .HasForeignKey("Car_Rential.Entieties.Office", "OfficeAddressId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("OfficeAddress");
                });

            modelBuilder.Entity("Car_Rential.Entieties.Reservation", b =>
                {
                    b.HasOne("Car_Rential.Entieties.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustormerId");

                    b.HasOne("Car_Rential.Entieties.Discount", "Discount")
                        .WithMany()
                        .HasForeignKey("DiscountId");

                    b.HasOne("Car_Rential.Entieties.Office", "PickupLocation")
                        .WithMany()
                        .HasForeignKey("PickupLocationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Car_Rential.Entieties.Office", "ReturnLocation")
                        .WithMany()
                        .HasForeignKey("ReturnLocationId");

                    b.Navigation("Customer");

                    b.Navigation("Discount");

                    b.Navigation("PickupLocation");

                    b.Navigation("ReturnLocation");
                });

            modelBuilder.Entity("Car_Rential.Entieties.Customer", b =>
                {
                    b.Navigation("CustromerAddress");
                });

            modelBuilder.Entity("Car_Rential.Entieties.Office", b =>
                {
                    b.Navigation("Cars");
                });

            modelBuilder.Entity("Car_Rential.Entieties.OfficeAddress", b =>
                {
                    b.Navigation("Office");
                });
#pragma warning restore 612, 618
        }
    }
}
