import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from '@react-spring/web';

// Main NavLinks component
const NavLinks = ({ isMobile }) => {
  const { t } = useTranslation();

  return (
    <NavLinksContainer>
      <AnimatedMenuLink to="/">{t('menu.ourcars')}</AnimatedMenuLink>
      <AnimatedMenuLink to="/services">{t('menu.ourservices')}</AnimatedMenuLink>
      <AnimatedMenuLink to="/contact">{t('menu.contactus')}</AnimatedMenuLink>
    </NavLinksContainer>
  );
};

const NavLinksContainer = styled.nav`
margin-right: 15%;
  display: flex;
  gap: 3vw;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

// Link component with underline hover animation using react-spring
const AnimatedMenuLink = ({ to, children }) => {
  const [style, animate] = useSpring(() => ({ transform: 'scale(1)' }));

  return (
    <AnimatedContainer
      onMouseEnter={() => animate({ transform: 'scale(1.1)' })}
      onMouseLeave={() => animate({ transform: 'scale(1)' })}
      style={style}
    >
      <StyledNavLink to={to}>{children}</StyledNavLink>
      <Underline />
    </AnimatedContainer>
  );
};

const AnimatedContainer = styled(animated.div)`
  position: relative;
`;

const StyledNavLink = styled(Link)`
  font-size: 1.5em;
  color: #ffcc00;
  text-decoration: none;
  font-weight: bold;

  &:visited {
    color: #ffcc00 !important;
  }

  &:hover .underline {
    width: 100%;
  }
`;

const Underline = styled.span`
  position: absolute;
  bottom: -4px;
  left: 50%;
  height: 2px;
  width: 0;
  background-color: #ffcc00;
  transition: width 0.4s ease, left 0.4s ease;

  ${AnimatedContainer}:hover & {
    width: 100%;
    left: 0;
  }
`;

export default NavLinks;
