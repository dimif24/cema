using API.Data;
using API.Dto;
using API.Entities;
using API.Helpers.Products;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {

        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _context.Products.Include(products => products.Variants).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await _context.Products.Include(product => product.Variants).SingleOrDefaultAsync(product => product.Id == id);

        }

        [HttpGet("Variants/{variantId}")]
        public async Task<ActionResult<VariantDto>> GetProductByVariant(int variantId)
        {
            var variant = await _context.ProductVariants
                                 .Where(v => v.Id == variantId)
                                 .Include(v => v.Product)
                                 .SingleOrDefaultAsync();

            if (variant == null)
            {
                return NotFound();
            }

            var product = variant.Product;

            var result = Mapper.MapToVariantDto(product, variant);
            return Ok(result);
        }

    }
}