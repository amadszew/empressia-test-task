import React, { useState } from 'react';

import Nav from './Nav/Nav';

import logo from '../../assets/logos/logo_empressiaColor.svg';

const Header = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <a href="https://www.empressia.pl" target="_blank" rel="noreferrer"  className="header__logo">
          <img src={logo} alt="Empressia logo" />
        </a>
        <button 
          className={`hamburger ${open ? 'hamburger--active' : null}`} 
          onClick={handleOpen} > 
            <span className="hamburger__container" tabIndex="-1"> 
              <span className="hamburger__bars"></span> 
            </span> 
        </button>
      </div>
      <Nav isOpen={open} />
    </header>
  );
}  

export default Header;
