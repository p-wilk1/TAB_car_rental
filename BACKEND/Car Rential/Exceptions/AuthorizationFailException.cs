namespace Car_Rential.Exceptions
{
    public class AuthorizationFailException : BaseException
    {
        public override int statusCode { get; } = 403;

        public AuthorizationFailException(string message)
            : base(message) { }
    }
}
