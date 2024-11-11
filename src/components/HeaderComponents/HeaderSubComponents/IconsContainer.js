import React, { useState } from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import LanguageDropdown from './LanguageDropdown.js';

const IconsContainer = ({ viewportWidth }) => {
  return (
    <Container>
      <LanguageDropdown />
      <StickyInstagram><FaInstagram></FaInstagram></StickyInstagram>
    </Container>
    
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;


const StickyInstagram = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
  color: white;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  z-index: 1000;
  &:hover {
    transform: scale(1.1);
  }
`;

export default IconsContainer;
