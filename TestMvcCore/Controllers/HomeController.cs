﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TestMvcCore.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Test()
        {
            return View();
        }

        public IActionResult Elenco()
        {
            return View();
        }

        public IActionResult CCA()
        {
            return View();
        }

        public IActionResult CCADetail()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
