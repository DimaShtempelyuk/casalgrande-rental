import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import LanguageDropdown from './LanguageDropdown';

const IconsContainer = ({ viewportWidth }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 8, -7, 10, -6, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.start({
      rotate: 360,
      scale: 1.2,
      transition: { duration: 0.7, ease: 'easeOut' },
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      rotate: 0,
      scale: 1,
      transition: { duration: 1.2, ease: 'easeOut' },
    }).then(() => {
      controls.start({
        rotate: [0, 8, -7, 10, -6, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        },
      });
    });
  };

  return (
    <Container>
      {/* Render LanguageDropdown only if viewport width is greater than 768px */}
      {viewportWidth >= 768 && <LanguageDropdown />}
      <StickyInstagram
        href="https://www.instagram.com/casalgranderental/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={controls}
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
