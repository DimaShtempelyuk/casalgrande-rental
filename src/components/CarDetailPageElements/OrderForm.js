import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const OrderFormComponent = ({ formRef, sendEmail, carName }) => {
  const [rentalDate, setRentalDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [isIcoSelected, setIsIcoSelected] = useState(true);
  const [icoValue, setIcoValue] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const handleToggle = (isIco) => {
    setIsIcoSelected(isIco);
    setIcoValue('');
    setDateOfBirth(null);
  };

  const handleIcoChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,8}$/.test(value)) {
      setIcoValue(value);
    }
  };

  return (
    <OrderForm ref={formRef} onSubmit={sendEmail}>
      <Input type="hidden" name="car_name" value={carName} />

      <Label htmlFor="user_name">Název firmy / jméno a příjmení *</Label>
      <Input type="text" name="user_name" id="user_name" required />
      <SegmentedControl>
        <SegmentOption
          isActive={isIcoSelected}
          onClick={() => handleToggle(true)}
        >
          IČO
        </SegmentOption>
        <SegmentOption
          isActive={!isIcoSelected}
          onClick={() => handleToggle(false)}
        >
          Datum narození
        </SegmentOption>
      </SegmentedControl>

      {isIcoSelected ? (
        <Input
          type="text"
          name="user_id"
          placeholder="8 digit IČO"
          value={icoValue}
          onChange={handleIcoChange}
          required
        />
      ) : (
        <DateContainer>
          <DatePicker
  selected={dateOfBirth}
  onChange={(date) => setDateOfBirth(date)}
  dateFormat="dd/MM/yyyy"
  placeholderText="DD/MM/YYYY"
  name="user_id"
  required
  customInput={<CustomInput />}
  showYearDropdown
  scrollableYearDropdown
  yearDropdownItemNumber={100} // Shows 100 years in dropdown
  maxDate={new Date()} // Today's date
/>

          <CalendarIcon />
        </DateContainer>
      )}

      <Label htmlFor="rental_date">Datum zapůjčení *</Label>
      <DateContainer>
        <DatePicker
          selected={rentalDate}
          onChange={(date) => setRentalDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="DD/MM/YYYY"
          name="rental_date"
          required
          customInput={<CustomInput />}
        />
        <CalendarIcon />
      </DateContainer>

      <Label htmlFor="return_date">Datum vrácení *</Label>
      <DateContainer>
        <DatePicker
          selected={returnDate}
          onChange={(date) => setReturnDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="DD/MM/YYYY"
          name="return_date"
          required
          customInput={<CustomInput />}
        />
        <CalendarIcon />
      </DateContainer>

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

      <CheckboxContainer>
        <Checkbox type="checkbox" required />
        <CheckboxLabel>
          * Uděluji souhlas s poskytnutím a zpracováním osobních údajů
        </CheckboxLabel>
      </CheckboxContainer>

      <Button type="submit">ODESLAT POPTÁVKU</Button>
    </OrderForm>
  );
};

// Styled components
const OrderForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  max-width: 60dvw;
  min-width: 520px;
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

const SegmentedControl = styled.div`
  display: flex;
  width: 100%;
  grid-column: 2 4;
`;

const SegmentOption = styled.div`
  flex: 1;
  padding: 6px;
  font-size: 0.91rem;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#ffcc00' : '#f9f9f9')};
  border: ${(props) => (props.isActive ? '2px solid #ffcc00' : '2px solid #ddd')};
  color: ${(props) => (props.isActive ? '#333' : '#888')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  border-radius: ${(props, index) =>
    props.isActive && index === 0 ? '8px 0 0 8px' : props.isActive && index === 1 ? '0 8px 8px 0' : '8px'};
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const CalendarIcon = styled(FaCalendarAlt)`
  position: absolute;
  right: 10px;
  color: #888;
  pointer-events: none;
`;

const CustomInput = React.forwardRef(({ value, onClick, placeholder }, ref) => (
  <StyledInput onClick={onClick} ref={ref} value={value} placeholder={placeholder} readOnly />
));

const StyledInput = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
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

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  grid-column: span 2;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 1em;
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
