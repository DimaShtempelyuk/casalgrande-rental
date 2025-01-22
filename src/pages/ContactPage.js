import React, { useRef,useEffect,useState } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

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
  const [_, setUpdate] = useState(0); // Dummy state to force re-render
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const handleLanguageChange = () => setUpdate((prev) => prev + 1);
    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_stox8pu', 'template_m7ytdqf', form.current, 'HuUqQRhtUZI0Fj6-O')
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: t('messageBox.success.title'), // Success title from translations
            text: t('messageBox.success.text'),   // Success text from translations
            confirmButtonColor: '#3085d6',
          });
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: t('messageBox.error.title'),   // Error title from translations
            text: t('messageBox.error.text'),     // Error text from translations
            confirmButtonColor: '#d33',
          });
        }
      );

    e.target.reset();
  };

  return (
    <Container>
      <InfoSection>
        <h2>{t("contactPage.title")}</h2>
        <h3>{t("contactPage.operator")}</h3>
        <h3>🏠 {t("contactPage.address")}</h3>
        <p>{t("contactPage.street")}</p>
        <p>📞<strong>{t("contactPage.phone")}: +420 704 057 272</strong></p>
        <p>📧 {t("contactPage.email")}: rental@casalgrande.cz</p>
        <h3>{t("contactPage.availability")}</h3>
        <StyledTable>
          <thead>
            <tr>
              <th>{t("contactPage.days.mon")}</th>
              <th>{t("contactPage.hours.weekday")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t("contactPage.days.tue")}</td>
              <td>{t("contactPage.hours.weekday")}</td>
            </tr>
            <tr>
              <td>{t("contactPage.days.wed")}</td>
              <td>{t("contactPage.hours.weekday")}</td>
            </tr>
            <tr>
              <td>{t("contactPage.days.thu")}</td>
              <td>{t("contactPage.hours.weekday")}</td>
            </tr>
            <tr>
              <td>{t("contactPage.days.fri")}</td>
              <td>{t("contactPage.hours.weekday")}</td>
            </tr>
            <tr>
              <td>{t("contactPage.days.sat")}</td>
              <td>{t("contactPage.hours.weekend")}</td>
            </tr>
            <tr>
              <td>{t("contactPage.days.sun")}</td>
              <td>{t("contactPage.hours.weekend")}</td>
            </tr>
          </tbody>
        </StyledTable>
      </InfoSection>

      <FormSection>
        <h2>{t("contactPage.form.title")}</h2>
        <p>{t("contactPage.form.description")}</p>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <Input type="text" name="user_name" placeholder={t("contactPage.form.namePlaceholder")} required />
          <Input type="email" name="user_email" placeholder={t("contactPage.form.emailPlaceholder")} required />
          <Input type="text" name="user_phone" placeholder={t("contactPage.form.phonePlaceholder")} required />
          <TextArea name="message" placeholder={t("contactPage.form.messagePlaceholder")} required />
          <CheckboxContainer>
            <Checkbox type="checkbox" required />
            <CheckboxLabel>
              {t("contactPage.form.checkboxLabel")}
            </CheckboxLabel>
          </CheckboxContainer>
          <Button type="submit">{t("contactPage.form.submitButton")}</Button>
        </ContactForm>
      </FormSection>

      <MapSection>
        <MapContainer center={[50.0354, 14.2327]} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[50.0354, 14.2327]}>
            <Popup>{t("contactPage.address")}: Masarykova 89/43, 252 19 Rudná</Popup>
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
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 400px;
  background-color: #fff; /* White background */
  border: 1px solid #ddd; /* Light border for separation */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  font-family: Arial, sans-serif; /* Clean font style */

  p {
  display: flex;
  align-items: center;
}

p strong {
  color: #e63946; /* Highlighted color for phone */
  font-weight: bold;
}

p:first-of-type strong {
  font-size: 1.1em; /* Slightly larger for emphasis */
}

p i {
  font-size: 1.2em; /* Slightly larger icons */
  color: #333;
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
