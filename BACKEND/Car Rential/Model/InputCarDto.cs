﻿using Car_Rential.Entieties;

namespace Car_Rential.Model
{
    public class InputCarDto
    {
        public CarTypes? Type { get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }
        public string RegistrationNumber { get; set; }
        public double? pricePerDay { get; set; }
        public int? SeatsNumber { get; set; }
        public int? DoorsNumber { get; set; }
        public string GearboxType { get; set; }
        public string Color { get; set; }
        public string Description { get; set; }
        public int? ProductionYear { get; set; }
        public int? Mileage { get; set; }
        public string FuelType { get; set; }
    }
}
