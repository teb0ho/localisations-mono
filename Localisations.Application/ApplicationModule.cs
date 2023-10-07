using Localisations.Application.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Localisations.Application
{
    public static class ApplicationModule
    {
        private static bool _isModuleAdded;

        public static IServiceCollection AddApplicationModule(this IServiceCollection services)
        {
            if (_isModuleAdded) return services;

            services.AddTransient<ILocalisationService, LocalisationService>();

            _isModuleAdded = true;

            return services;
        }
    }
}
