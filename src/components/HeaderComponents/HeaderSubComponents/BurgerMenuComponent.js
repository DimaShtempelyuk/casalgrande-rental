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
        <LanguageDropdown />
      </DropdownWrapper>
    </BurgerMenu>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.5em;
  margin: 1em 0;
  display: block;

  &:hover {
    color: #ffcc00;
  }
`;

const DropdownWrapper = styled.div`
  margin-top: 2em;
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
    width: '75%',
  },
  bmItemList: {
    color: '#000',
    padding: '0.8em',
  },
};

export default BurgerMenuComponent;
