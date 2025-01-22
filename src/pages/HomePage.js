import React from 'react';
import CarCard from '../components/CarCard';
import styled from 'styled-components';
import { cars } from '../data/carData';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();
    return (
      <Container>
        <Title>{t('welcome')}</Title>
        <CardContainer>
          {cars.map((car) => (
            <CarCard
            key={car.id}
            id={car.id}
            name={car.name} // Translation key
            images={car.images}
            description={car.description} // Translation key
          />
          ))}
        </CardContainer>
      </Container>
    );
  };

// Styled components
const Container = styled.div`
  padding: 20px;
  text-align: center;
  margin-top: 9dvh;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


export default HomePage;
