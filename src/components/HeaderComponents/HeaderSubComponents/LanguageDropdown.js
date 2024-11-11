import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('CZ');
  const [isOpen, setIsOpen] = useState(false);

  // Static SVG URLs for flags
  const languages = {
    CZ: 'https://flagcdn.com/w20/cz.png',
    UA: 'https://flagcdn.com/w20/ua.png',
    EN: 'https://flagcdn.com/w20/us.png',
    DE: 'https://flagcdn.com/w20/de.png',
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false); // Close dropdown on selection
  };

  return (
    <DropdownContainer>
      <SelectedLanguage onClick={() => setIsOpen((prev) => !prev)}>
        <Flag src={languages[selectedLanguage]} alt={selectedLanguage} />
        {selectedLanguage}
        <FaCaretDown />
      </SelectedLanguage>
      {isOpen && (
        <DropdownMenu>
          {Object.entries(languages).map(([key, flag]) => (
            <DropdownItem key={key} onClick={() => handleLanguageSelect(key)}>
              <Flag src={flag} alt={key} />
              {key}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

// Styled components for dropdown
const DropdownContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const SelectedLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
`;

const Flag = styled.img`
  width: 20px;
  height: 15px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 5px 0;
  z-index: 1000;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  cursor: pointer;
  color: #333;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default LanguageDropdown;
