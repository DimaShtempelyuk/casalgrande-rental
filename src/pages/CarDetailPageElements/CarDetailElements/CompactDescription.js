import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp, FaTruck, FaUserFriends, FaWeightHanging } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';

const CompactDescription = ({ car }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // useMeasure to get the height of the full description
  const [ref, { height: viewHeight }] = useMeasure();

  // Animation for the expand/collapse
  const expandAnimation = useSpring({
    height: isExpanded ? viewHeight : 0,
    opacity: isExpanded ? 1 : 0,
    overflow: 'hidden',
    config: { tension: 250, friction: 20 },
  });

  const icons = [
    <YellowIcon as={FaTruck} />,
    <YellowIcon as={FaUserFriends} />,
    <YellowIcon as={FaWeightHanging} />
  ];

  return (
    <DescriptionContainer>
      <Title>{car.name}</Title>
      <SpecsList>
        {car.specs.slice(0, 3).map((spec, index) => (
          <SpecItem key={index}>
            <IconContainer>{icons[index]}</IconContainer>
            <SpecContent>
              <SpecTitle>{spec.title}:</SpecTitle>
              <SpecValue>{spec.value}</SpecValue>
            </SpecContent>
          </SpecItem>
        ))}
      </SpecsList>

      {/* Animated section for full description with table layout */}
      <AnimatedFullDescription style={expandAnimation}>
        <div ref={ref}>
          <DescriptionText>{car.description}</DescriptionText>
          <SpecsTable>
            <tbody>
              {car.specs.slice(3).map((spec, index) => (
                <TableRow key={index}>
                  <TableCellTitle>{spec.title}</TableCellTitle>
                  <TableCellValue>{spec.value}</TableCellValue>
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
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5em;
`;

const SpecsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const SpecItem = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 0;
  font-size: 1.2em;
`;

const IconContainer = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const YellowIcon = styled.div`
  color: black; /* Yellow color */
  font-size: 1.8em;
  border: 2px solid black; /* Black border */
  border-radius: 50%; /* Circular border */
  padding: 4px; /* Padding inside border */
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
  color: #333;
  line-height: 1.6;
`;

const DescriptionText = styled.p`
  margin-bottom: 1em;
`;

const SpecsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCellTitle = styled.td`
  font-weight: bold;
  padding: 8px;
  color: #333;
  width: 50%;
`;

const TableCellValue = styled.td`
  padding: 8px;
  color: #666;
  text-align: right;
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
`;

export default CompactDescription;
