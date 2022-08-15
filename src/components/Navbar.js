import React, { useState } from 'react';
import { Link } from 'react-scroll';
// add import for icons and logo

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
        {/* <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
          : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
        </div> */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to ="hero" spy ={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to ="menu" spy ={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Menu</Link>
          </li>
          <li className='nav-item'>
            <Link to ="visit" spy ={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Visit</Link>
          </li>
          <li className='nav-item'>
            <Link to ="gallery" spy ={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Gallery</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar