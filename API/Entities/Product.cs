
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        public string Type { get; set; }

        public string Category { get; set; }

        public string Brand { get; set; }

        public decimal? Weight { get; set; }

        public decimal? Height { get; set; }
        public decimal? Width { get; set; }

        public virtual ICollection<ProductVariant> Variants { get; set; } = new List<ProductVariant>();

        [JsonIgnore]
        public ICollection<SupplierProduct> Suppliers { get; set; } = new List<SupplierProduct>();

    }
}