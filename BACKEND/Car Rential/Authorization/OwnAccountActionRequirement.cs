using Microsoft.AspNetCore.Authorization;

namespace Car_Rential.Authorization
{
    public class OwnAccountActionRequirement : IAuthorizationRequirement
    {
        public string Role { get; }
        public int Id { get; }

        public OwnAccountActionRequirement(string role, int id)
        {
            Role = role;
            Id = id;
        }
    }
}
