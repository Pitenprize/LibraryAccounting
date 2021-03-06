﻿using Microsoft.EntityFrameworkCore;
using LibraryAccounting.Core.Interfaces;

namespace LibraryAccounting.Core.Factories
{
    public class RepositoryContextFactory : IRepositoryContextFactory
    {
				public RepositoryContext CreateDbContext(string connectionString)
				{
						var optionsBuilder = new DbContextOptionsBuilder<RepositoryContext>();
						optionsBuilder.UseSqlServer(connectionString);

						return new RepositoryContext(optionsBuilder.Options);
				}
		}
}
