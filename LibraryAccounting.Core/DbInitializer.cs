using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using LibraryAccounting.Core.Models;

namespace LibraryAccounting.Core
{
		public static class DbInitializer
		{
				public async static Task Initialize(RepositoryContext context)
				{
						await context.Database.MigrateAsync().ConfigureAwait(false);

						var userCount = await context.Users.CountAsync().ConfigureAwait(false);
						if (userCount == 0)
						{
								context.Users.Add(new User()
								{
										Login = "admin",
										Password = "12345678",
										IsAdmin = true
								});

								await context.SaveChangesAsync().ConfigureAwait(false);
						}
				}
		}
}
