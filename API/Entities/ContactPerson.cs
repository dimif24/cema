
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class ContactPerson
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string Position { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public Supplier Supplier { get; set; }

    }
}