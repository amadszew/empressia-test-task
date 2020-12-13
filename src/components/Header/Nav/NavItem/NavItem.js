import React from 'react';

const NavItem = ({name, link}) => (
  <li className="nav__list__item"><a href={link}>{name}</a></li>
);

export default NavItem;
