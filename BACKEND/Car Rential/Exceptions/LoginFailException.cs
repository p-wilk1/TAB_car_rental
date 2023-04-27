namespace Car_Rential.Exceptions
{
    public class LoginFailException : Exception
    {
        public LoginFailException(string message)
            : base(message) { }
    }
}
