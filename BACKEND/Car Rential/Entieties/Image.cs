using System.Reflection.Metadata.Ecma335;

namespace Car_Rential.Entieties
{
    public class Image
    {
        public int Id { get; set; }
        public string ImagePath { get; set; }

        public int CarId { get; set; }
        public virtual Car Car { get; set; }
    }
}
