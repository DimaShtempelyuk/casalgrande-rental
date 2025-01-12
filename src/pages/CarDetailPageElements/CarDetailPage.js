// CarDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { cars } from '../../data/carData';
import PriceTable from '../../components/PriceTable';
import OrderForm from '../../components/CarDetailPageElements/OrderForm';
import AutoImageCarousel from './CarDetailElements/AutoImageCarousel';
import CompactDescription from './CarDetailElements/CompactDescription';

const CarDetailPage = () => {
  const { id } = useParams();
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
          <PriceTable priceRanges={car.priceRanges} deposit="15 000 Kč" />
          <br />
          <h1>Poptejte toto auto už dneska!</h1>
          <OrderForm carName={car.name} />
        </AdditionalInfo>
      </ContentContainer>

    </DetailContainer>
  );
};

// Styled Components
const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  width: 80%;
  margin-left: 10%;
`;

const ImageCarouselContainer = styled.div`
  flex: 1;
  max-width: 800px;
  position: fixed;
  left: 0;
  top: 10dvh;
  bottom: 0;
  padding: 10px;
  overflow-y: auto;
  z-index: 1;
  margin-left: 10%;

  .carousel .slide img {
    border-radius: 8px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  margin-left: 800px;
  padding: 20px;
  width: 100%;
`;

const AdditionalInfo = styled.div`
  margin-top: 20px;
`;


export default CarDetailPage;
