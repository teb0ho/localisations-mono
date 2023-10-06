using Localisations.Domain.Entities;

namespace Localisations.Persistence.Repositories
{
    public interface ILocalisationRepository
    {
        Task<IEnumerable<Localisation>> GetLocalisations();
    }
}
