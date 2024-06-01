namespace API.Entities
{
    public class ProductVariant
    {
        public int Id { get; set; }
        public string Color { get; set; }
        public decimal Price { get; set; }
        public int QuantityInStock { get; set; }
        public string PictureUrl { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}