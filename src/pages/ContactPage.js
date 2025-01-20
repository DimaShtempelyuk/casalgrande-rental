import React, { useRef } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from 'emailjs-com';

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issues in Leaflet when using Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iggsweb', 'template_55j23vs', form.current, 'G-QYLRqEt_PRIW66r')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message.');
        }
      );

    e.target.reset();
  };

  return (
    <Container>
      <InfoSection>
        <h2>KONTAKT</h2>
        <h3>PROVOZOVATEL</h3>
        <p>🏠 Casagrande Furgon Rental</p>
        <p> Masarykova 89/43, 252 19 Rudná</p>
        <p>📞 <strong>+420 123 456 789</strong> (Po-Pá 08:00 – 16:00 / So-Ne 08:00 – 12:00)</p>
        <p>📧 info@yourcompany.com</p>
      </InfoSection>
      <FormSection>
        <h2>MÁTE DOTAZ?</h2>
        <p>Rádi zodpovíme Vaše dotazy.</p>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <Input type="text" name="user_name" placeholder="Jméno a příjmení*" required />
          <Input type="email" name="user_email" placeholder="Email*" required />
          <Input type="text" name="user_phone" placeholder="Telefon*" required />
          <TextArea name="message" placeholder="Zpráva*" required />
          <CheckboxContainer>
            <Checkbox type="checkbox" required />
            <CheckboxLabel>
              Uděluji souhlas s poskytnutím a zpracováním osobních údajů
            </CheckboxLabel>
          </CheckboxContainer>
          <Button type="submit">Odeslat</Button>
        </ContactForm>
      </FormSection>
      <MapSection>
        <MapContainer center={[50.0354, 14.2327]} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[50.0354, 14.2327]}>
            <Popup>Your Location: Masarykova 89/43, 252 19 Rudná</Popup>
          </Marker>
        </MapContainer>
      </MapSection>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10dvh; 
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 400px;

  h2, h3 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 100%;
  }
`;

const FormSection = styled.div`
  flex: 2;
  padding: 20px;
  max-width: 600px;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 100%;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 0.9em;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const MapSection = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 100%;
    height: auto;
  }
`;

export default ContactPage;
