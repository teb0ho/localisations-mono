using Localisations.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Localisations.Persistence
{
    public static class PersistenceModule
    {

        private static bool _isModuleAdded;

        public static IServiceCollection AddPersistenceModule(this IServiceCollection services, IConfiguration configuration)
        {

            if (_isModuleAdded) return services;

            services.AddDbContextFactory<LocalisationsDbContext>(options =>
                options.UseSqlServer(LocalisationsDbContextFactory.GetConnectionString(configuration)));

            services.AddTransient<ILocalisationRepository, LocalisationRepository>();

            RunMigrations(configuration);

            _isModuleAdded = true;

            return services;
        }

        public static void RunMigrations(IConfiguration configuration)
        {
            using var context = new LocalisationsDbContext(new LocalisationsDbContextFactory().GetOptions(configuration));

            context.Database.Migrate();
        }
    }
}
