using System.Threading.Tasks;
using LibraryAccounting.Core.Models;

namespace LibraryAccounting.Core.Interfaces
{
    public interface IUserRepository : IRepositoryBase<User>
    {
        Task<User> GetByLogin(string login, string password);
    }
}
