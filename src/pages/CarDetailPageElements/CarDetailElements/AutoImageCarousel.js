// AutoImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const AutoImageCarousel = ({ images }) => {
  return (
    <StyledCarousel
      showThumbs={true}
      showStatus={false}
      autoPlay
      interval={3000}
      infiniteLoop
      transitionTime={1000}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Carousel item ${index + 1}`} />
        </div>
      ))}
    </StyledCarousel>
  );
};

// Styled component for customizing the carousel's appearance
const StyledCarousel = styled(Carousel)`
  .carousel .slide img {
    border-radius: 8px;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .carousel .thumb {
    border: 2px solid black;
    border-radius: 8px;
    width: 80px;
    height: 80px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      border-color: #ffcc00;
      transform: scale(1.05);
    }
  }

  /* Styling for circular control arrows */
  .carousel .control-arrow {
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    width: 50px;
    height: 50px;
    border-radius: 50%; /* Circular shape */
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    border: 2px solid #ffcc00; /* Yellow border for styling */

    &:hover {
      background-color: rgba(255, 204, 0, 0.7); /* Lighter yellow on hover */
    }
  }

  /* Position adjustments for the left and right arrows */
  .carousel .control-prev.control-arrow {
    left: 15px;
  }

  .carousel .control-next.control-arrow {
    right: 15px;
  }

  /* Styling the arrow icon within the control */
  .carousel .control-arrow:before {
    font-size: 1.5em;
    color: #ffcc00; /* Yellow color for the arrow icon */
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

export default AutoImageCarousel;
