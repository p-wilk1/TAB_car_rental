namespace Car_Rential.Exceptions
{
    public class LoginFailException : BaseException
    {
        public override int statusCode { get; } = 401;

        public LoginFailException(string message)
            : base(message) { }
    }
}
