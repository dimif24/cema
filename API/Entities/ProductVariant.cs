using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API.Entities
{
    public class ProductVariant
    {
        public ProductVariant(int v1, string v2, int v3, int v4, string v5, int v6)
        {
            V1 = v1;
            V2 = v2;
            V3 = v3;
            V4 = v4;
            V5 = v5;
            V6 = v6;
        }

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
        public int V1 { get; }
        public string V2 { get; }
        public int V3 { get; }
        public int V4 { get; }
        public string V5 { get; }
        public int V6 { get; }
    }
}