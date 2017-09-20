using MyOwnApi.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyOwnApi.repository
{
    public interface IFavouriteRepository
    {
        List<Favourite> GetAll();

        Favourite GetOne(int code);

        void AddFavourite(Favourite favourite);

        void DeleteFavourite(int code);

        void UpdateFavourite(int code, Favourite favourite);
    }
    public class FavouriteRepository : IFavouriteRepository
    {
        private WeatherDbContext _context;

        public FavouriteRepository(WeatherDbContext context)
        {
            _context = context;
        }
        public void AddFavourite(Favourite airline)
        {
            _context.Favourites.Add(airline);
            _context.SaveChanges();
        }

        public void DeleteFavourite(int id)
        {
            Favourite airline = _context.Favourites.FirstOrDefault(p => p.id == id);
            _context.Favourites.Remove(airline);
            _context.SaveChanges();
        }


        public List<Favourite> GetAll()
        {
            return _context.Favourites.ToList();
        }

        public Favourite GetOne(int id)
        {
            Favourite airline = _context.Favourites.FirstOrDefault(p => p.id == id);
            return airline;
        }

        public void UpdateFavourite(int id, Favourite airline)
        {
            Favourite currentair = _context.Favourites.FirstOrDefault(p => p.id == id);
            currentair.comment = airline.comment;
            _context.SaveChanges();
        }
    }
}
