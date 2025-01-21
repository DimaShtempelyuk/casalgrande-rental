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
            <h2>Co Vám můžeme nabídnout:</h2>
            <ul>
              <li>Výkopy základů pro rodinné domy, garáže, ploty a další stavby.</li>
              <li>Terénní úpravy – zarovnání a příprava pozemků.</li>
              <li>Výkopy pro inženýrské sítě – vodovodní, kanalizační, plynové a elektrické přípojky.</li>
              <li>Odstranění zeminy a odvoz stavebního odpadu.</li>
              <li>Úprava zahrad a výkopy pro bazény či jezírka.</li>
            </ul>

            <h2>Proč si vybrat nás?</h2>
            <ul>
              <li>Moderní technika a profesionální přístup.</li>
              <li>Zkušený tým s více než 30 lety praxe.</li>
              <li>Flexibilita a rychlé dokončení zakázek.</li>
              <li>Individuální přístup ke každému zákazníkovi.</li>
            </ul>

            <p>
              <strong>Cenu poptejte ještě dnes!</strong>
              <br />
              Rádi Vám zpracujeme nezávaznou nabídku na míru. Neváhejte nás kontaktovat a zjistit, jak můžeme
              pomoci s Vaším projektem!
            </p>
          </Description>

          {/* Pulsating Phone Number */}
          <PulsingPhoneNumber href="tel:+420704057272">+420 704 057 272</PulsingPhoneNumber>

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
  height: 100dvh;
`;

const VideoSection = styled.div`
  position: fixed;
  top: 16dvh;
  left: 2dvw;
  width: 46dvw;
  height: 50dvh;
  overflow: hidden; /* Ensures the video fits the section */

  @media (max-width: 768px) {
    width: 100vw; /* Full width for smaller screens */
  }
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover; /* Ensures the video fills the container proportionally */
`;

const ContentWrapper = styled.div`

  margin-top: 10dvh;
  margin-left: 50vw; /* Leaves space for the fixed video */
  padding: 20px;
  width: 50vw; /* Ensures the content takes up the right half */
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100vw;
  }
`;

const DetailsSection = styled.div`
  text-align: left;
`;

const Description = styled.div`
  border: 2px solid #ccc; /* Border for the description */
  padding: 20px;
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
  max-width: 100%;
  text-align: center;

  form {
    width: 100%;
  }
`;

export default OurServices;
