using LibraryAccounting.Core.Interfaces;
using System;

namespace LibraryAccounting.Core.Models
{
    public class Card : IEntity
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Book Book { get; set; }
        public DateTime BorrowDate { get; set; }
        public DateTime ReturnDate { get; set; }
    }
}
