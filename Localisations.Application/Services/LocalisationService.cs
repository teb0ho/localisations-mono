using Localisations.Domain.Entities;
using Localisations.Persistence.Repositories;

namespace Localisations.Application.Services
{
    public class LocalisationService : ILocalisationService
    {
        private readonly ILocalisationRepository _repository;

        public LocalisationService(ILocalisationRepository repository)
        {
            _repository = repository;
        }

        public async Task<int> CreateLocalisationAsync(Localisation localisation)
            => await _repository.CreateLocalisationAsync(localisation);

        public async Task DeleteLocalisationByIdAsync(int id)
            => await _repository.DeleteLocalisationByIdAsync(id);

        public async Task<Localisation?> GetLocalisationByIdAsync(int id)
            => await _repository.GetLocalisationByIdAsync(id);

        public Task<IEnumerable<Localisation>> GetLocalisations()
            => _repository.GetLocalisations();

        public Task UpdateLocalisationAsync(Localisation localisation)
            => _repository.UpdateLocalisationAsync(localisation);
    }
}
