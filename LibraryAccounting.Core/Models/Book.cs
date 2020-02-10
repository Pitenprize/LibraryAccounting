using LibraryAccounting.Core.Interfaces;

namespace LibraryAccounting.Core.Models
{
    public class Book : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public string Publisher { get; set; }
        public int PublicationYear { get; set; }
        public int PageCount { get; set; }
        public int Quantity { get; set; }
    }
}
