import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/casalgrande_logo.png';

const LogoSection = ({ isMobile }) => (
  <LogoContainer>
    <Logo src={logo} alt="Casagrande Furgon Rental" />
    {!isMobile && <BrandLink to="/"> Casagrande Rental</BrandLink>}

  </LogoContainer>
);

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1321px) {
    margin-left: -50dvw;
  }
  @media (max-width: 1025px) {
    margin-left: -40dvw;
  }
  @media (max-width: 841px) {
    margin-left: -30dvw;
  }
  @media (max-width: 768px) {
    margin-left: -75dvw;
  }
  @media (max-width: 531px) {
    margin-left: -60dvw;
  }
`;

const Logo = styled.img`
  height: 9dvh;
  width: auto;
`;

const BrandLink = styled(Link)`
  font-size: 1.5em;
  margin-left: 10px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

export default LogoSection;
