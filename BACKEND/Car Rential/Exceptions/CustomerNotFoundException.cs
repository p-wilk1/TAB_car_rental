namespace Car_Rential.Exceptions
{
    public class CustomerNotFoundException : Exception
    {
        public CustomerNotFoundException(string message)
            : base(message) { }
    }
}
