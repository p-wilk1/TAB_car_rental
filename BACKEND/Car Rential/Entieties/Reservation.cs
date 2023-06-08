using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Car_Rential.Entieties
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string ReservatonNumber { get; set; }

        public int CarId { get; set; }
        public virtual Car Car { get; set; }

        public int? DiscountId { get; set; }
        public virtual Discount Discount { get; set; }

        public int CustomerId { get; set; }
        public virtual Customer Customer { get; set; }

        public int? PickupLocationId { get; set; }
        public virtual Office PickupLocation { get; set; }

        public int? ReturnLocationId { get; set; }
        public virtual Office ReturnLocation { get; set; }
    }
}
