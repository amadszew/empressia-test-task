import React, { useState } from 'react';

import Nav from './Nav/Nav';

import logo from '../../assets/logos/logo_empressiaColor.svg';

const Header = () => {

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const mql = window.matchMedia('(max-width: 976px)');

  mql.addEventListener('change', e => {
    const mobileView = e.matches;
    if (mobileView) setIsMobile(true)
      else setIsMobile(false)
  });

  let navigation;

  if (isMobile) {
    navigation = (
      <>
        <button 
        className={`hamburger ${open ? 'hamburger--active' : undefined}`} 
        onClick={handleOpen} > 
          <span className="hamburger__container" tabIndex="-1"> 
            <span className="hamburger__bars"></span> 
          </span> 
        </button>
        {open && <Nav />}
      </>
    ) } else navigation = <Nav />;

  return (
    <header className='header'>
      <a href="https://www.empressia.pl" target="_blank" rel="noreferrer"  className="header__logo">
        <img src={logo} alt="Empressia logo" />
      </a>
      {navigation}
    </header>
  );
}  

export default Header;
