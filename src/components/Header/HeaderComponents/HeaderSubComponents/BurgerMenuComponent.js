import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';

const BurgerMenuComponent = ({ initialIsOpen, onStateChange }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [menuIsOpen, setMenuIsOpen] = useState(initialIsOpen);

  const handleLinkClick = (path) => {
    navigate(path); // Navigate to the clicked route
    setMenuIsOpen(false); // Explicitly close the burger menu
  };

  const handleStateChange = (state) => {
    setMenuIsOpen(state.isOpen); // Sync the state with the burger menu
    if (onStateChange) {
      onStateChange(state); // Notify parent about state change if needed
    }
  };

  return (
    <BurgerMenuContainer>
      <BurgerMenu
        isOpen={menuIsOpen}
        onStateChange={handleStateChange}
        styles={menuStyles}
      >
        <StyledLink as="div" onClick={() => handleLinkClick('/')}>
          {t('menu.ourcars')}
        </StyledLink>
        <StyledLink as="div" onClick={() => handleLinkClick('/services')}>
          {t('menu.ourservices')}
        </StyledLink>
        <StyledLink as="div" onClick={() => handleLinkClick('/contact')}>
          {t('menu.contactus')}
        </StyledLink>
        <DropdownWrapper>
          <LanguageDropdown isBurgerMenu={true} />
        </DropdownWrapper>
      </BurgerMenu>
    </BurgerMenuContainer>
  );
};

const BurgerMenuContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 100%;
  z-index: 1001;
`;

const StyledLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  font-size: 1.6em;
  font-weight: bold;
  margin: 2% 0;
  padding: 15px;
  border-radius: 8px;
  background: linear-gradient(45deg, rgb(255, 139, 43), rgb(255, 251, 8));
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }
`;

const DropdownWrapper = styled.div`
  margin-top: 2em;
  border-radius: 8px;
  background: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const menuStyles = {
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.7)',
    top: '0',
  },
  bmMenuWrap: {
    left: '0',
    height: '100%',
  },
  bmMenu: {
    background: '#fff',
    width: '100%',
  },
  bmItemList: {
    color: '#000',
    padding: '0.8em',
  },
};

export default BurgerMenuComponent;
