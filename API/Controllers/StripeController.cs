using API.Data;
using API.Dto;
using API.Entities;
using API.Helpers.Products;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StripeController : ControllerBase
    {
        private readonly ProductVariant productVariant = new(1, "Red", 129, 55, "", 1);

        //[HttpPost]
       // public async
    }
}