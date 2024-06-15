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
            var result = await _context.Suppliers.Where(sp => sp.Id == id).Include(sp => sp.Products).Include(sp => sp.ContactPersons).SingleOrDefaultAsync();
            if (result == null)
            {
                return NotFound();

            }
            else
            {
                return Ok(result);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Supplier>> AddSupplier(Supplier createSupplier)
        {
            _context.Suppliers.Add(createSupplier);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSupplier), new { id = createSupplier.Id }, createSupplier);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSupplier(int id, Supplier updatedSupplier)
        {
            
            if (id != updatedSupplier.Id)
            {
                return BadRequest("Supplier ID mismatch");
            }

            _context.Entry(updatedSupplier).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Suppliers.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSupplier(int id)
        {
            var supplier = await _context.Suppliers.Include(sp => sp.ContactPersons).Include(sp => sp.Products).SingleOrDefaultAsync(sp => sp.Id == id);

            if (supplier == null)
            {
                return NotFound($"Supplier with ID {id} not found");
            }

            _context.Suppliers.Remove(supplier);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        



    }
}