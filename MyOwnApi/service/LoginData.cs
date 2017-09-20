using MyOwnApi.models;
using MyOwnApi.repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyOwnApi.service
{
    public interface ILoginData
    {
        List<Login> GetAll();
        Login GetOne(string email,string password);
        string AddLogin(Login obj);
        void DeleteLogin(int id);
        void UpdateLogin(int id, Login obj);
    }
    public class LoginData : ILoginData
    {
        private ILoginRepository _loginrepo;
        public LoginData(ILoginRepository loginrepo)
        {
            _loginrepo = loginrepo;
        }
        public string AddLogin(Login obj)
        {
            List<Login> myList = _loginrepo.GetAllRepo();
            foreach (var temp in myList)
            {
                if (obj.email == temp.email)
                {
                    return "not success";
                }
            }
           _loginrepo.AddLogin(obj);
          return "success";
        }

        public void DeleteLogin(int id)
        {
            _loginrepo.DeleteLogin(id);
        }

        public List<Login> GetAll()
        {

            return _loginrepo.GetAllRepo();
        }

        public Login GetOne(string email, string password)
        {
            List<Login> myList = _loginrepo.GetAllRepo();
            foreach (var temp in myList)
            {
                if (email == temp.email && password == temp.password)
                {
                    return _loginrepo.GetOne(temp.id);
                }

            }
            return null;

        }

        public void UpdateLogin(int id, Login obj)
        {
            //List<Login> myList = _loginrepo.GetAllRepo();
            //foreach (var temp in myList)
            //{
            //    if (obj.email == temp.email || obj.password == temp.password)
            //    {
                    _loginrepo.UpdateLogin(id, obj);
            //    }
            //}
        }
    }
}
