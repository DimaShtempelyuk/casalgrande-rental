// src/data/carData.js
import RenaultMascott3_1 from '../assets/images/RenaultMascott3/RenaMasc3_1.jpg'
import RenaultMascott3_2 from '../assets/images/RenaultMascott3/RenaMasc3_2.jpg'
import RenaultMascott3_3 from '../assets/images/RenaultMascott3/RenaMasc3_3.jpg'
import Renault2_3 from '../assets/images/Renault2/Ren_2_3.jpg'
import Renault2_4 from '../assets/images/Renault2/Ren_2_4.jpg'

export const cars = [
  {
    id: 1,
    name: 'cars.renaultMascottSingle.name', // Still a key for translation
    images: [
      RenaultMascott3_1,
      RenaultMascott3_2,
      RenaultMascott3_3,
    ],
    description: 'cars.renaultMascottSingle.description', // Still a key for translation
    specs: [
      { name: 'vehicleType' }, // Only the key is needed
      { name: 'seatingCapacity' },
      { name: 'grossWeight' },
      { name: 'payload' },
      { name: 'totalLength' },
      { name: 'totalWidth' },
      { name: 'totalHeight' },
      { name: 'operatingWeight' },
      { name: 'towingCapacity' },
      { name: 'fuel' },
      { name: 'airConditioning' },
      { name: 'airbags' },
      { name: 'note' },
    ],
    priceRanges: [
      { name: 'shortTerm', withoutTax: '1 200,00 Kč', withTax: '1 452,00 Kč' },
      { name: 'daily', withoutTax: '2 890,00 Kč', withTax: '3 497,00 Kč' },
      { name: 'mediumTerm', withoutTax: '2 360,00 Kč', withTax: '2 856,00 Kč',isHot: true },
      { name: 'longTerm', withoutTax: '42 600,00 Kč', withTax: '51 546,00 Kč', isLargePrice: true },
      { name: 'weekend', withoutTax: '4 900,00 Kč', withTax: '5 929,00 Kč' },
      { name: 'extraMileage', withoutTax: '2,50 Kč/km', withTax: '3,00 Kč/km' },
    ],
  },
  
  {
    id: 2,
    name: 'cars.renaultMascottDouble.name', 
    images: [
      Renault2_3,
      Renault2_4,
    ],
    description: 'cars.renaultMascottDouble.description', 
    specs: [
      { name: 'vehicleType' }, 
      { name: 'seatingCapacity' },
      { name: 'payload' },
      { name: 'totalLength' },
      { name: 'totalWidth' },
      { name: 'totalHeight' },
      { name: 'operatingWeight' },
      { name: 'grossWeight' },
      { name: 'towingCapacity' },
      { name: 'fuel' },
      { name: 'airConditioning' },
      { name: 'airbags' },
      { name: 'note' },
    ],
    priceRanges: [
      { name: 'shortTerm', withoutTax: '1 200,00 Kč', withTax: '1 452,00 Kč' },
      { name: 'daily', withoutTax: '2 890,00 Kč', withTax: '3 497,00 Kč' },
      { name: 'mediumTerm', withoutTax: '2 360,00 Kč', withTax: '2 856,00 Kč', isHot: true },
      { name: 'longTerm', withoutTax: '42 600,00 Kč', withTax: '51 546,00 Kč', isLargePrice: true },
      { name: 'weekend', withoutTax: '4 900,00 Kč', withTax: '5 929,00 Kč' },
      { name: 'extraMileage', withoutTax: '2,50 Kč/km', withTax: '3,00 Kč/km' },
    ],
  },
];

  