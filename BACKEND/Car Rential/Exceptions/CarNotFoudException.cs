using Car_Rential.Interfaces;

namespace Car_Rential.Exceptions
{
    public class CarNotFoudException : BaseException
    {
        public override int statusCode { get; } = 404;

        public CarNotFoudException(string message)
            : base(message) { }
    }
}
