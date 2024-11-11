import React, { useState } from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

const IconsContainer = () => {
  const [language, setLanguage] = useState('CZ');

  const handleLanguageChange = (lang) => setLanguage(lang);

  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
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

export default IconsContainer;
