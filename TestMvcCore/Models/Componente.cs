using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestMvcCore.Models
{
    public class Componente
    {
        public int Anno { get; set; }
        public int Mese { get; set; }
        public int IDFascia { get; set; }
        public string Fascia { get; set; }
        public decimal Valore { get; set; }
        public decimal ValorePieno { get; set; }
    }
}
