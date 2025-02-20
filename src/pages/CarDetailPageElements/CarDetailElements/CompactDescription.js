import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp, FaTruck, FaUserFriends, FaWeightHanging } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { useTranslation } from 'react-i18next';

const CompactDescription = ({ car }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const [ref, { height: viewHeight }] = useMeasure();

  const expandAnimation = useSpring({
    height: isExpanded ? viewHeight : 0,
    opacity: isExpanded ? 1 : 0,
    overflow: 'hidden',
    config: { tension: 250, friction: 20 },
  });

  const icons = [
    <YellowIcon as={FaTruck} />,
    <YellowIcon as={FaUserFriends} />,
    <YellowIcon as={FaWeightHanging} />,
  ];

  const namespaceMap = {
    1: 'renaultMascottSingle',
    2: 'renaultMascottDouble',
    // Add more car mappings as needed
  };

  const namespace = namespaceMap[car.id] || 'unknownCar';

  return (
    <DescriptionContainer>
      <Title>{t(car.name)}</Title>
      <SpecsList>
        {car.specs.slice(0, 3).map((spec, index) => (
          <SpecItem key={index}>
            <IconContainer>{icons[index]}</IconContainer>
            <SpecContent>
              <SpecTitle>{t(`cars.${namespace}.specs.${spec.name}.label`)}:</SpecTitle>
              <SpecValue>{t(`cars.${namespace}.specs.${spec.name}.value`)}</SpecValue>
            </SpecContent>
          </SpecItem>
        ))}
      </SpecsList>

      <AnimatedFullDescription style={expandAnimation}>
        <div ref={ref}>
          <DescriptionText>{t(car.description)}</DescriptionText>
          <SpecsTable>
            <tbody>
              {car.specs.slice(3).map((spec, index) => (
                <TableRow key={index}>
                  <TableCellTitle>{t(`cars.${namespace}.specs.${spec.name}.label`)}</TableCellTitle>
                  <TableCellValue>{t(`cars.${namespace}.specs.${spec.name}.value`)}</TableCellValue>
                </TableRow>
              ))}
            </tbody>
          </SpecsTable>
        </div>
      </AnimatedFullDescription>

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
  transition: all 0.8s ease;
  max-width: 60dvw;

  /* Allow space for expanded content */
  overflow: visible;

  @media (max-width: 1105px) {
    padding: 15px;
    max-width: 80dvw;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5em;

  @media (max-width: 1105px) {
    font-size: 22px;
    margin-bottom: 1em;
  }
`;

const SpecsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (max-width: 1105px) {
    gap: 0.8em;
  }
`;

const SpecItem = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 0;
  font-size: 1.2em;

  @media (max-width: 1105px) {
    font-size: 1em;
  }
`;

const IconContainer = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 1105px) {
    margin-right: 8px;
  }
`;

const YellowIcon = styled.div`
  color: black; /* Yellow color */
  font-size: 1.8em;
  border: 2px solid black; /* Black border */
  border-radius: 50%; /* Circular border */
  padding: 4px; /* Padding inside border */

  @media (max-width: 1105px) {
    font-size: 1.5em;
    padding: 3px;
  }
`;
 const SpecContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
`;

const SpecTitle = styled.span`
  font-weight: bold;
  color: #333;
`;

const SpecValue = styled.span`
  color: #666;
  text-align: right;
`;
const AnimatedFullDescription = styled(animated.div)`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  padding: 10px; /* Add padding for better spacing */
  color: #333;
  line-height: 1.6;
  overflow: visible; /* Ensure content is not clipped */
  word-wrap: break-word; /* Handle long words */

  @media (max-width: 1105px) {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 8px; /* Adjust padding for smaller screens */
  }
`;

const DescriptionText = styled.p`
  margin-bottom: 1em;

  @media (max-width: 1105px) {
    margin-bottom: 0.8em;
  }
`;

const SpecsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 1105px) {
    font-size: 0.9em;
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCellTitle = styled.td`
  font-weight: bold;
  padding: 8px;
  color: #333;
  width: 50%;

  @media (max-width: 1105px) {
    padding: 6px;
  }
`;

const TableCellValue = styled.td`
  padding: 8px;
  color: #666;
  text-align: right;

  @media (max-width: 1105px) {
    padding: 6px;
  }
`;

const ExpandButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  color: #3085d6;
  cursor: pointer;
  transition: color 0.3s;
  margin-top: 2dvh;

  &:hover {
    color: #1a6bbf;
  }

  @media (max-width: 1105px) {
    font-size: 1em;
  }
`;


export default CompactDescription;
