using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestMvcCore.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TestMvcCore.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost, Route("SaveModel")]
        public void SaveModel(TestModelInsert model)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet("GetComponenti")]
        public IEnumerable<Componente> GetComponenti()
        {
            List<Componente> list = new List<Componente>();
            list.Add(new Componente() { Anno = 2016, Mese = 1, Fascia = "F0", Valore = 2.5m, IDFascia = 0 });
            list.Add(new Componente() { Anno = 2016, Mese = 1, Fascia = "F1", Valore = 7.41m, IDFascia = 1 });
            list.Add(new Componente() { Anno = 2016, Mese = 1, Fascia = "F2", Valore = 3.68m, IDFascia = 2 });
            list.Add(new Componente() { Anno = 2016, Mese = 2, Fascia = "F0", Valore = 9.11m, IDFascia = 0 });
            list.Add(new Componente() { Anno = 2016, Mese = 2, Fascia = "F1", Valore = 1.06m, IDFascia = 1 });
            list.Add(new Componente() { Anno = 2016, Mese = 2, Fascia = "F2", Valore = 5.12m, IDFascia = 2 });
            return list;
        }
    }
}
