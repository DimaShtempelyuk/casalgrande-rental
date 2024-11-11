import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CompactDescription = ({ car }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <DescriptionContainer>
      <Title>{car.name}</Title>
      <SpecsList>
        {car.specs.slice(0, 3).map((spec, index) => (
          <SpecItem key={index}>
            <SpecTitle>{spec.title}:</SpecTitle>
            <SpecValue>{spec.value}</SpecValue>
          </SpecItem>
        ))}
      </SpecsList>

      {isExpanded && (
        <FullDescription>
          <p>{car.description}</p>
          <FullSpecsList>
            {car.specs.slice(3).map((spec, index) => (
              <SpecItem key={index}>
                <SpecTitle>{spec.title}:</SpecTitle>
                <SpecValue>{spec.value}</SpecValue>
              </SpecItem>
            ))}
          </FullSpecsList>
        </FullDescription>
      )}

      <ExpandButton onClick={toggleExpand}>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </ExpandButton>
    </DescriptionContainer>
  );
};

// Styled components
const DescriptionContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5em;
`;

const SpecsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const FullSpecsList = styled(SpecsList)`
  margin-top: 1.5em;
`;

const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
  font-size: 1.1em;
`;

const SpecTitle = styled.span`
  font-weight: bold;
  color: #333;
  margin-right: 10px;
`;

const SpecValue = styled.span`
  color: #666;
  text-align: right;
`;

const FullDescription = styled.div`
  margin-top: 1.5em;
  color: #333;
  line-height: 1.6;
  p {
    margin-bottom: 1em;
  }
`;

const ExpandButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  font-size: 1.2em;
  color: #3085d6;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1a6bbf;
  }
`;

export default CompactDescription;
