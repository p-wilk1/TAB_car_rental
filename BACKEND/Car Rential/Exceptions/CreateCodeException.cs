namespace Car_Rential.Exceptions
{
    public class CreateCodeException : BaseException
    {
        public CreateCodeException(string message)
            : base(message) { }

        public override int statusCode => 405;
    }
}
