using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyOwnApi.models
{
    public class WeatherDbContext : DbContext
    {
        public WeatherDbContext(DbContextOptions options) : base (options)
        {
               
        }

       

        public DbSet<Favourite> Favourites { get; set; }


        public DbSet<Login> Logins { get; set; }

    }
}
