import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import emailjs from 'emailjs-com';
import { cars } from '../data/carData';
import Swal from 'sweetalert2';
import PriceTable from '../components/PriceTable';
import OrderForm from '../components/CarDetailPageElements/OrderForm';

const CarDetailPage = () => {
    
  const { id } = useParams(); // Get car ID from URL
  const car = cars.find((car) => car.id === parseInt(id)); // Find the car data by ID

  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iggsweb', 'template_eah3lbr', form.current, 'G-QYLRqEt_PRIW66r')
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Order Sent!',
            text: 'Your car order has been successfully sent. We will contact you soon!',
            confirmButtonColor: '#3085d6',
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to send order. Please try again later.',
            confirmButtonColor: '#d33',
          });
        }
      );

    e.target.reset();
  };

  if (!car) {
    return <p>Car not found.</p>;
  }

  return (
    <DetailContainer>
      <CarInfo>
        <ImageCarousel>
          <Carousel showThumbs={true} showStatus={false}>
            {car.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${car.name} ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </ImageCarousel>
        <CarDescription>
          <h2>{car.name}</h2>
          <p>{car.description}</p>
          <Specifications>
            {car.specs.map((spec, index) => (
              <SpecRow key={index}>
                <SpecTitle>{spec.title}:</SpecTitle>
                <SpecValue>{spec.value}</SpecValue>
              </SpecRow>
            ))}
          </Specifications>
        </CarDescription>
      </CarInfo>
      <AdditionalInfo>
        <PriceTable priceRanges={car.priceRanges} deposit="15 000 Kč" />
        <OrderForm ref={form} onSubmit={sendEmail}>
          {/* Form fields here */}
        </OrderForm>
      </AdditionalInfo>
      
      <GDPRContainer>
        <GDPRCheckbox type="checkbox" required />
        <GDPRLabel>
          Uděluji souhlas s poskytnutím a zpracováním osobních údajů
        </GDPRLabel>
      </GDPRContainer>

      <SubmitButton type="submit" form="orderForm">
        ODESLAT POPTÁVKU
      </SubmitButton>
    </DetailContainer>
  );
};

// Styled components
const DetailContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  padding-left: 12.5%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const CarInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageCarousel = styled.div`
  flex: 2;
  margin-right: 20px;
  max-width: 700px;

  .carousel .thumbs-wrapper {
    margin-top: 10px;
  }

  .carousel .thumb img {
    height: 80px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
  }
`;

const CarDescription = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
  font-size: 16px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 2dvh;
  }

  p {
    margin-bottom: 20px;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const AdditionalInfo = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const GDPRContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
`;

const GDPRCheckbox = styled.input`
  margin-right: 10px;
`;

const GDPRLabel = styled.label`
  font-size: 14px;
  color: #555;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #ff6a00;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #e65c00;
  }
`;
// Styled components
const Specifications = styled.div`
  margin-top: 20px;
`;

const SpecRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
`;

const SpecTitle = styled.div`
  font-weight: bold;
`;

const SpecValue = styled.div`
  text-align: right;
`;


export default CarDetailPage;
