using API.Data;
using API.Dto;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SuppliersController : ControllerBase
    {

        private readonly StoreContext _context;

        public SuppliersController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Supplier>>> GetSuppliers()
        {
            return await _context.Suppliers.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Supplier>> GetSupplier(int id)
        {
            var result = await _context.Suppliers.Where(sp => sp.Id == id).Include(sp => sp.Products).SingleOrDefaultAsync();
            if (result == null)
            {
                return NotFound();

            }
            else
            {
                return Ok(result);
            }
        }


    }
}