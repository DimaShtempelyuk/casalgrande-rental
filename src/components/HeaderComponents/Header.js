import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { slide as BurgerMenu } from 'react-burger-menu';
import LogoSection from './HeaderSubComponents/LogoSection';
import NavLinks from './HeaderSubComponents/Navigation';
import IconsContainer from './HeaderSubComponents/IconsContainer';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleMenuToggle = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
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
      <LogoSection isMobile={isMobile} />
      {isMobile ? (
        <BurgerMenu
          left
          isOpen={isOpen}
          onStateChange={({ isOpen }) => setIsOpen(isOpen)}
          styles={menuStyles}
          customBurgerIcon={false}
        >
          <NavLinks isMobile />
        </BurgerMenu>
      ) : (
        <NavLinks />
      )}
      <IconsContainer />
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
  @media (min-width: 769px) {
    display: none;
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
