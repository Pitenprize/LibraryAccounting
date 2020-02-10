using LibraryAccounting.Core.Interfaces;

namespace LibraryAccounting.Core.Models
{
    public class User : IEntity
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public bool IsAdmin { get; set; }
    }
}
