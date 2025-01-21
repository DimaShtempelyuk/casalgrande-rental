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
        'service_iggsweb', // Replace with your service ID
        'template_eah3lbr', // Replace with your template ID
        formRef.current,
        'HuUqQRhtUZI0Fj6-O' // Replace with your user ID
      )
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Zpráva odeslána!',
            text: 'Vaše zpráva byla úspěšně odeslána. Brzy Vás budeme kontaktovat!',
            confirmButtonColor: '#3085d6',
          });
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Chyba!',
            text: 'Nepodařilo se odeslat zprávu. Kontaktujte nás na +420 704 057 272.',
            confirmButtonColor: '#d33',
          });
        }
      );

    e.target.reset();
  };

  return (
    <OrderForm ref={formRef} onSubmit={sendEmail}>
      <Label htmlFor="full_name">{t('form.companyOrName')} *</Label>
      <Input type="text" name="full_name" id="full_name" required />

      <Label htmlFor="email">{t('form.email')} *</Label>
      <Input type="email" name="email" id="email" required />

      <Label htmlFor="phone">{t('form.phone')}</Label>
      <Input type="tel" name="phone" id="phone" />

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
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
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
`;

export default ServiceOrderForm;
