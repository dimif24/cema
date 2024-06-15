using API.Data;
using API.Dto;
using API.Entities;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactPersonsController : ControllerBase
    {

        private readonly StoreContext _context;

        public ContactPersonsController(StoreContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<ContactPerson>>> GetContactPersons()
        {
            return await _context.ContactPerson.ToListAsync();
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactPerson>> GetContactPerson(int id)
        {
            var result = await _context.ContactPerson.Where(sp => sp.Id == id).SingleOrDefaultAsync();
            if (result == null)
            {
                return NotFound();

            }
            else
            {
                return Ok(result);
            }
        }

        [HttpPost("{supplierId}")]

        public async Task<ActionResult<ContactPerson>> AddContactPerson(int supplierId, ContactPerson contactPerson)
        {
            if (supplierId != contactPerson.SupplierId)
            {
                return BadRequest("Supplier ID mismatch");
            }

            var supplier = await _context.Suppliers.FindAsync(supplierId);
            if (supplier == null)
            {
                return NotFound($"Supplier with ID {supplierId} not found");
            }

            contactPerson.SupplierId = supplierId;

            _context.ContactPerson.Add(contactPerson);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetContactPersons), new { id = supplierId }, contactPerson);
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactPerson(int contactPersonId)
        {
            var contactPerson = await _context.ContactPerson.FindAsync(contactPersonId);

            if (contactPerson == null)
            {
                return NotFound($"Contact person with ID {contactPersonId} not found");
            }

            _context.ContactPerson.Remove(contactPerson);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}