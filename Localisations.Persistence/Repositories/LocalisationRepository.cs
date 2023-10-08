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
         => await _context.Localisations.ToListAsync();


        public async Task<Localisation?> GetLocalisationByIdAsync(int id)
            => await _context.Localisations.FirstOrDefaultAsync(x => x.Id == id);

        public async Task<IEnumerable<Localisation>> SearchLocalisationsAsync(string searchQuery)
            => await _context.Localisations.Where(x => x.Content.ToLower().Contains(searchQuery.ToLower())).ToListAsync();

        public async Task<int> CreateLocalisationAsync(Localisation localisation)
        {
            _context.Add(localisation);
            return await _context.SaveChangesAsync();
        }

        public async Task DeleteLocalisationByIdAsync(int id)
        {
            var localisation = await _context.Localisations.Where(x => x.Id == id).FirstOrDefaultAsync();

            if (localisation != null)
            {
                _context.Localisations.Remove(localisation);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new NotSupportedException("Id was not found");
            }
        }

        public async Task UpdateLocalisationAsync(Localisation localisation)
        {
            var localisationToUpdate = await _context.Localisations.Where(x => x.Id == localisation.Id)
                    .FirstOrDefaultAsync();

            if (localisationToUpdate != null)
            {
                localisationToUpdate.Content = localisation.Content;
                localisationToUpdate.LastModified = DateTime.Now;
            }

            await _context.SaveChangesAsync();
        }
    }
}
