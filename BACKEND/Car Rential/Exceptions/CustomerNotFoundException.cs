namespace Car_Rential.Exceptions
{
    public class CustomerNotFoundException : BaseException
    {
        public override int statusCode { get; } = 404;

        public CustomerNotFoundException(string message)
            : base(message) { }
    }
}
