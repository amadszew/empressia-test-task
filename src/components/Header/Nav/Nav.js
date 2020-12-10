import React from 'react';

import NavItem from './NavItem/NavItem';

const Nav = () =>  (
  <nav className="nav">
    <ul className="nav__list">
      <NavItem name={"O mnie"} link={"#"} />
      <NavItem name={"Opinie"} link={"#"} />
      <NavItem name={"FAQ"} link={"#"} />
      <NavItem name={"Galeria"} link={"#"} />
      <NavItem name={"Blog"} link={"#"} />
      <NavItem name={"Kontakt"} link={"#"} />
    </ul>
    <button className="nav__btn">
      Zapisz się na wizytę on-line
    </button>
  </nav>
);

export default Nav;