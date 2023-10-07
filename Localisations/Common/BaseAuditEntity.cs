namespace Localisations.Domain.Common
{
    public class BaseAuditEntity
    {
        public DateTime Created { get; set; } = DateTime.Now;
        public string? CreatedBy { get; set; }
        public DateTime? LastModified { get; set; }
    }
}
