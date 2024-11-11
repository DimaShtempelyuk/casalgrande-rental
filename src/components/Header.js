import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { FaBars } from 'react-icons/fa'; // For hamburger icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <HeaderContainer>
      <BurgerMenuButton onClick={handleMenuToggle}>
        <FaBars size={30} />
      </BurgerMenuButton>
      <PhoneNumber href="tel:+420724239319">+420 704 057 272</PhoneNumber>
      <Menu 
        left // Ensure menu slides in from the left
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
    </HeaderContainer>
  );
};

// Styled components
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1dvh 2dvw;
  height: 8dvh;  /* Adjust header height */
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
  display: block; /* Always display the burger icon */
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
    top: '10%', // Start right after the header
  },
  bmMenuWrap: {
    top: '10%', // Align the menu right under the header
    left: '0px',
    height: '100%',
  },
  bmMenu: {
    background: '#fff', // White background for the menu
    width: '75%', 
  },
  bmItemList: {
    color: '#000', // Black text color
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: '1.5em',
    color: '#000', // Black color for items
  },
};


export default Header;
