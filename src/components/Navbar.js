import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className='header'>
      <nav className='navbar'>
        {/* <a href='/' className='logo'>
          <img src={logo} alt='logo' />
        </a> */}
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
          : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='/' onClick={closeMenu}>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#about' onClick={closeMenu}>Menu</a>
          </li>
          <li className='nav-item'>
            <a href='#testimonials' onClick={closeMenu}>Visit</a>
          </li>
          <li className='nav-item'>
            <a href='#demo' onClick={closeMenu}>Gallery</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar