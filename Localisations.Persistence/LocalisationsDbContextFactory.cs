using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.Reflection;

namespace Localisations.Persistence
{
    public class LocalisationsDbContextFactory : IDesignTimeDbContextFactory<LocalisationsDbContext>
    {

        private const string _connectionStringKey = "LocalisationsDb";

        public LocalisationsDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<LocalisationsDbContext>();

            builder.UseSqlite(GetConnectionString(), o =>
            {
                o.MigrationsAssembly(typeof(LocalisationsDbContext).GetTypeInfo().Assembly.GetName().Name);
            });
            
            return new LocalisationsDbContext(builder.Options);
        }

        public DbContextOptions<LocalisationsDbContext> GetOptions(IConfiguration configuration)
        {
            var builder = new DbContextOptionsBuilder<LocalisationsDbContext>();
            builder.UseSqlite(GetConnectionString(configuration));
            return builder.Options;
        }

        public static string GetConnectionString(IConfiguration configuration)
            => configuration.GetConnectionString(_connectionStringKey) ?? string.Empty;

        private static string GetConnectionString()
        {
            var configurationBuilder = new ConfigurationBuilder();

            configurationBuilder.SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", true);
            var connectionString = GetConnectionString(configurationBuilder.Build());

            return connectionString;
        }
    }
}
