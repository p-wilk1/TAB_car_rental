using Car_Rential.Entieties;
using Car_Rential.Model;

namespace Car_Rential.Interfaces
{
    public interface ICustomersService
    {
        public IEnumerable<ReturnCustomerDto> GetCustomers();
        public int RegisterCustomer(InputCustomerDto customerDto);
        public string LoginCustomer(LoginCustomerDto customerDto);
        public void DeleteCustomer(int customerId);
        public void UpdateCustomer(InputCustomerDto customerDto, int customerId);
    }
}
