using System.ComponentModel.DataAnnotations;

namespace API.Dto
{
    public class ContactPersonDto
    {
        [Required]
        public string Name { get; set; }

        public string Position { get; set; }

        public string PhoneNumber { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public int SupplierId { get; set; }  // Foreign key to Supplier
    }
}
