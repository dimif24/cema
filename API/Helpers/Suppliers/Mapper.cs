using API.Dto;
using API.Entities;

namespace API.Helpers.Suppliers
{
    public static class Mapper
    {
        public static SupplierDto MapToSupplierDto(Supplier supplier)
        {
            return new SupplierDto
        {
            Id = supplier.Id,
            Name = supplier.Name,
            Description=supplier.Description,
            Country=supplier.Country,
            City=supplier.City,
            BusinessType=supplier.BusinessType,
            YearEstablished=supplier.YearEstablished,
            PhoneNumber=supplier.PhoneNumber,
            Currency=supplier.Currency,
            ProfileImage=supplier.ProfileImage,
            CR=supplier.CR,
            DB=supplier.DB,
            Balance=supplier.Balance,
            Email=supplier.Email,
            Website=supplier.Website,
            FaxNumber=supplier.FaxNumber,
            TimeZone=supplier.TimeZone,
            BankName=supplier.BankName,
            BankAccountNumber=supplier.BankAccountNumber,
            ShippingMethods=supplier.ShippingMethods,

            // ... map other properties ...
            Products = supplier.Products.Select(sp => new Product
            {
                Id = sp.Product.Id,
                Name = sp.Product.Name,
            Variants = sp.Product.Variants.ToList(),
            
            }).ToList(),
            ContactPersons = supplier.ContactPersons.Select(cp => new ContactPerson
            {
                Id=cp.Id,
                Name=cp.Name,
                Position=cp.Position,
                PhoneNumber=cp.PhoneNumber,
                Email=cp.Email,
                SupplierId=cp.SupplierId,
                
                

            }).ToList()
        };   
        }
    }
}