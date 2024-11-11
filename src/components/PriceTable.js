import React from 'react';
import styled from 'styled-components';

const PriceTable = ({ priceRanges }) => {
  return (
    <TableWrapper>
      <Deposit>Kauce (Deposit): 15 000 Kč</Deposit>
      <StyledTable>
        <div className="header">Rental Duration</div>
        <div className="header">Cena bez DPH</div>
        <div className="header">Cena s DPH</div>
        {priceRanges.map((price, index) => (
          <React.Fragment key={index}>
            <div className="cell">{price.description}</div>
            <div className="cell">{price.withoutTax}</div>
            <div className="cell">{price.withTax}</div>
          </React.Fragment>
        ))}
      </StyledTable>
    </TableWrapper>
  );
};

// Styled components for the table
const TableWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Deposit = styled.div`
  font-size: 1.2em;
  margin-bottom: 20px;
  padding: 12px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StyledTable = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1em;
  width: 100%;
  text-align: center;

  .header {
    background-color: #f4f4f4;
    padding: 10px 8px;
    text-align: center;
    font-weight: 600;
    border: 1px solid #ddd;
  }

  .cell {
    padding: 10px 8px;
    border: 1px solid #ddd;
    text-align: center;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr; /* Ensuring 3 equal columns */
    
    /* Adjust long cells to appear correctly */
    .cell:nth-child(3n) {
        grid-column: span 3; /* Make the third column span across on mobile */
    }

    .cell:nth-child(3n) {
        grid-column: span 1; /* Ensuring second cell takes two columns */
    }
}

`;

export default PriceTable;
