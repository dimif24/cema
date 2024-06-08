
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class SupplierProduct
    {
        public int Id { get; set; }
        public int SupplierId { get; set; }
        public Supplier Supplier { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }

        public int Qty { get; set; }
    }

}