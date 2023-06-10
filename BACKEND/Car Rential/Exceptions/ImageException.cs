namespace Car_Rential.Exceptions
{
    public class ImageException : BaseException
    {
        public override int statusCode => 404;

        public ImageException(string message)
            : base(message) { }
    }
}
