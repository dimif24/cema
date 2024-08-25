using API.Dto;
using API.Entities;

namespace API.Helpers.Products
{
    public static class Mapper
    {
        public static ProductVariantDto MapToVariantDto(Product product, ProductVariant variant)
        {
            return new ProductVariantDto
            {
                Id = variant.Id,
                Name = product.Name,
                Description = product.Description,
                Type = product.Type,
                Category = product.Category,
                Brand = product.Brand,
                Weight = product.Weight,
                Height = product.Height,
                Width = product.Width,
                Color = variant.Color,
                Price = variant.Price,
                QuantityInStock = variant.QuantityInStock,
                PictureUrl = variant.PictureUrl,
                ProductId = product.Id
            };
        }
    }
}