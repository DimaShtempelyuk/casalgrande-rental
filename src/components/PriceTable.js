import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const PriceTable = ({ carId, priceRanges }) => {
  const { t } = useTranslation();

  // Lookup map for translation namespaces
  const namespaceMap = {
    1: 'renaultMascottSingle',
    2: 'renaultMascottDouble',
    // Add more mappings for new cars
  };

  const namespace = namespaceMap[carId] || 'unknownCar';

  return (
    <TableWrapper>
      <Deposit>{t('deposit')}: 15 000 Kč</Deposit>
      <StyledTable>
        <div className="header">{t('rentalDuration')}</div>
        <div className="header">{t('priceWithoutTax')}</div>
        <div className="header">{t('priceWithTax')}</div>
        {priceRanges.map((price, index) => (
          <React.Fragment key={index}>
            <div className={`cell ${price.isHot ? 'highlight' : ''}`}>
              <strong>{t(`cars.${namespace}.priceRanges.${price.name}.label`)}</strong>
              <br />
              {t(`cars.${namespace}.priceRanges.${price.name}.value`)}
            </div>
            <div className={`cell ${price.isHot ? 'highlight' : ''}`}>
              <strong style={{ fontWeight: 'bold' }}>{price.withoutTax}</strong>
            </div>
            <div className={`cell ${price.isHot ? 'highlight fire-cell' : ''}`}>
              <strong style={{ fontWeight: 'bold' }}>{price.withTax}</strong>
            </div>
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
  font-weight: 500;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StyledTable = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1em;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;

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
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 204, 0, 0.5);
    }
  }

  .highlight {
    background-color: rgba(255, 140, 0, 0.15); /* Adjusted to a more orange tone */
    border: 2px solid rgb(255, 171, 68);
    font-weight: bold;
  }
    position: relative;

    &::after {
      content: '🔥';
      position: absolute;
      top:30%;
      left: 29%;
      font-size: 2em; /* Larger fire emoji */
    }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;

    .cell:nth-child(3n) {
      grid-column: span 3;
    }
  }
`;



export default PriceTable;
