using AutoMapper;
using Car_Rential.Entieties;
using Car_Rential.Model;

namespace Car_Rential.MapperProfiles
{
    public class ReservationAutoMapper : Profile
    {
        public ReservationAutoMapper()
        {
            CreateMap<ReservationInput, Reservation>();
            CreateMap<Reservation, ReturnReservationDto>()
                .ForMember(dest => dest.Car, opt => opt.MapFrom(src => src.Car))
                .ForMember(
                    dest => dest.PickupLocation,
                    opt => opt.MapFrom(src => src.PickupLocation)
                )
                .ForMember(
                    dest => dest.ReturnLocation,
                    opt => opt.MapFrom(src => src.ReturnLocation)
                )
                .ForMember(dest => dest.Customer, opt => opt.MapFrom(src => src.Customer))
                .ForMember(
                    dest => dest.StartDate,
                    opt => opt.MapFrom(src => src.StartDate.ToString("g"))
                )
                .ForMember(
                    dest => dest.EndDate,
                    opt => opt.MapFrom(src => src.EndDate.ToString("g"))
                );

            CreateMap<Reservation, ReservationToListDto>()
                .ForMember(c => c.Marka, d => d.MapFrom(x => x.Car.Brand))
                .ForMember(c => c.Model, d => d.MapFrom(x => x.Car.Model))
                .ForMember(
                    dest => dest.StartDate,
                    opt => opt.MapFrom(src => src.StartDate.ToString("g"))
                )
                .ForMember(
                    dest => dest.EndDate,
                    opt => opt.MapFrom(src => src.EndDate.ToString("g"))
                );
        }
    }
}
