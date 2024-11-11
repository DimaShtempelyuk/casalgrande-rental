import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLinks = ({ isMobile }) => (
  <NavLinksContainer>
    <MenuLink to="/">Naše vozy</MenuLink>
    <MenuLink to="/services">Naše služby</MenuLink>
    <MenuLink to="/contact">Kontaktuj nás</MenuLink>
  </NavLinksContainer>
);

const NavLinksContainer = styled.nav`
  display: flex;
  gap: 2dvw;
`;

const MenuLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1.5em;
  color: #fff;

  &:hover {
    color: #ffcc00;
  }
`;

export default NavLinks;
