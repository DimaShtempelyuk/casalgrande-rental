// src/data/carData.js
import RenaultMascott3_1 from '../assets/images/RenaultMascott3/RenaMasc3_1.jpg'
import RenaultMascott3_2 from '../assets/images/RenaultMascott3/RenaMasc3_2.jpg'
import RenaultMascott3_3 from '../assets/images/RenaultMascott3/RenaMasc3_3.jpg'
import Renault2_3 from '../assets/images/Renault2/Ren_2_3.jpg'
import Renault2_4 from '../assets/images/Renault2/Ren_2_4.jpg'

export const cars = [
  {
    id: 1,
    name: 'Renault Mascott 150.65',
    images: [
      RenaultMascott3_1,
      RenaultMascott3_2,
      RenaultMascott3_3,
    ],
    description: 'Těžké nákladní vozidlo ideální pro přepravu těžkých materiálů a průmyslové využití. \n\n Vhodné pro 3 osoby',
    specs: [
      { title: 'Druh vozidla', value: 'Nákladní automobil – nosič kontejneru' },
      { title: 'Počet míst', value: '2 – 3' },
      { title: 'Celková délka vozidla', value: '6404 mm (ložná plocha kontejneru 3240 mm)' },
      { title: 'Celková šířka vozidla', value: '1974 mm (ložná plocha kontejneru 1920 mm)' },
      { title: 'Celková výška vozidla', value: '2623 mm (ložná plocha kontejneru 420 mm)' },
      { title: 'Provozní hmotnost', value: '2358 kg' },
      { title: 'Užitečná hmotnost', value: '1142 kg' },
      { title: 'Celková hmotnost', value: '3500 kg' },
      { title: 'Tažné zařízení', value: 'Nebrzděného 750 kg / brzděného 2800 kg' },
      { title: 'Palivo', value: 'nafta' },
      { title: 'Klimatizace', value: 'ANO' },
      { title: 'Vzduchové vaky', value: 'ANO' },
      { title: 'Poznámka', value: 'Velikost ložné plochy dle typu kontejneru' },
    ],
    priceRanges: [
      { description: '1 – 4 hodiny', withoutTax: '1 200,00 Kč', withTax: '1 452,00 Kč' },
      { description: '1 – 15 dní / 1 den', withoutTax: '2 890,00 Kč', withTax: '3 497,00 Kč' },
      { description: '15 – 30 dní / 1 den', withoutTax: '2 360,00 Kč', withTax: '2 856,00 Kč' },
      { description: 'Dlouhodobý pronájem nad 30 dní (max. 10 000 km)', withoutTax: '42 600,00 Kč', withTax: '51 546,00 Kč', isLargePrice: true },
      { description: 'Víkend (Pá 14 hod až Po 9 hod)', withoutTax: '4 900,00 Kč', withTax: '5 929,00 Kč' },
      { description: 'Při ujetí nad 600 km za 24 hod', withoutTax: '2,50 Kč/km', withTax: '3,00 Kč/km' },
    ],
  }
  ,
  {
    id: 2,
    name: 'Renault Mascott 150.65 (dvojkabina)',
    images: [
      Renault2_3, 
      Renault2_4
    ],
    description: 'Univerzální plochý nákladní vůz vhodný pro přepravu stavebních materiálů a objemného nákladu.\n\n Vhodné pro 6 osob',
    //temp description of a second car
    specs: [
      { title: 'Druh vozidla', value: 'Nákladní automobil – nosič kontejneru' },
      { title: 'Počet míst', value: '6' },
      { title: 'Celková délka vozidla', value: '6404 mm (ložná plocha kontejneru 3240 mm)' },
      { title: 'Celková šířka vozidla', value: '1974 mm (ložná plocha kontejneru 1920 mm)' },
      { title: 'Celková výška vozidla', value: '2623 mm (ložná plocha kontejneru 420 mm)' },
      { title: 'Provozní hmotnost', value: '2358 kg' },
      { title: 'Užitečná hmotnost', value: '1142 kg' },
      { title: 'Celková hmotnost', value: '3500 kg' },
      { title: 'Tažné zařízení', value: 'Nebrzděného 750 kg / brzděného 2800 kg' },
      { title: 'Palivo', value: 'nafta' },
      { title: 'Klimatizace', value: 'ANO' },
      { title: 'Vzduchové vaky', value: 'ANO' },
      { title: 'Poznámka', value: 'Velikost ložné plochy dle typu kontejneru' },
    ],
    priceRanges: [
      { description: '1 – 4 hodiny', withoutTax: '1 200,00 Kč', withTax: '1 452,00 Kč' },
      { description: '1 – 15 dní / 1 den', withoutTax: '2 890,00 Kč', withTax: '3 497,00 Kč' },
      { description: '15 – 30 dní / 1 den', withoutTax: '2 360,00 Kč', withTax: '2 856,00 Kč' },
      { description: 'Dlouhodobý pronájem nad 30 dní (max. 10 000 km)', withoutTax: '42 600,00 Kč', withTax: '51 546,00 Kč', isLargePrice: true },
      { description: 'Víkend (Pá 14 hod až Po 9 hod)', withoutTax: '4 900,00 Kč', withTax: '5 929,00 Kč' },
      { description: 'Při ujetí nad 600 km za 24 hod', withoutTax: '2,50 Kč/km', withTax: '3,00 Kč/km' },
    ],
  },
];

  