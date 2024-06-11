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

        [HttpGet("All")]
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

        [HttpPost("Add")]
        public async Task<ActionResult<Supplier>> AddSupplier(SupplierDto createSupplierDto)
        {
            var supplier = new Supplier
            {
                Name = createSupplierDto.Name,
                Description = createSupplierDto.Description,
                Country = createSupplierDto.Country,
                City = createSupplierDto.City,
                BusinessType = createSupplierDto.BusinessType,
                YearEstablished = createSupplierDto.YearEstablished,
                PhoneNumber = createSupplierDto.PhoneNumber,
                Currency = createSupplierDto.Currency,
                ProfileImage = createSupplierDto.ProfileImage,
                CR = createSupplierDto.CR,
                DB = createSupplierDto.DB,
                Balance = createSupplierDto.Balance,
                Email = createSupplierDto.Email,
                Website = createSupplierDto.Website,
                FaxNumber = createSupplierDto.FaxNumber,
                TimeZone = createSupplierDto.TimeZone,
                BankName = createSupplierDto.BankName,
                BankAccountNumber = createSupplierDto.BankAccountNumber,
                ShippingMethods = createSupplierDto.ShippingMethods,
                ContactPersons = createSupplierDto.ContactPersons.Select(cp => new ContactPerson
                {
                    Name = cp.Name,
                    PhoneNumber = cp.PhoneNumber,
                    Email = cp.Email
                }).ToList()
            };

            _context.Suppliers.Add(supplier);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSupplier), new { id = supplier.Id }, supplier);
        }

        [HttpPut("/Update/{id}")]
        public async Task<IActionResult> UpdateSupplier(int id, SupplierDto updateSupplierDto)
        {
            var supplier = await _context.Suppliers.Include(sp => sp.ContactPersons).SingleOrDefaultAsync(sp => sp.Id == id);

            if (supplier == null)
            {
                return NotFound();
            }

            supplier.Name = updateSupplierDto.Name;
            supplier.Description = updateSupplierDto.Description;
            supplier.Country = updateSupplierDto.Country;
            supplier.City = updateSupplierDto.City;
            supplier.BusinessType = updateSupplierDto.BusinessType;
            supplier.YearEstablished = updateSupplierDto.YearEstablished;
            supplier.PhoneNumber = updateSupplierDto.PhoneNumber;
            supplier.Currency = updateSupplierDto.Currency;
            supplier.ProfileImage = updateSupplierDto.ProfileImage;
            supplier.CR = updateSupplierDto.CR;
            supplier.DB = updateSupplierDto.DB;
            supplier.Balance = updateSupplierDto.Balance;
            supplier.Email = updateSupplierDto.Email;
            supplier.Website = updateSupplierDto.Website;
            supplier.FaxNumber = updateSupplierDto.FaxNumber;
            supplier.TimeZone = updateSupplierDto.TimeZone;
            supplier.BankName = updateSupplierDto.BankName;
            supplier.BankAccountNumber = updateSupplierDto.BankAccountNumber;
            supplier.ShippingMethods = updateSupplierDto.ShippingMethods;

            // Update ContactPersons
            supplier.ContactPersons.Clear();
            foreach (var contactPersonDto in updateSupplierDto.ContactPersons)
            {
                supplier.ContactPersons.Add(new ContactPerson
                {
                    Name = contactPersonDto.Name,
                    PhoneNumber = contactPersonDto.PhoneNumber,
                    Email = contactPersonDto.Email
                });
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpPost("AddContactPerson/{supplierId}")]
        public async Task<ActionResult<ContactPerson>> AddContactPerson(int supplierId, ContactPersonDto contactPersonDto)
        {
            if (supplierId != contactPersonDto.SupplierId)
            {
                return BadRequest("Supplier ID mismatch");
            }

            var supplier = await _context.Suppliers.FindAsync(supplierId);
            if (supplier == null)
            {
                return NotFound($"Supplier with ID {supplierId} not found");
            }

            var contactPerson = new ContactPerson
            {
                Name = contactPersonDto.Name,
                Position = contactPersonDto.Position,
                PhoneNumber = contactPersonDto.PhoneNumber,
                Email = contactPersonDto.Email,
                SupplierId = contactPersonDto.SupplierId
            };

            _context.ContactPerson.Add(contactPerson);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSupplier), new { id = supplierId }, contactPerson);
        }


    }
}