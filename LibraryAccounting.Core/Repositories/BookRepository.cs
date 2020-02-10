using LibraryAccounting.Core.Interfaces;
using LibraryAccounting.Core.Models;

namespace LibraryAccounting.Core.Repositories
{
    public class BookRepository : BaseRepository<Book>, IBookRepository
    {
        public BookRepository(string connectionString, IRepositoryContextFactory contextFactory) :
            base(connectionString, contextFactory) { }
    }
}
    