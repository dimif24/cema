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

        [HttpPost]

        public async Task<ActionResult<ContactPerson>> AddContactPerson(ContactPerson contactPerson)
        {


            var supplier = await _context.Suppliers.FindAsync(contactPerson.SupplierId);
            if (supplier == null)
            {
                return NotFound($"Supplier with ID {contactPerson.SupplierId} not found");
            }

            contactPerson.SupplierId = contactPerson.SupplierId;

            _context.ContactPerson.Add(contactPerson);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetContactPersons), new { id = contactPerson.SupplierId }, contactPerson);
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactPerson(int id)
        {
            var contactPerson = await _context.ContactPerson.FindAsync(id);

            if (contactPerson == null)
            {
                return NotFound($"Contact person with ID {id} not found");
            }

            _context.ContactPerson.Remove(contactPerson);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}