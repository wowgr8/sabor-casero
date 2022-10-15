import React, { useState } from 'react';
import { Link } from 'react-scroll';
// add import for icons and logo
// Chance to refactor by creating an array for your links in another file, importing, and looping through them. 
  // Also, create NavbarStyles.css and create a custom className to clean up this file. 

function Navbar() {

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* Place holder for logo and home link */}
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Sabor Casero Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">Sabor Casero</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            {/* PLACEHOLDER FOR HOME? */}
            <li><a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"><Link to="hero" spy={true} smooth={true} duration={500}>Home</Link></a></li>
            <li><a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"><Link to="menu" spy={true} smooth={true} duration={500}>Menu</Link></a></li>
            <li><a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"><Link to="visit" spy={true} smooth={true} duration={500}>Visit</Link></a></li>
            <li><a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"><Link to="gallery" spy={true} smooth={true}  offset={100} duration={500}>Gallery</Link></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar