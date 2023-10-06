using Localisations.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Localisations.Persistence.Repositories
{
    public class LocalisationRepository : ILocalisationRepository
    {
        private readonly LocalisationsDbContext _context;

        public LocalisationRepository(LocalisationsDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Localisation>> GetLocalisations()
        {
            return await _context.Localisations.ToListAsync();
        }
    }
}
