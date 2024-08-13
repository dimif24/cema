using System.ComponentModel.DataAnnotations;

namespace API.Dto
{
    public class BuyModelDto
    {
        public int ProductVariantId { get; set; }
        [EmailAddress]
        public string Email { get; set; }
    }
}