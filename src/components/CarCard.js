import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarCard = ({ id, name, images, description }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/car/${id}`);
  };

  return (
    <Card>
      <ImageCarousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval={3000}
        infiniteLoop
        transitionTime={1000}
      >
        {images.map((image, index) => (
          <div key={index} onClick={handleNavigate} role="button" style={{ cursor: 'pointer' }}>
            <img src={image} alt={`Car ${index + 1}`} />
          </div>
        ))}
      </ImageCarousel>
      <CardContent onClick={handleNavigate}>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </CardContent>
    </Card>
  );
};

// Styled components
const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 750px;
  text-align: center;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 10px;
  }
`;

const ImageCarousel = styled(Carousel)`
  .carousel .slide img {
    border-radius: 8px;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .carousel .control-arrow {
    background-color: rgba(0, 0, 0, 0.5);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .carousel .control-prev.control-arrow {
    left: 10px;
    border: 2px solid #ffcc00;
  }

  .carousel .control-next.control-arrow {
    right: 10px;
    border: 2px solid #ffcc00;
  }

  .carousel .control-arrow:hover {
    background-color: rgba(255, 204, 0, 0.7);
    border: 2px solid #ffcc00;
  }

  .carousel .control-arrow:before {
    font-size: 2em;
    color: white;
    
  }

  @media (max-width: 768px) {
    .carousel .slide img {
      height: 250px;
    }
    .carousel .control-arrow {
      width: 40px;
      height: 40px;
    }
  }
`;

const CardContent = styled.div`
  padding: 16px;
  cursor: pointer;
`;

const Title = styled.h3`
  margin: 12px 0;
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
