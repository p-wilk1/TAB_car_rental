using Car_Rential.Entieties;
using Car_Rential.Model;
using System.Linq.Expressions;

namespace Car_Rential.Interfaces
{
    public interface ICustomersService
    {
        public IEnumerable<ReturnCustomerDto> GetCustomers();
        public int RegisterCustomer(InputCustomerDto customerDto);
        public string LoginCustomer(LoginCustomerDto customerDto);
        public void DeleteCustomer(int customerId);
        public void UpdateCustomer(InputCustomerDto customerDto, int customerId);

        public Customer FindCustomer(
            int customerId,
            params Expression<Func<Customer, object>>[] expressions
        );
        public ReturnCustomerDto GetCustomerDto(int customerId);
    }
}
