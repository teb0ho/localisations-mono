using Localisations.Domain.Common;

namespace Localisations.Domain.Entities
{
    public class Localisation : BaseAuditEntity
    {
        public int Id { get; set; }
        public int Content { get; set; }
    }
}
