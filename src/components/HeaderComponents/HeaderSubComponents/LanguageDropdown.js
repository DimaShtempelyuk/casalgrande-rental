import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';
import i18n from '../../../utils/i18n/i18n.js';

const LanguageDropdown = ({ isBurgerMenu }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('i18nextLng')?.toUpperCase() || 'CZ');
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    CZ: 'https://flagcdn.com/w160/cz.png',
    UA: 'https://flagcdn.com/w160/ua.png',
    EN: 'https://flagcdn.com/w160/us.png',
    DE: 'https://flagcdn.com/w160/de.png',
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang.toLowerCase());
    localStorage.setItem('i18nextLng', lang.toLowerCase());
    setIsOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && savedLanguage.toUpperCase() !== selectedLanguage) {
      setSelectedLanguage(savedLanguage.toUpperCase());
    }
  }, []);

  return (
    <DropdownContainer isBurgerMenu={isBurgerMenu}>
      <SelectedLanguage isBurgerMenu={isBurgerMenu} onClick={() => setIsOpen((prev) => !prev)}>
        <Flag src={languages[selectedLanguage]} alt={selectedLanguage} />
        {selectedLanguage}
        <FaCaretDown />
      </SelectedLanguage>
      {isOpen && (
        <GridMenu>
          <GridItem area="topLeft" onClick={() => handleLanguageSelect('CZ')}>
            <Flag src={languages['CZ']} alt="CZ" />
            <Label>CZ</Label>
          </GridItem>
          <GridItem area="topRight" onClick={() => handleLanguageSelect('UA')}>
            <Flag src={languages['UA']} alt="UA" />
            <Label>UA</Label>
          </GridItem>
          <GridItem area="bottomLeft" onClick={() => handleLanguageSelect('EN')}>
            <Flag src={languages['EN']} alt="EN" />
            <Label>EN</Label>
          </GridItem>
          <GridItem area="bottomRight" onClick={() => handleLanguageSelect('DE')}>
            <Flag src={languages['DE']} alt="DE" />
            <Label>DE</Label>
          </GridItem>
        </GridMenu>
      )}
    </DropdownContainer>
  );
};

// Styled components with grid layout for quadrants
const DropdownContainer = styled.div`
  position: relative;
  cursor: pointer;
  ${({ isBurgerMenu }) =>
    isBurgerMenu &&
    css`
      width: 100%;
      text-align: center;
    `}
`;

const SelectedLanguage = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ isBurgerMenu }) => (isBurgerMenu ? 'center' : 'flex-start')};
  gap: 10px;
  background: ${({ isBurgerMenu }) => (isBurgerMenu ? '#f8f8f8' : '#333')};
  color: ${({ isBurgerMenu }) => (isBurgerMenu ? '#000' : '#fff')};
  font-weight: bold;
  padding: 15px 20px;
  border-radius: 5px;
  border: ${({ isBurgerMenu }) => (isBurgerMenu ? '2px solid #ddd' : 'none')};
`;

const GridMenu = styled.div`
  display: grid;
  grid-template-areas:
    'topLeft topRight'
    'bottomLeft bottomRight';
  grid-gap: 10px; /* Increased gap for better spacing */
  background: #fff;
  border-radius: 8px; /* Slightly larger rounding */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px; /* Added padding for better spacing inside */
  position: absolute;
  top: 110%; /* Adjusted to add more space below the dropdown */
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  z-index: 1000;
  width: 240px; /* Increased width */
  height: 240px; /* Increased height */
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 8px; /* Slightly larger rounding */
  font-weight: bold;
  font-size: 1.4em; /* Increased font size for better readability */
  cursor: pointer;
  grid-area: ${({ area }) => area};
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const Flag = styled.img`
  width: 60px; /* Increased flag size */
  height: 40px;
`;


const Label = styled.div`
  margin-top: 5px;
  font-size: 1.2em;
`;

export default LanguageDropdown;
