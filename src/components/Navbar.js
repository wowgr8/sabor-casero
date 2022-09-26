import React, { useState } from 'react';
import { Link } from 'react-scroll';
// import '../styles/Navbar.css';
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