using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace LibraryAccounting.Core.Interfaces
{
    public interface IRepositoryBase<T>
    {
        Task<T> GetById(int id);
        Task<T> FirstOrDefault(Expression<Func<T, bool>> predicate);

        Task Create(T entity);
        Task Update(T entity);
        Task Delete(T entity);

        Task<IEnumerable<T>> GetAll();
        Task<int> CountAll();
    }
}
