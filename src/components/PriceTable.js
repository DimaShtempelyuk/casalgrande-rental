import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const PriceTable = ({ carId, priceRanges }) => {
  const { t } = useTranslation();

  // Translation namespace lookup map
  const namespaceMap = {
    1: 'renaultMascottSingle',
    2: 'renaultMascottDouble',
    // Add more mappings for new cars
  };

  const namespace = namespaceMap[carId] || 'unknownCar'; // Resolve namespace dynamically

  // Map priceRanges to categorized ranges based on their names
  const categorizedPriceRanges = [
    {
      key: 'shortTerm',
      label: t(`cars.${namespace}.priceRanges.shortTerm.label`),
      value: t(`cars.${namespace}.priceRanges.shortTerm.value`),
      ranges: priceRanges.filter((price) => price.name === 'shortTerm'),
    },
    {
      key: 'mediumTerm',
      label: t(`cars.${namespace}.priceRanges.mediumTerm.label`),
      value: t(`cars.${namespace}.priceRanges.mediumTerm.value`),
      ranges: priceRanges.filter((price) => price.name === 'mediumTerm'),
    },
    {
      key: 'longTerm',
      label: t(`cars.${namespace}.priceRanges.longTerm.label`),
      value: t(`cars.${namespace}.priceRanges.longTerm.value`),
      ranges: priceRanges.filter((price) => price.name === 'longTerm'),
    },
  ];

  return (
    <>
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
                <strong>{price.withoutTax}</strong>
              </div>
              <div className={`cell ${price.isHot ? 'highlight' : ''}`}>
                <strong>{price.withTax}</strong>
              </div>
            </React.Fragment>
          ))}
        </StyledTable>
      </TableWrapper>

      <MobilePriceTable>
      <Deposit>{t('deposit')}: 15 000 Kč</Deposit>
        {categorizedPriceRanges.map((category) => (
          <div
            key={category.key}
            className={`mobile-row ${
              category.ranges.some((r) => r.isHot) ? 'highlight' : ''
            }`}
          >
            <div className="mobile-header">
              {category.label} <br />({category.value})
              {category.ranges.some((r) => r.isHot) && (
                <span className="fire-icon">🔥</span>
              )}
            </div>
            <div className="mobile-data">
              {category.ranges.map((price, idx) => (
                <div key={idx} className="price-row">
                  <span>{t('priceWithoutTax')}</span>
                  <span className="price-value">{price.withoutTax}</span>
                </div>
              ))}
              {category.ranges.map((price, idx) => (
                <div key={idx} className="price-row">
                  <span>{t('priceWithTax')}</span>
                  <span className="price-value">{price.withTax}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </MobilePriceTable>
    </>
  );
};

// Styled components for the table
// Styled components for the desktop version
const TableWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none; /* Hide the desktop table on mobile devices */
  }
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

  @media (max-width: 768px) {
    margin-top: 2dvh;
  }
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
    padding: 12px 10px; /* More padding for better spacing */
    border: 1px solid #ddd;
    text-align: center;
    font-weight: 500;
    transition: background-color 0.3s ease;
    gap: 5px; /* Space between label and value */

    strong {
      font-size: 1em; /* Label size */
      color: #333; /* Darker label color for contrast */
    }

    span {
      font-size: 0.9em; /* Value size */
      color: #666; /* Softer color for value */
    }

    &:hover {
      background-color: rgba(255, 204, 0, 0.3); /* More visible hover */
    }
  }

  .highlight {
    background-color: rgba(255, 140, 0, 0.15); /* Subtle orange highlight */
    border: 2px solid rgb(255, 171, 68);
    font-weight: bold;
  }position: relative;

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


// Styled components for the mobile version
const MobilePriceTable = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 95%;
    gap : 5px;
    margin-bottom: 10px;
  }

  .mobile-row {
    margin-bottom: 10px;
    padding: 10px;
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    }

    &.highlight {
      background-color: rgba(255, 240, 220, 1);
      border: 1px solid rgb(255, 171, 68);
    }

    .mobile-header {
      font-weight: bold;
      font-size: 1em;
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;

      .fire-icon {
        font-size: 1.2em;
        color: rgba(255, 87, 51, 1);
      }
    }

    .mobile-data {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .price-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.9em;
        color: #555;

        .price-value {
          font-size: 1em;
          font-weight: bold;
          color: #000;
        }
      }
    }
  }
`;
export default PriceTable;
