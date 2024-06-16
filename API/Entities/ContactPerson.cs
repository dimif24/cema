
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API.Entities
{
    public class ContactPerson
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Position { get; set; }
        public string PhoneNumber { get; set; }
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public int SupplierId { get; set; }  // Foreign key to Supplier
        [JsonIgnore]
        public Supplier Supplier { get; set; }

    }
}