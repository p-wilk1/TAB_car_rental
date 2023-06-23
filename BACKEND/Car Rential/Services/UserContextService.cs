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
            GetCustomer is null
                ? null
                : (int?)
                    int.Parse(
                        GetCustomer.FindFirst(c => c.Type == ClaimTypes.NameIdentifier).Value
                    );

        public string GetUserRole =>
            GetCustomer is null
                ? null
                : GetCustomer.FindFirst(c => c.Type == ClaimTypes.Role).Value;
    }
}
