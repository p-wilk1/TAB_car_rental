using AutoMapper;
using Car_Rential.Entieties;
using Car_Rential.Model;

namespace Car_Rential.Helpers
{
    public class RentalAutoMapper : Profile
    {
        public RentalAutoMapper()
        {
            CreateMap<CustomerInputDto, Customer>();
        }
    }
}
