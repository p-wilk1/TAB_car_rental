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
                .ForMember(dest => dest.Customer, opt => opt.MapFrom(src => src.Customer));
        }
    }
}
