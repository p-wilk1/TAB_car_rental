using Microsoft.AspNetCore.Authorization;

namespace Car_Rential.Authorization
{
    public class OwnAccountActionRequirement : IAuthorizationRequirement
    {
        public int Id { get; }

        public OwnAccountActionRequirement(int id)
        {
            Id = id;
        }
    }
}
