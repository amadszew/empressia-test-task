import React from 'react';

import NavItem from './NavItem/NavItem';

const Nav = ({isOpen}) =>  (
  <nav className={`nav ${isOpen ? 'nav--visible' : null}`}>
    <ul className="nav__list">
      <NavItem name={"O mnie"} link={"#"} />
      <NavItem name={"Opinie"} link={"#"} />
      <NavItem name={"FAQ"} link={"#"} />
      <NavItem name={"Galeria"} link={"#"} />
      <NavItem name={"Blog"} link={"#"} />
      <NavItem name={"Kontakt"} link={"#"} />
    </ul>
    <button className="btn btn__primary btn__primary--small nav__btn--mobile">
      Zapisz się na wizytę on-line
    </button>
  </nav>
);

export default Nav;