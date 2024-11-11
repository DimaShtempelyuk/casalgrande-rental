import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import LanguageDropdown from './LanguageDropdown.js';

const IconsContainer = ({ viewportWidth }) => {
  return (
    <Container>
      <LanguageDropdown />
      <StickyInstagram
        href="https://www.instagram.com/casalgranderental/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{
          scale: 1,
          rotate: 0,
        }}
        animate={{
          rotate: [0, 8, -7, 10, -6, 0], // Wiggle effect
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.2,
          rotate: 360, // Full rotation on hover
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <FaInstagram size={80} />
      </StickyInstagram>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

// Styled component for the sticky Instagram icon
const StickyInstagram = styled(motion.a)`
  position: fixed;
  bottom: 8dvh;
  right: 1dvw;
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  cursor: pointer;
`;

export default IconsContainer;
