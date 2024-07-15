
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class SupplierDto
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        public string Country { get; set; }
        public string City { get; set; }

        public string BusinessType { get; set; }
        public int? YearEstablished { get; set; }

        public string PhoneNumber { get; set; }

        public string Currency { get; set; }
        public string ProfileImage { get; set; }

        public decimal? CR { get; set; }
        public decimal? DB { get; set; }

        public decimal? Balance { get; set; }

        // New fields
        [EmailAddress]
        public string Email { get; set; }
        public string Website { get; set; }
        public string FaxNumber { get; set; }
        public string TimeZone { get; set; }
        public string BankName { get; set; }
        public string BankAccountNumber { get; set; }
        public List<string> ShippingMethods { get; set; } = new List<string>();
        public ICollection<ContactPerson> ContactPersons { get; set; } = new List<ContactPerson>();

        public ICollection<Product> Products { get; set; } = new List<Product>();

    }
}