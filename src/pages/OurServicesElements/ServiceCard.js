import React from 'react';
import styled from 'styled-components';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <Card>
      {icon && <Icon src={icon} alt={title} />}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

// Styled components
const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #333;
`;

const Description = styled.p`
  font-size: 0.9em;
  color: #666;
`;

export default ServiceCard;
