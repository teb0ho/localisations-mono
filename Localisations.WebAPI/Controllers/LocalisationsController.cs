using Localisations.Application.Services;
using Localisations.Domain.DTOs;
using Localisations.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Localisations.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LocalisationsController : ControllerBase
    {

        private readonly ILogger<LocalisationsController> _logger;
        private readonly ILocalisationService _localisationService;

        public LocalisationsController(ILogger<LocalisationsController> logger, ILocalisationService localisationService)
        {
            _logger = logger;
            _localisationService = localisationService;
        }

        [HttpGet]
        public async Task<IEnumerable<Localisation>> GetLocalisations()
            => await _localisationService.GetLocalisations();


        [HttpPost]
        public async Task<int> CreateLocalisation(LocalisationDTO localisation)
            => await _localisationService.CreateLocalisationAsync(new Localisation
            {
                Content = localisation.Content
            });


        [HttpGet("v1")]
        public async Task<IEnumerable<Localisation>> Localisations([FromQuery] string search)
            => await _localisationService.SearchLocalisationsAsync(search);

        [HttpDelete("{id}")]
        public async Task DeleteLocalisations(int id)
            => await _localisationService.DeleteLocalisationByIdAsync(id);

        [HttpPut("{id}")]
        public async Task UpdateLocalisation([FromBody] LocalisationDTO localisation, int id)
            => await _localisationService.UpdateLocalisationAsync(new Localisation { Id = id, Content = localisation.Content });
            
    }
}