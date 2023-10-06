using Localisations.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Localisations.Persistence.Configurations
{
    public class LocalisationConfiguration : IEntityTypeConfiguration<Localisation>
    {
        public void Configure(EntityTypeBuilder<Localisation> builder)
        {
            builder.Property(l => l.Content)
                .HasMaxLength(200)
                .IsRequired();
        }
    }
}
