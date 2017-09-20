using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyOwnApi.models;
using MyOwnApi.service;

namespace MyOwnApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private IFavouriteData _favouriteservice;
        public ValuesController(IFavouriteData favouriteservice)
        {
            _favouriteservice = favouriteservice;
        }
        // GET api/values
        [HttpGet]
        public List<Favourite> Get()
        {
             List<Favourite> data = _favouriteservice.GetAll();
            return data;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Favourite Get(int id)
        {
            Favourite f = _favouriteservice.GetOne(id);
            return f;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Favourite obj)
        {
            _favouriteservice.AddFavourite(obj);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Favourite value)
        {
            _favouriteservice.UpdateFavourite(id, value);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _favouriteservice.DeleteFavourite(id);
        }
    }
}
