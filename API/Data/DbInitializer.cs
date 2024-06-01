using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any() && context.ProductVariants.Any()) return;

            var products = new List<Product>{
                new Product {
                    Name = "Angular Speedster Board 2000",
                    Description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Type = "Boards",
                    Category = "Sports",
                    Brand = "Angular",
                    Weight = 2.5m,
                    Height = 0.5m,
                    Width = 1.2m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Red",
                            Price = 20000,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/sb-ang1.png"
                        },
                        new ProductVariant
                        {
                            Color = "Blue",
                            Price = 21000,
                            QuantityInStock = 50,
                            PictureUrl = "/images/products/sb-ang1-blue.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Green Angular Board 3000",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Type = "Boards",
                    Category = "Sports",
                    Brand = "Angular",
                    Weight = 2.8m,
                    Height = 0.6m,
                    Width = 1.3m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Green",
                            Price = 15000,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/sb-ang2.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Core Board Speed Rush 3",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Type = "Boards",
                    Category = "Sports",
                    Brand = "NetCore",
                    Weight = 3.0m,
                    Height = 0.55m,
                    Width = 1.4m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Yellow",
                            Price = 18000,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/sb-core1.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Net Core Super Board",
                    Description = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Type = "Boards",
                    Category = "Sports",
                    Brand = "NetCore",
                    Weight = 3.5m,
                    Height = 0.7m,
                    Width = 1.5m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Red",
                            Price = 30000,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/sb-core2.png"
                        }
                    }
                },
                new Product
                {
                    Name = "React Board Super Whizzy Fast",
                    Description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Type = "Boards",
                    Category = "Sports",
                    Brand = "React",
                    Weight = 2.7m,
                    Height = 0.5m,
                    Width = 1.2m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Blue",
                            Price = 25000,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/sb-react1.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Typescript Entry Board",
                    Description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Type = "Boards",
                    Category = "Sports",
                    Brand = "TypeScript",
                    Weight = 2.9m,
                    Height = 0.6m,
                    Width = 1.3m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Purple",
                            Price = 12000,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/sb-ts1.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Core Blue Hat",
                    Description = "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Type = "Hats",
                    Category = "Apparel",
                    Brand = "NetCore",
                    Weight = 0.2m,
                    Height = 0.2m,
                    Width = 0.2m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Blue",
                            Price = 1000,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/hat-core1.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Green React Woolen Hat",
                    Description = "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Type = "Hats",
                    Category = "Apparel",
                    Brand = "React",
                    Weight = 0.25m,
                    Height = 0.22m,
                    Width = 0.22m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Green",
                            Price = 8000,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/hat-react1.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Purple React Woolen Hat",
                    Description = "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Type = "Hats",
                    Category = "Apparel",
                    Brand = "React",
                    Weight = 0.24m,
                    Height = 0.23m,
                    Width = 0.23m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Purple",
                            Price = 1500,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/hat-react2.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Blue Code Gloves",
                    Description = "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Type = "Gloves",
                    Category = "Apparel",
                    Brand = "VS Code",
                    Weight = 0.3m,
                    Height = 0.25m,
                    Width = 0.25m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Blue",
                            Price = 1800,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/glove-code1.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Green Code Gloves",
                    Description = "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Type = "Gloves",
                    Category = "Apparel",
                    Brand = "VS Code",
                    Weight = 0.32m,
                    Height = 0.26m,
                    Width = 0.26m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Green",
                            Price = 1500,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/glove-code2.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Purple React Gloves",
                    Description = "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Type = "Gloves",
                    Category = "Apparel",
                    Brand = "React",
                    Weight = 0.33m,
                    Height = 0.24m,
                    Width = 0.24m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Purple",
                            Price = 1600,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/glove-react1.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Green React Gloves",
                    Description = "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Type = "Gloves",
                    Category = "Apparel",
                    Brand = "React",
                    Weight = 0.28m,
                    Height = 0.27m,
                    Width = 0.27m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Green",
                            Price = 1400,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/glove-react2.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Redis Red Boots",
                    Description = "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Type = "Boots",
                    Category = "Footwear",
                    Brand = "Redis",
                    Weight = 1.5m,
                    Height = 0.9m,
                    Width = 0.3m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Red",
                            Price = 25000,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/boot-redis1.png"
                        }
                    }
                },
                new Product
                {
                    Name = "Core Red Boots",
                    Description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros.",
                    Type = "Boots",
                    Category = "Footwear",
                    Brand = "NetCore",
                    Weight = 1.6m,
                    Height = 0.92m,
                    Width = 0.32m,
                    Variants = new List<ProductVariant>
                    {
                        new ProductVariant
                        {
                            Color = "Red",
                            Price = 26000,
                            QuantityInStock = 100,
                            PictureUrl = "/images/products/boot-core1.png"
                        }
                    }
                }
            };

            context.Products.AddRange(products);

            context.SaveChanges();
            // foreach (var product in products)
            // {
            //     context.Products.Add(product);
            // }
        }
    }


}