using AutoMapper;
using Car_Rential.Entieties;
using Car_Rential.Model;

namespace Car_Rential.MapperProfiles
{
    public class CarAutoMapper : Profile
    {
        public CarAutoMapper()
        {
            CreateMap<CarInfo, ReturnCarInfoDto>();
            CreateMap<Car, ReturnCarDto>()
                .ForMember(dest => dest.CarInfo, opt => opt.MapFrom(src => src.CarInfo));

            CreateMap<RegisterCarDto, Car>()
                .ForMember(
                    c => c.CarInfo,
                    i =>
                        i.MapFrom(
                            x =>
                                new CarInfo
                                {
                                    SeatsNumber = x.SeatsNumber,
                                    DoorsNumber = x.DoorsNumber,
                                    GearboxType = x.GearboxType,
                                    Color = x.Color,
                                    Description = x.Description,
                                    ProductionYear = x.ProductionYear,
                                    Mileage = x.Mileage,
                                    FuelType = x.FuelType,
                                }
                        )
                );
        }
    }
}
