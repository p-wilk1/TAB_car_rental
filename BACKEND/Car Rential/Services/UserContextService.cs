using Car_Rential.Interfaces;
using System.Security.Claims;

namespace Car_Rential.Services
{
    public class CustomerContextService : ICustomerContextService
    {
        private readonly IHttpContextAccessor _contextAccessor;

        public CustomerContextService(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }

        public ClaimsPrincipal GetCustomer => _contextAccessor.HttpContext?.User;
        public int? GetUserId =>
            GetCustomer == null
                ? null
                : int.Parse(
                    GetCustomer.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value
                );
    }
}
