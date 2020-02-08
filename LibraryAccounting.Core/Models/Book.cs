namespace LibraryAccounting.Core.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public string Publisher { get; set; }
        public int PublicationDate { get; set; }
        public int PageCount { get; set; }
        public int Quantity { get; set; }
    }
}
