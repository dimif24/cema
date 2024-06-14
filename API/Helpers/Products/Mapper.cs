using API.Dto;
using API.Entities;

namespace API.Helpers.Products
{
    public static class Mapper
    {
        public static VariantDto MapToVariantDto(Product product, ProductVariant variant)
        {
            return new VariantDto
            {
                Id = product.Id,
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