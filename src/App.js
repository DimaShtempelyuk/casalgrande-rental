import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarDetailPage from './pages/CarDetailPageElements/CarDetailPage';
import ContactPage from './pages/ContactPage';
import Header from './components/HeaderComponents/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import * as Sentry from '@sentry/react';

function App() {
  
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
            {/* Add a route for the services page */}
            <Route path="/services" element={<div>Our Services Page (To be implemented)</div>} />
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
`;

const Content = styled.div`
  flex: 1; /* Grow to fill available space */
  padding: 20px;
`;

export default App;
