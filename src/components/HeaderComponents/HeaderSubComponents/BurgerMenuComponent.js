import React from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';

const BurgerMenuComponent = ({ isOpen, onClose, onStateChange }) => {
  const { t } = useTranslation();

  return (
    <BurgerMenu
      isOpen={isOpen}
      onClose={onClose}
      onStateChange={onStateChange}
      styles={menuStyles}
    >
      <StyledLink to="/" onClick={onClose}>{t('menu.ourcars')}</StyledLink>
      <StyledLink to="/services" onClick={onClose}>{t('menu.ourservices')}</StyledLink>
      <StyledLink to="/contact" onClick={onClose}>{t('menu.contactus')}</StyledLink>
      <DropdownWrapper>
        <LanguageDropdown isBurgerMenu={true} />
      </DropdownWrapper>
    </BurgerMenu>
  );
};

const StyledLink = styled(Link)`
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
  background: linear-gradient(45deg,rgb(255, 139, 43),rgb(255, 251, 8));
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

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
