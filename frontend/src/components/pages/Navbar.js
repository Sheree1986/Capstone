import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';
import Dropdown from './Dropdown';



function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };




  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          OPEN ACCESS TO SUCCESS
       
         
        </Link>
        <div className='menu-icon' onClick={handleClick}>
        
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>

          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/neurodiversity'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Neurodiversity 
             
            </Link>
            {dropdown && <Dropdown />}
          </li>
      
           <li className='nav-item'>
          <Link
              to='/resources'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Resources
            </Link>
          
          </li>
         
           
          <li className='nav-item'>
            <Link
              to='/api'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Lang
            </Link>
          </li>
    

          <li className='nav-item'>
            <Link
              to='/neurohub'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Neurohub
            </Link>
          </li>
      
         
        </ul>
    
      </nav>
    </>        
  );
}
export default Navbar;
