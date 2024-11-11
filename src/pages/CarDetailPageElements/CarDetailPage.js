// CarDetailPage.js
import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { cars } from '../../data/carData';
import Swal from 'sweetalert2';
import PriceTable from '../../components/PriceTable';
import OrderForm from '../../components/CarDetailPageElements/OrderForm';
import AutoImageCarousel from './CarDetailElements/AutoImageCarousel';
import CompactDescription from './CarDetailElements/CompactDescription';

const CarDetailPage = () => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));
  const form = useRef();
  const [rentalDate] = useState(null);
  const [returnDate] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      car_name: car ? car.name : '',
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      user_phone: e.target.user_phone.value,
      user_id: e.target.user_id.value,
      rental_date: rentalDate ? rentalDate.toLocaleDateString('en-GB') : '',
      return_date: returnDate ? returnDate.toLocaleDateString('en-GB') : '',
      abroad_trip: e.target.abroad_trip.value,
      message: e.target.message.value,
    };

    emailjs
      .send('service_iggsweb', 'template_eah3lbr', formData, 'HuUqQRhtUZI0Fj6-O')
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Poptávka odeslána!',
            text: 'Vaše objednávka byla úspěšně odeslána. Brzy Vás budeme kontaktovat!',
            confirmButtonColor: '#3085d6',
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'No to teda...',
            text: 'Chyba. Zkuste později.',
            confirmButtonColor: '#d33',
          });
        }
      );
  };

  if (!car) return <p>Car not found.</p>;

  return (
    <DetailContainer>
      <ImageCarouselContainer>
        <AutoImageCarousel images={car.images} />
      </ImageCarouselContainer>
      
      <ContentContainer>
          <CompactDescription car={car}/>


        <AdditionalInfo>
          <PriceTable priceRanges={car.priceRanges} deposit="15 000 Kč" />
          <br></br>
          <h1>Poptejte toto auto už dneska!</h1>
          <OrderForm formRef={form} sendEmail={sendEmail} carName={car.name} />
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
