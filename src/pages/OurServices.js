import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ServiceVideo from '../assets/videos/work_video.MP4'; // Path to your video file
import ServiceOrderForm from './OurServicesElements/ServiceOrderForm';

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <Container>
      {/* Video Section */}
      <VideoSection>
        <Video autoPlay loop muted playsInline>
          <source src={ServiceVideo} type="video/mp4" />
          {t('service.videoSupportMessage')} {/* Fallback for unsupported browsers */}
        </Video>
      </VideoSection>

      {/* Content Section */}
      <ContentWrapper>
        <DetailsSection>
        <Description>
  <h2>{t('service.descriptionTitle1')}</h2>
  <ul>
    {t('service.descriptionList1', { returnObjects: true }).map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

  <h2>{t('service.descriptionTitle2')}</h2>
  <ul>
    {t('service.descriptionList2', { returnObjects: true }).map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

  <p>
    <strong>{t('service.descriptionFooter')}</strong>
  </p>
</Description>


          {/* Pulsating Phone Number */}
          <PulsingPhoneNumber href="tel:+420704057272">+420 724 239 319</PulsingPhoneNumber>

          {/* Order Form */}
          <OrderFormWrapper>
            <ServiceOrderForm />
          </OrderFormWrapper>
        </DetailsSection>
      </ContentWrapper>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden; /* Prevent content overflow */
`;

const VideoSection = styled.div`
  position: fixed;
  top: 19dvh;
  left: 2dvw;
  width: 46dvw;
  height: 50dvh;

  @media (max-width: 768px) {
    margin-top: 12dvh;
    position: static; /* Adjust for smaller screens */
    width: 100%; 
    height: auto; 
    margin-bottom: 20px; /* Add spacing */
  }
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover; /* Ensures the video fills the container proportionally */
`;

const ContentWrapper = styled.div`
margin-top: 16dvh;
margin-left: 50vw; /* Leaves space for the fixed video */
  padding: 20px;
  width: 100%; /* Ensures the content takes up the right half */
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0;
    width: 100%; /* Full width for smaller screens */
    padding: 10px; /* Add padding */
    overflow-y: auto; /* Scrollable content if necessary */
  }
`;

const DetailsSection = styled.div`
  text-align: left;
`;

const Description = styled.div`
  border: 2px solid #ccc; /* Border for the description */
  padding: 20px;
  position:static;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h2 {
    margin-top: 20px;
    font-size: 1.4em;
    color: #444;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-top: 10px;

    li {
      margin-bottom: 10px;
      font-size: 1em;
      color: #555;
    }
  }

  p {
    margin-top: 20px;
    font-size: 1.1em;
    color: #666;
  }
`;

const PulsingPhoneNumber = styled.a`
height:5dvh;
width: 95%;
  display: block;
  font-size: 2.5em;
  color: #ffcc00;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
  animation: pulse 1.5s infinite;

  &:hover {
    text-decoration: underline;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const OrderFormWrapper = styled.div`
  width: 100%; /* Ensure it takes full available space */
  text-align: center;
  box-sizing: border-box; /* Include padding in size calculations */
  
  form {
    width: 100%; /* Let the form take full width of its container */
  }
`;

export default OurServices;
