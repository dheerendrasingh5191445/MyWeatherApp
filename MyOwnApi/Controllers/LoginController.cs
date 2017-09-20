using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyOwnApi.models;
using MyOwnApi.service;

namespace MyOwnApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Login")]
    public class LoginController : Controller
    {
        public ILoginData loginservice;
        public LoginController(ILoginData _loginservice)
        {
            loginservice = _loginservice;
        }
        // GET: api/Login
        [HttpGet]
        public List<Login> Get()
        {
            List<Login> data = loginservice.GetAll();
            return data;
        }

        // GET: api/Login/emailpassword
        [HttpGet("{1}")]
        public Login Get([FromQuery]string email, [FromQuery]string password)
        {
            Console.WriteLine("value recieved");
            Login data = loginservice.GetOne(email,password);
            return data;
        }
        
        // POST: api/Login
        [HttpPost]
        [Route("login")]
        public IActionResult login([FromBody]Login obj)
        {

            Console.WriteLine("value recieved");
            Login data = loginservice.GetOne(obj.email, obj.password);
            return Ok(data);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Login obj)
        {

            string sh = loginservice.AddLogin(obj);
            return Ok(sh);
        }


        // PUT: api/Login/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Login obj)
        {
            loginservice.UpdateLogin(id, obj);
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            loginservice.DeleteLogin(id);
        }
    }
}
