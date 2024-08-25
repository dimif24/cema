using API.Data;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http.Headers;

using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentsController : ControllerBase
    {
    private readonly IHttpClientFactory _httpClientFactory;

        private readonly StoreContext _context;
// You can get test token from this page  https://myfatoorah.readme.io/docs/test-token
        static string token = "rLtt6JWvbUHDDhsZnfpAhpYk4dxYDQkbcPTyGaKp2TYqQgG7FGZ5Th_WD53Oq8Ebz6A53njUoo1w3pjU1D4vs_ZMqFiz_j0urb_BH9Oq9VZoKFoJEDAbRZepGcQanImyYrry7Kt6MnMdgfG5jn4HngWoRdKduNNyP4kzcp3mRv7x00ahkm9LAK7ZRieg7k1PDAnBIOG3EyVSJ5kK4WLMvYr7sCwHbHcu4A5WwelxYK0GMJy37bNAarSJDFQsJ2ZvJjvMDmfWwDVFEVe_5tOomfVNt6bOg9mexbGjMrnHBnKnZR1vQbBtQieDlQepzTZMuQrSuKn-t5XZM7V6fCW7oP-uXGX-sMOajeX65JOf6XVpk29DP6ro8WTAflCDANC193yof8-f5_EYY-3hXhJj7RBXmizDpneEQDSaSz5sFk0sV5qPcARJ9zGG73vuGFyenjPPmtDtXtpx35A-BVcOSBYVIWe9kndG3nclfefjKEuZ3m4jL9Gg1h2JBvmXSMYiZtp9MR5I6pvbvylU_PP5xJFSjVTIz7IQSjcVGO41npnwIxRXNRxFOdIUHn0tjQ-7LwvEcTXyPsHXcMD8WtgBh-wxR8aKX7WPSsT1O8d8reb2aR7K3rkV3K82K_0OgawImEpwSvp9MNKynEAJQS6ZHe_J_l77652xwPNxMRTMASk1ZsJL";
        static string baseURL = "https://apitest.myfatoorah.com";
        public PaymentsController(StoreContext context,IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _httpClientFactory = httpClientFactory;
        }
        [HttpPost]
        public async Task<string> Main(string[] args)
        {
            var response = await SendPayment().ConfigureAwait(false);
            Console.WriteLine("Send Payment Response :");
            Console.WriteLine(response);

            Console.ReadLine();
           
            return response;
        }
        public static async Task<string> SendPayment()
        {
            var sendPaymentRequest = new
            {
                //required fields
                CustomerName = "Walid Sabbidine",
                NotificationOption = "LNK",
                InvoiceValue = 100,
                //optional fields 
                DisplayCurrencyIso = "KWD",
                MobileCountryCode = "965",
                CustomerMobile = "81627458",
                CustomerEmail = "sabbidinewalid12345@gmail.com",
                CallBackUrl = "https://example.com/callback",
                ErrorUrl = "https://example.com/error",
                Language = "En",
                CustomerReference = "",
                CustomerCivilId = "",
                UserDefinedField = "",
                ExpiryDate = DateTime.Now.AddYears(1),
               // add suppliers
                Suppliers = new[] {
                        new {
                          SupplierCode = 1, InvoiceShare = 100, ProposedShare = 70
                        }
                 }
            };
            var sendPaymentRequestJSON = JsonConvert.SerializeObject(sendPaymentRequest);
            return await PerformRequest(sendPaymentRequestJSON, "SendPayment").ConfigureAwait(false);

        }
        public static async Task<string> PerformRequest(string requestJSON, string endPoint)
        {
            string url = baseURL + $"/v2/{endPoint}";
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
            var httpContent = new StringContent(requestJSON, System.Text.Encoding.UTF8, "application/json");
            var responseMessage = await client.PostAsync(url, httpContent).ConfigureAwait(false);
            string response = string.Empty;
            if (!responseMessage.IsSuccessStatusCode)
            {
                response = JsonConvert.SerializeObject(new
                {
                    IsSuccess = false,
                    Message = responseMessage.StatusCode.ToString()
                });
            }
            else
            {
                response = await responseMessage.Content.ReadAsStringAsync();
            }

            return response;
        }


    [HttpPost]
    [Route("api/[controller]/embedded")]
    public async Task<IActionResult> InitiatePayment(PaymentRequest paymentRequest)
    {
        var httpClient = _httpClientFactory.CreateClient();
        httpClient.DefaultRequestHeaders.Add("authorization", token);

        var paymentRequestJson = JsonConvert.SerializeObject(paymentRequest);
        var content = new StringContent(paymentRequestJson, Encoding.UTF8, "application/json");

        var response = await httpClient.PostAsync("https://api.myfatoorah.com/v2/InitiatePayment", content);
        var paymentInitiationResponse = await response.Content.ReadAsStringAsync();

        return Ok(paymentInitiationResponse);
    }
}

public class PaymentRequest
{
    public decimal InvoiceValue { get; set; }
    public string CustomerName { get; set; }
    public string CustomerEmail { get; set; }
    public string CallbackUrl { get; set; }
    public string ErrorUrl { get; set; }
}

    }
