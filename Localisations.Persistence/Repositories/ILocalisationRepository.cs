﻿using Localisations.Domain.Entities;

namespace Localisations.Persistence.Repositories
{
    public interface ILocalisationRepository
    {
        Task<IEnumerable<Localisation>> GetLocalisations();

        Task<Localisation?> GetLocalisationByIdAsync(int id);

        Task<int> CreateLocalisationAsync(Localisation localisation);

        Task DeleteLocalisationByIdAsync(int id);

        Task UpdateLocalisationAsync(Localisation localisation);
    }
}
