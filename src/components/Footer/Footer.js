import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>&copy; {currentYear} Casagrande Furgon Rental. All Rights Reserved.</FooterText>
      <FooterText>
        Contact us: <FooterLink href="mailto:rental@casalgrande.cz">rental@casalgrande.cz</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

// Styled components
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  position: relative;
  width: 100%;
  bottom: 0;
  margin-top: auto;
`;

const FooterText = styled.p`
  margin: 5px 0;
`;

const FooterLink = styled.a`
  color: #ffcc00;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
