using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyOwnApi.models
{
    public class Favourite
    {
        [Key]
        public int id { get; set; }

        public string cityId { get; set; }

        public string cityName { get; set; }

        public string temperature { get; set; }


        public string dateTime { get; set; }

        public string pressure { get; set; }

        public string humidity { get; set; }

        public string windSpeed { get; set; }
        
        
        public string icon { get; set; }

        public string description { get; set; }

        public string comment { get; set; }
    }
}
