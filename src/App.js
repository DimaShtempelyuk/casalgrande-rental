import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarDetailPage from './pages/CarDetailPageElements/CarDetailPage';
import ContactPage from './pages/ContactPage';
import Header from './components/HeaderComponents/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import * as Sentry from '@sentry/react';
import OurServices from "./pages/OurServices"

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <Sentry.ErrorBoundary
      fallback={<p>An error occurred. Please try again later.</p>}
      showDialog={false} // Ensures no dialog is shown to users
    >
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
    </Sentry.ErrorBoundary>
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
