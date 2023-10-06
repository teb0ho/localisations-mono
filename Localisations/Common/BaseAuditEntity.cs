namespace Localisations.Domain.Common
{
    public class BaseAuditEntity
    {
        public DateTime Created { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
    }
}
