import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { FaBars, FaInstagram } from 'react-icons/fa';
import logo from '../assets/images/casalgrande_logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [language, setLanguage] = useState('CZ'); // Default language

  const handleMenuToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Add additional logic here if you want to change the app language
  };

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

      <LogoContainer>
        <Logo src={logo} alt="Casagrande Furgon Rental" />
        {!isMobile && <BrandLink to="/">Casagrande Furgon Rental</BrandLink>}
      </LogoContainer>

      {isMobile ? (
        <Menu 
          left
          isOpen={isOpen}
          onStateChange={({ isOpen }) => setIsOpen(isOpen)}
          styles={menuStyles}
          customBurgerIcon={false}
        >
          <MenuLink to="/">Naše vozy</MenuLink>
          <MenuLink to="/services">Naše služby</MenuLink>
          <MenuLink to="/contact">Kontaktuj nás</MenuLink>
        </Menu>
      ) : (
        <NavLinks>
          <MenuLink to="/">Naše vozy</MenuLink>
          <MenuLink to="/services">Naše služby</MenuLink>
          <MenuLink to="/contact">Kontaktuj nás</MenuLink>
        </NavLinks>
      )}

      <IconsContainer>
        <PhoneNumber href="tel:+420704057272">+420 704 057 272</PhoneNumber>
        <InstagramLink href="https://www.instagram.com/casalgranderental/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </InstagramLink>
        <LanguageSwitcher>
          <LanguageOption
            isActive={language === 'CZ'}
            onClick={() => handleLanguageChange('CZ')}
          >
            CZ
          </LanguageOption>
          <LanguageOption
            isActive={language === 'EN'}
            onClick={() => handleLanguageChange('EN')}
          >
            EN
          </LanguageOption>
        </LanguageSwitcher>
      </IconsContainer>
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

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  height: 95px;
  width: auto;
`;

const BrandLink = styled(Link)`
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const PhoneNumber = styled.a`
  font-size: 1.8em;
  color: #ffcc00;
  text-decoration: none;
  font-weight: bold;
  padding-right: 1dvw;
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

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const InstagramLink = styled.a`
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 10px;
`;

const LanguageOption = styled.div`
  cursor: pointer;
  font-size: 1em;
  color: ${(props) => (props.isActive ? '#ffcc00' : '#fff')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};

  &:hover {
    color: #ffcc00;
  }
`;

const BurgerMenuButton = styled.div`
  cursor: pointer;
  z-index: 1001;
  padding-right: 10px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLinks = styled.nav`
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
