import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarCard = ({ id, name, images, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/car/${id}`); 
  };

  return (
    <Card onClick={handleClick}>
      <ImageCarousel 
  showThumbs={false} 
  showStatus={false} 
  autoPlay 
  interval={5000} 
  infiniteLoop 
  transitionTime={1000} // Sets the transition duration to 1 second (1000 ms)
>
  {images.map((image, index) => (
    <div key={index}>
      <img src={image} alt={`Car ${index + 1}`} />
    </div>
  ))}
</ImageCarousel>


      <Title>{name}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

// Styled components
const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 32px;
  cursor: pointer;
  max-width: 750px;
  text-align: center;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%;
    margin: 10px;
  }
`;

const ImageCarousel = styled(Carousel)`
  .carousel .slide img {
    border-radius: 8px;
    width: 100%;
    height: 300px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 200px;
    }
  }
`;

const Title = styled.h3`
  margin: 24px 0 12px;
  font-size: 1.8em;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Description = styled.p`
  color: #555;
  font-size: 1.2em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;


export default CarCard;
