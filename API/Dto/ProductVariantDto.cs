using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dto
{
    public class ProductVariantDto
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string Category { get; set; }
        public string Brand { get; set; }
        public decimal? Weight { get; set; }
        public decimal? Height { get; set; }
        public decimal? Width { get; set; }
        public string Color { get; set; }
        public decimal Price { get; set; }
        public int? QuantityInStock { get; set; }
        public string PictureUrl { get; set; }
        public int ProductId { get; set; }

    }
}