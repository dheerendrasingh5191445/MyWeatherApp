using MyOwnApi.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyOwnApi.repository
{
    public interface ILoginRepository
    {
        List<Login> GetAllRepo();

        Login GetOne(int code);

        void AddLogin(Login login);

        void DeleteLogin(int code);

        void UpdateLogin(int code, Login login);
    }
    public class LoginRepository : ILoginRepository
    {
        private WeatherDbContext _context;

        public LoginRepository(WeatherDbContext context)
        {
            _context = context;
        }
        public void AddLogin(Login login)
        {
            _context.Logins.Add(login);
            _context.SaveChanges();
        }

        public void DeleteLogin(int id)
        {
            Login login = _context.Logins.FirstOrDefault(p => p.id == id);
            _context.Logins.Remove(login);
            _context.SaveChanges();
        }


        public List<Login> GetAllRepo()
        {
            return _context.Logins.ToList();
        }

        public Login GetOne(int id)
        {
            Login login = _context.Logins.FirstOrDefault(p => p.id == id);
            return login;
        }

        public void UpdateLogin(int id, Login airline)
        {
            Login currentair = _context.Logins.FirstOrDefault(p => p.id == id);
        
            _context.SaveChanges();
        }

    }
}
