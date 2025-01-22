import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const ServiceOrderForm = () => {
  const formRef = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_stox8pu', 'template_m7ytdqf', formRef.current, 'HuUqQRhtUZI0Fj6-O'
      )
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
    <OrderForm ref={formRef} onSubmit={sendEmail}>
      <Label htmlFor="full_name">{t('form.companyOrName')} *</Label>
      <Input type="text" name="user_name" id="user_name" required />

      <Label htmlFor="email">{t('form.email')} *</Label>
      <Input type="email" name="user_email" id="user_email" required />

      <Label htmlFor="phone">{t('form.phone')}</Label>
      <Input type="tel" name="user_phone" id="user_phone" />

      <Label htmlFor="message">{t('form.message')}</Label>
      <TextArea name="message" id="message" />

      <Button type="submit">{t('form.submit')}</Button>
    </OrderForm>
  );
};

// Styled components
const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  max-width: 95%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 95%; /* Form takes up full width on smaller screens */
    padding: 10px; /* Reduced padding for smaller screens */
  }

  @media (max-width: 480px) {
    gap: 10px; /* Reduce gap for extra-small screens */
    padding: 8px; /* Further reduce padding */
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.9em; /* Slightly smaller font on smaller screens */
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 0.9em; /* Adjust font size for inputs */
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.9em; /* Adjust font size for textarea */
  }
`;

const Button = styled.button`
  padding: 15px;
  font-size: 1em;
  color: #fff;
  background-color: #ff6a00;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #e65c00;
  }

  @media (max-width: 768px) {
    font-size: 0.9em; /* Adjust button font size */
    padding: 10px; /* Reduce button padding */
  }
`;


export default ServiceOrderForm;
