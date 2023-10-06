using Localisations.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Localisations.Persistence
{
    public class LocalisationsDbContext : DbContext
    {
        public LocalisationsDbContext(DbContextOptions<LocalisationsDbContext> options) : base(options)
        {
        }

        public DbSet<Localisation> Localisations => Set<Localisation>();

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(builder);
        }
    }
}