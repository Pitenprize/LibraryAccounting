using System.Threading.Tasks;
using LibraryAccounting.Core.Interfaces;
using LibraryAccounting.Core.Models;

namespace LibraryAccounting.Core.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(string connectionString, IRepositoryContextFactory contextFactory) :
            base(connectionString, contextFactory)
        { }

        public Task<User> GetByLogin(string login, string password)
        {
            return FirstOrDefault(u => u.Login == login && u.Password == password);
        }
    }
}
