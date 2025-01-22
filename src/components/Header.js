import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { FaBars } from 'react-icons/fa'; // For hamburger icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleMenuToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <HeaderContainer>
      {isMobile && (
        <BurgerMenuButton onClick={handleMenuToggle}>
          <FaBars size={30} />
        </BurgerMenuButton>
      )}
      {isMobile ? (
        <Menu 
          left
          isOpen={isOpen}
          onStateChange={({ isOpen }) => setIsOpen(isOpen)}
          styles={menuStyles}
          customBurgerIcon={false}
        >
          <MenuLink to="/">Casagrande Furgon Rental</MenuLink>
          <MenuLink to="/">Naše vozy</MenuLink>
          <MenuLink to="/services">Naše služby</MenuLink>
          <MenuLink to="/contact">Kontaktuj nás</MenuLink>
        </Menu>
      ) : (
        <NavLinks>
          <MenuLink to="/">Casagrande Furgon Rental</MenuLink>
          <MenuLink to="/">Naše vozy</MenuLink>
          <MenuLink to="/services">Naše služby</MenuLink>
          <MenuLink to="/contact">Kontaktuj nás</MenuLink>
        </NavLinks>
      )}
      
      <PhoneNumber href="tel:+420724239319">+420 704 057 272</PhoneNumber>
    </HeaderContainer>
  );
};

// Styled components
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

const PhoneNumber = styled.a`
  font-size: 1.8em;
  color: #ffcc00;
  text-decoration: none;
  animation: pulse 1.5s infinite;
  font-weight: bold;
  margin-right: 25dvw;

  &:hover {
    text-decoration: underline;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const BurgerMenuButton = styled.div`
  cursor: pointer;
  z-index: 1001;
  padding-left: 5dvw;
  display: block;

  @media (min-width: 769px) {
    display: none; /* Hide burger menu button on larger screens */
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2dvw;
`;

const MenuLink = styled(Link)`
  display: block;
  margin: 10px 0;
  text-decoration: none;
  font-size: 1.5em;
  color: #fff;

  &:hover {
    color: #ffcc00;
  }
`;

const menuStyles = {
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.7)',
    top: '10%',
  },
  bmMenuWrap: {
    top: '10%',
    left: '0px',
    height: '100%',
  },
  bmMenu: {
    background: '#fff',
    width: '75%', 
  },
  bmItemList: {
    color: '#000',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: '1.5em',
    color: '#000',
  },
};

export default Header;
