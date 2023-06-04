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
        }
    }
}
