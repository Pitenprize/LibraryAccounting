using Microsoft.EntityFrameworkCore;
using LibraryAccounting.Core.Models;

namespace LibraryAccounting.Core
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions<RepositoryContext> contextOptions) : base(contextOptions) { }

        public DbSet<Book> Books { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
