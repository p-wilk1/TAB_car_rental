namespace Car_Rential.Model
{
    public class PaginatedOutput<T>
    {
        public List<T> Items { get; set; }
        public int TotalPages { get; set; }
        public int ItemsFrom { get; set; }
        public int ItemsTo { get; set; }
        public int TotalItems { get; set; }

        public PaginatedOutput(List<T> items, int totalItems, int pageNumber, int pageSize)
        {
            Items = items;
            TotalItems = totalItems;
            ItemsFrom = pageSize * (pageNumber - 1);
            ItemsTo = ItemsFrom + pageSize - 1;
            TotalPages = (int)Math.Ceiling(totalItems / (double)pageSize);
        }
    }
}
