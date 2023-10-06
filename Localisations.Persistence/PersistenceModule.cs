using Localisations.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Localisations.Persistence
{
    public static class PersistenceModule
    {

        private static bool isModuleAdded;

        public static IServiceCollection AddPersistenceModule(this IServiceCollection services, IConfiguration configuration)
        {

            if (isModuleAdded) return services;

            services.AddDbContextFactory<LocalisationsDbContext>(options =>
                options.UseSqlite(LocalisationsDbContextFactory.GetConnectionString(configuration)));

            services.AddTransient<ILocalisationRepository, LocalisationRepository>();

            isModuleAdded = true;

            return services;
        }
    }
}
