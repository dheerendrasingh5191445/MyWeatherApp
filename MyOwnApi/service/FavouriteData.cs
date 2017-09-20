using MyOwnApi.models;
using MyOwnApi.repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyOwnApi.service
{
    public interface IFavouriteData
    {
        List<Favourite> GetAll();

        Favourite GetOne(int code);

        void AddFavourite(Favourite airline);

        void DeleteFavourite(int code);

        void UpdateFavourite(int code, Favourite favourite);
    }

    public class FavouriteData : IFavouriteData
    {
        private IFavouriteRepository _airlinerepository;
        public FavouriteData(IFavouriteRepository favouriterepository)
        {
            _airlinerepository = favouriterepository;
        }

        public void AddFavourite(Favourite airline)
        {
            _airlinerepository.AddFavourite(airline);
        }

        public void DeleteFavourite(int code)
        {
            _airlinerepository.DeleteFavourite(code);
        }

        public List<Favourite> GetAll()
        {
            return _airlinerepository.GetAll();
        }
        public Favourite GetOne(int code)
        {
            return _airlinerepository.GetOne(code);
        }

        public void UpdateFavourite(int code, Favourite favourite)
        {
            _airlinerepository.UpdateFavourite(code, favourite);
        }

    }
}
