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

  // Toggle menu only when the burger menu icon is clicked
  const handleMenuToggle = (e) => {
    e.stopPropagation(); // Prevent triggering on header clicks
    if (viewportWidth < 1280) setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderContainer>
      {/* Show burger menu button only for mobile resolutions */}
      {viewportWidth < 1280 && (
        <BurgerMenuButton onClick={handleMenuToggle}>
          <FaBars size={30} />
        </BurgerMenuButton>
      )}

      {/* Pass isOpen state to the burger menu component */}
      {viewportWidth < 1280 && (
        <BurgerMenuComponent
          isOpen={isOpen}
          onClose={closeMenu}
          onStateChange={(state) => setIsOpen(state.isOpen)}
        />
      )}

      {/* Other header sections */}
      <LogoSection isMobile={viewportWidth < 768} showName={viewportWidth >= 768} />
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

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1dvh 2dvw;
  height: 8dvh;
  background-color: #333;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const BurgerMenuButton = styled.div`
  cursor: pointer;
  z-index: 1001;
  padding-right: 10px;

  @media (min-width: 1280px) {
    display: none; /* Hide burger menu button for desktop */
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
