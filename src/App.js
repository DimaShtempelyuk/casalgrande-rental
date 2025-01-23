import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarDetailPage from './pages/CarDetailPageElements/CarDetailPage';
import ContactPage from './pages/ContactPage';
import Header from './components/HeaderComponents/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import OurServices from "./pages/OurServices"

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <MainContainer>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/car/:id" element={<CarDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<OurServices />} />
          </Routes>
        </Content>
        <Footer />
      </MainContainer>
    </Router>
  );
}

// Styled components
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh; /* Full height of the viewport */
  @media (min-width: 768px){
    
  touch-action: none; /* Disables touch gestures */
  overflow: hidden;   /* Prevents scrolling */
  }
`;

const Content = styled.div`
  padding: 5px;
`;

export default App;
