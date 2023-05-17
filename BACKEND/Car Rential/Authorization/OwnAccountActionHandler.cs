using Car_Rential.Entieties;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace Car_Rential.Authorization
{
    public class OwnAccountActionHandler
        : AuthorizationHandler<OwnAccountActionRequirement, Customer>
    {
        protected override Task HandleRequirementAsync(
            AuthorizationHandlerContext context,
            OwnAccountActionRequirement requirement,
            Customer resource
        )
        {
            if (requirement.Id == 1 || requirement.Id == resource.Id)
            {
                context.Succeed(requirement);
                return Task.CompletedTask;
            }

            return Task.CompletedTask;
        }
    }
}
