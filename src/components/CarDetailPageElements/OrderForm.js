import React, { useRef } from 'react';
import styled from 'styled-components';

const OrderFormComponent = ({ sendEmail, car }) => {
  const form = useRef();

  return (
    <OrderForm ref={form} onSubmit={sendEmail}>
      <Label htmlFor="user_name">Název firmy / jméno a příjmení *</Label>
      <Input type="text" name="user_name" id="user_name" required />

      <Label htmlFor="user_id">IČO / datum narození</Label>
      <Input type="text" name="user_id" id="user_id" />

      <Label htmlFor="rental_date">Datum zapůjčení *</Label>
      <Input type="date" name="rental_date" id="rental_date" required />

      <Label htmlFor="return_date">Datum vrácení *</Label>
      <Input type="date" name="return_date" id="return_date" required />

      <Label htmlFor="user_email">E-mail *</Label>
      <Input type="email" name="user_email" id="user_email" required />

      <Label htmlFor="user_phone">Telefon</Label>
      <Input type="tel" name="user_phone" id="user_phone" />

      <Label htmlFor="abroad_trip">Cesta do zahraničí *</Label>
      <Select name="abroad_trip" id="abroad_trip" required>
        <option value="">Vyberte</option>
        <option value="yes">Ano</option>
        <option value="no">Ne</option>
      </Select>

      <Label htmlFor="message">Vaše zpráva</Label>
      <TextArea name="message" id="message" />

      <Button type="submit">ODESLAT POPTÁVKU</Button>
    </OrderForm>
  );
};

// Styled components
const OrderForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  max-width: 800px;
  min-width: 520px;
  margin-left: 10px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    min-width: 300px;
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

const Select = styled.select`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  grid-column: span 2;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
`;

const Button = styled.button`
  grid-column: span 2;
  padding: 15px;
  font-size: 1em;
  color: #fff;
  background-color: #ff6a00;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e65c00;
  }
`;

export default OrderFormComponent;
