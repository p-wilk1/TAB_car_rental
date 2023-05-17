namespace Car_Rential.Exceptions
{
    public class LoginFailException : BaseException
    {
        public override int statusCode { get; } = 404;

        public LoginFailException(string message)
            : base(message) { }
    }
}
