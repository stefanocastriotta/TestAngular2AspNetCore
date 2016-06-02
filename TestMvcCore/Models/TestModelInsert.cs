using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestMvcCore.Models
{
    public class TestModelInsert
    {
        public string Property1 { get; set; }
        public string Property2 { get; set; }
        public int Property3 { get; set; }
        public List<TestModelInsertItem> Items { get; set; }
    }

    public class TestModelInsertItem
    {
        public string Property1 { get; set; }
        public string Property2 { get; set; }
        public int Property3 { get; set; }
    }
}
