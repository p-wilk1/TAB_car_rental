using System.Security.Claims;

namespace Car_Rential.Interfaces
{
    public interface ICustomerContextService
    {
        ClaimsPrincipal GetCustomer { get; }
        int? GetUserId { get; }
    }
}
