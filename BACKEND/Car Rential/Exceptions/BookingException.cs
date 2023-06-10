namespace Car_Rential.Exceptions
{
    public class BookingException : BaseException
    {
        public override int statusCode => 409;

        public BookingException(string message)
            : base(message) { }
    }
}
