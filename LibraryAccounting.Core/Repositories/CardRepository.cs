using LibraryAccounting.Core.Interfaces;
using LibraryAccounting.Core.Models;

namespace LibraryAccounting.Core.Repositories
{
    public class CardRepository : BaseRepository<Card>, ICardRepository
    {
        public CardRepository(string connectionString, IRepositoryContextFactory contextFactory) :
            base(connectionString, contextFactory) { }
    }
}
