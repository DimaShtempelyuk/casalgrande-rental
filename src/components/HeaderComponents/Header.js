import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import LogoSection from './HeaderSubComponents/LogoSection';
import NavLinks from './HeaderSubComponents/Navigation';
import IconsContainer from './HeaderSubComponents/IconsContainer';
import BurgerMenuComponent from './HeaderSubComponents/BurgerMenuComponent';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle menu only for the burger icon
  const handleMenuToggle = (e) => {
    e.stopPropagation(); // Stop event propagation
    if (viewportWidth < 1280) setIsOpen(!isOpen);
  };

  // Close menu if clicking outside the burger menu
  const closeMenu = () => setIsOpen(false);

  // Prevent any header clicks from propagating unintentionally
  const handleHeaderClick = (e) => e.stopPropagation();

  return (
    <HeaderContainer onClick={handleHeaderClick}>
      {/* Burger Menu Icon */}
      {viewportWidth < 1280 && (
        <BurgerMenuButton onClick={handleMenuToggle}>
          <FaBars size={40} />
        </BurgerMenuButton>
      )}

      {/* Burger Menu Component */}
      {viewportWidth < 1280 && (
        <BurgerMenuComponent
          isOpen={isOpen}
          onClose={closeMenu}
        />
      )}

      {/* Logo Section */}
      <LogoSection isMobile={viewportWidth < 768} showName={viewportWidth >= 768} />

      {/* Navigation and Phone Numbers */}
      {viewportWidth >= 1280 && <NavLinks />}
      {viewportWidth < 1280 && (
        <PulsingPhoneNumber href="tel:+420704057272">+420 704 057 272</PulsingPhoneNumber>
      )}
      {viewportWidth >= 1280 && (
        <DesktopPhoneNumber href="tel:+420704057272">+420 704 057 272</DesktopPhoneNumber>
      )}
      <IconsContainer viewportWidth={viewportWidth} />
    </HeaderContainer>
  );
};

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1dvh 2dvw;
  height: 8dvh;
  background-color: #333;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;


const BurgerMenuButton = styled.div`
  cursor: pointer;
  z-index: 1001;
  padding-right: 10px;

  @media (min-width: 1280px) {
    display: none; 
  }
`;

const PulsingPhoneNumber = styled.a`
  font-size: 1.8em;
  color: #ffcc00;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  animation: pulse 1.5s infinite;

  &:hover {
    text-decoration: underline;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const DesktopPhoneNumber = styled(PulsingPhoneNumber)`
  margin-left: auto;
  padding-right: 1dvw;
`;

export default Header;
