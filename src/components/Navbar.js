import React, { useState } from 'react';
import { Link } from 'react-scroll';
// add import for icons and logo

function Navbar() {
  const [ click, setClick ] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

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
            {/* PLACEHOLDER FOR HOME/HERO */}
            {/* <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
            </li> */}
            <li>
              <a href="#menu" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" onClick={closeMenu}>Menu</a>
            </li>
            <li>
              <a href="#visit" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" onClick={closeMenu}>Visit</a>
            </li>
            <li>
              <a href="#gallery" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" onClick={closeMenu}>Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

{/* <a href='/' className='logo'>
  <img src={logo} alt='logo' />
</a>
<div className='hamburger' onClick={handleClick}>
  {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
  : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
</div> */}

// incorporate onclick for auto scroll.
{/* <ul className={click ? "nav-menu active" : "nav-menu"}>
<li className='nav-item'>
  <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
</li>
<li className='nav-item'>
  <Link to="menu" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Menu</Link>
</li>
<li className='nav-item'>
  <Link to="visit" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Visit</Link>
</li>
<li className='nav-item'>
  <Link to="gallery" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Gallery</Link>
</li>
</ul> */}