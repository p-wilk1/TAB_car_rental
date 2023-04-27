using AutoMapper;
using Car_Rential.Entieties;
using Car_Rential.Model;
using Microsoft.AspNetCore.Routing.Constraints;

namespace Car_Rential.Helpers
{
    public class RentalAutoMapper : Profile
    {
        public RentalAutoMapper()
        {
            CreateMap<InputCustomerDto, Customer>()
                .ForMember(
                    c => c.CustromerAddress,
                    d =>
                        d.MapFrom(
                            x =>
                                new CustomerAddress
                                {
                                    Country = x.Country,
                                    City = x.City,
                                    State = x.State,
                                    StreetName = x.StreetName,
                                    BuildingNumber = x.BuildingNumber,
                                    ZipCode = x.ZipCode,
                                }
                        )
                );

            CreateMap<CustomerAddress, CustomerAdressDto>();

            CreateMap<Customer, ReturnCustomerDto>()
                .ForPath(
                    c => c.customerAdress.Country,
                    x => x.MapFrom(y => y.CustromerAddress.Country)
                )
                .ForPath(c => c.customerAdress.City, x => x.MapFrom(y => y.CustromerAddress.City))
                .ForPath(
                    c => c.customerAdress.StreetName,
                    x => x.MapFrom(y => y.CustromerAddress.StreetName)
                )
                .ForPath(
                    c => c.customerAdress.BuildingNumber,
                    x => x.MapFrom(y => y.CustromerAddress.BuildingNumber)
                )
                .ForPath(
                    c => c.customerAdress.ZipCode,
                    x => x.MapFrom(y => y.CustromerAddress.ZipCode)
                )
                .ForPath(
                    c => c.customerAdress.State,
                    x => x.MapFrom(y => y.CustromerAddress.State)
                );
        }
    }
}
