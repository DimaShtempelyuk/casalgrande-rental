import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';

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

// Container for navigation links, centered on the page
const NavLinksContainer = styled.nav`
  display: flex;
  gap: 3vw;
  justify-content: center;
  align-items: center;
  width: 58%;
`;

// Link component with underline hover animation using react-spring
const AnimatedMenuLink = ({ to, children }) => {
  const [style, animate] = useSpring(() => ({
    transform: 'scale(1)',
  }));

  return (
    <StyledLink
      to={to}
      as={animated.div}
      style={style}
      onMouseEnter={() => animate({ transform: 'scale(1.1)' })}
      onMouseLeave={() => animate({ transform: 'scale(1)' })}
    >
      {children}
      <Underline className="underline" />
    </StyledLink>
  );
};

// Styled link with underline effect
const StyledLink = styled(animated(Link))`
  font-size: 1.5em;
  color: #ffcc00;
  text-decoration: none;
  position: relative;
  font-weight: bold;
  cursor: pointer;

  &:hover .underline {
    width: 100%;
  }
`;

// Underline component with dual-sided animation to center
const Underline = styled.span`
  position: absolute;
  bottom: -4px;
  left: 50%;
  height: 2px;
  width: 0;
  background-color: #ffcc00;
  transition: width 0.4s ease, left 0.4s ease;

  ${StyledLink}:hover & {
    width: 100%;
    left: 0;
  }
`;

export default NavLinks;
