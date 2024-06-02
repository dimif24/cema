using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API.Entities
{
    public class ProductVariant
    {
        public int Id { get; set; }
        [Required]
        public string Color { get; set; }

        [Required]
        public decimal Price { get; set; }
        public int? QuantityInStock { get; set; }
        public string PictureUrl { get; set; }
        public int ProductId { get; set; }

        [JsonIgnore]
        public virtual Product Product { get; set; }
    }
}