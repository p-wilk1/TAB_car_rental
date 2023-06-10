namespace Car_Rential.Exceptions
{
    public class ReservationNotFoundException : BaseException
    {
        public ReservationNotFoundException(string message)
            : base(message) { }

        public override int statusCode => 404;
    }
}
