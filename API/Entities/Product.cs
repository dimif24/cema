namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }

        public string Type { get; set; }

        public string Category { get; set; }

        public string Brand { get; set; }

        public decimal Weight { get; set; }

        public decimal Height { get; set; }
        public decimal Width { get; set; }

        public List<ProductVariant> Variants { get; set; } = new List<ProductVariant>();

    }
}