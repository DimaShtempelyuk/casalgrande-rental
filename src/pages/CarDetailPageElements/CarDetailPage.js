// CarDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { cars } from '../../data/carData';
import PriceTable from '../../components/PriceTable';
import OrderForm from '../../components/CarDetailPageElements/OrderForm';
import AutoImageCarousel from './CarDetailElements/AutoImageCarousel';
import CompactDescription from './CarDetailElements/CompactDescription';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

  

const CarDetailPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [, setUpdate] = useState(0); // Dummy state to force re-render
  
  useEffect(() => {
    const handleLanguageChange = () => setUpdate((prev) => prev + 1);
    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);
  
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) return <p>Car not found.</p>;

  return (
    <DetailContainer>
      <ImageCarouselContainer>
        <AutoImageCarousel images={car.images} />
      </ImageCarouselContainer>
      
      <ContentContainer>
        <CompactDescription car={car} />

        <AdditionalInfo>
          <PriceTable carId={car.id} priceRanges={car.priceRanges} />
          <br />
          <h1>{t('askkforcar')}</h1>
          <OrderForm carName={car.name} />
        </AdditionalInfo>
      </ContentContainer>

    </DetailContainer>
  );
  
};

const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  max-width: 80dvw;
  margin-left: 10%;
  margin-top: 10dvh;
  object-fit: cover;
  @media (max-width: 1650px) {
    margin-left: 5%;
    max-width: 90dvw;
  }
  @media (max-width: 1520px) {
    margin-left: 0px;
    max-width: 100dvw;
  }
  @media (max-width: 1400px) {
    margin-left: -5%;
    max-width: 100dvw;
  }
  @media (max-width: 1280px) {
    margin-left: -10%;
    max-width: 120dvw;
  }
  @media (max-width: 1223px) {
    margin-left: -15%;
    max-width: 120dvw;
  }
  @media (max-width: 1105px) {
    flex-direction: column;
    width: auto;
    margin-left: 0;
    padding: 10px;
    margin-top: 8dvh; /* Consistent spacing for smaller screens */
    overflow: hidden;
  }
`;


const ImageCarouselContainer = styled.div`
  flex: 1;
  max-width: 42dvw;
  position: fixed;
  left: 0;
  top: 14dvh; /* Matches the header height */
  bottom: 0;
  padding: 10px;
  overflow-y: auto;
  z-index: 10; /* Lower than the header */
  margin-left: 10%;

  .carousel .slide img {
    border-radius: 8px;
    width: 100%;
    height: 60dvh;
    object-fit: cover;
  }

  
  @media (max-width: 1650px) {
    margin-left: 10%;
    .carousel .slide img {
      height: 80%;
    }
  }
  @media (max-width: 1105px) {
    position: relative;
    margin-left: 0;
    top: 2dvh;
    height: auto;
    padding: 0;
    width: 100%;
    max-width: 100%;

    .carousel .slide img {
      object-fit: cover;
      height: 50dvh;
      max-width: 100%;
      min-width: 80dvw;
    }
  }
  @media (max-width: 500px) {
    position: relative;
    margin-left: 0;
    top: 2dvh;
    height: auto;
    padding: 0;
    width: 100%;
    max-width: 100%;

    .carousel .slide img {
      object-fit: cover;
      height: 30dvh;
      max-width: 100%;
      min-width: 80dvw;
    }
  }
`;


const ContentContainer = styled.div`
  flex: 2;
  margin-left: 800px;
  padding: 20px;
  width: 100%;

  @media (max-width: 1105px) {
    margin-left: 0;
    padding: 10px;
  }
`;

const AdditionalInfo = styled.div`
  margin-top: 20px;

  @media (max-width: 1105px) {
    margin-top: 10px;
  }
`;


export default CarDetailPage;
