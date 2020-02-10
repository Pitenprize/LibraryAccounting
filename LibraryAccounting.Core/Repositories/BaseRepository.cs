using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using LibraryAccounting.Core.Interfaces;

namespace LibraryAccounting.Core.Repositories
{
    public abstract class BaseRepository<T> : IRepositoryBase<T> where T : class, IEntity
    {
        protected string ConnectionString { get; }
        protected IRepositoryContextFactory ContextFactory { get; }

        public BaseRepository(string connectionString, IRepositoryContextFactory contextFactory)
        {
            this.ConnectionString = connectionString;
            this.ContextFactory = contextFactory;
        }

        public async Task<T> GetById(int id)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Set<T>().FindAsync(id);
            }
        }

        public async Task<T> FirstOrDefault(Expression<Func<T, bool>> predicate)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Set<T>().FirstOrDefaultAsync(predicate);
            }
        }

        public Task Create(T entity)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Set<T>().Add(entity);
                return context.SaveChangesAsync();
            }
        }

        public Task Update(T entity)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Set<T>().Update(entity);
                return context.SaveChangesAsync();
            }
        }

        public Task Delete(T entity)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Set<T>().Remove(entity);
                return context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Set<T>().AsNoTracking().ToListAsync();
            }
        }

        public async Task<int> CountAll()
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Set<T>().CountAsync();
            }
        }
    }
}
