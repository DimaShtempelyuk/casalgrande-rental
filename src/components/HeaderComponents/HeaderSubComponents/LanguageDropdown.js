import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';
import i18n from '../../../utils/i18n/i18n.js';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('i18nextLng')?.toUpperCase() || 'CZ');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial mobile detection

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

  // Update `isMobile` based on the window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && savedLanguage.toUpperCase() !== selectedLanguage) {
      setSelectedLanguage(savedLanguage.toUpperCase());
    }
  }, []);

  return (
    <DropdownContainer isMobile={isMobile}>
      <SelectedLanguage isMobile={isMobile} onClick={() => setIsOpen((prev) => !prev)}>
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
  ${({ isMobile }) =>
    isMobile &&
    css`
      width: 100%;
      text-align: center;
    `}
`;

const SelectedLanguage = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
  gap: 10px;
  background: ${({ isMobile }) => (isMobile ? '#f8f8f8' : '#333')};
  color: ${({ isMobile }) => (isMobile ? '#000' : '#fff')};
  font-weight: bold;
  padding: 15px 20px;
  border-radius: 5px;
  border: ${({ isMobile }) => (isMobile ? '2px solid #ddd' : 'none')};
`;

const GridMenu = styled.div`
  display: grid;
  grid-template-areas:
    'topLeft topRight'
    'bottomLeft bottomRight';
  grid-gap: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 240px;
  height: 240px;

  @media (min-width: 769px) {
    width: 180px; /* Smaller width for larger screens */
    height: 180px; /* Smaller height for larger screens */
    grid-gap: 5px; /* Reduced gap */
    background: #333; /* Darker background for contrast */
    color: #fff; /* Lighter text for contrast */
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.4em;
  cursor: pointer;
  grid-area: ${({ area }) => area};
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #e6e6e6;
  }

  @media (min-width: 769px) {
    background: #444; /* Darker tile background for contrast */
    font-size: 1.2em; /* Smaller font size for larger screens */
    color: #fff; /* White text for contrast */
    &:hover {
      background-color: #555; /* Slightly lighter background on hover */
    }
  }
`;

const Flag = styled.img`
  width: 60px;
  height: 40px;

  @media (min-width: 769px) {
    width: 40px; /* Smaller flag size for larger screens */
    height: 30px;
  }
`;


const Label = styled.div`
  margin-top: 5px;
  font-size: 1.2em;
`;

export default LanguageDropdown;
