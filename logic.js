window.addEventListener(
  'DOMContentLoaded',
  init
);

function init () {
  window.removeEventListener(
    'DOMContentLoaded',
    init
  );

  const servicesTab = document.body.querySelector('.service');
  const solutionsTab = document.body.querySelector('.solution');

  const services = document.body.querySelector('.services');
  const solutions = document.body.querySelector('.solutions');

  const country = document.body.querySelector('#country-select');
  const capitol = document.body.querySelector('.capitol-select');
  const capitolWrapper = document.body.querySelector('.capitol-wrapper');

  servicesTab.addEventListener('click', function (e) {
    services.dataset.status = 'show';
    solutions.dataset.status = 'noShow';

    servicesTab.dataset.active = 'true';
    solutionsTab.dataset.active = 'false';
  });

  solutionsTab.addEventListener('click', function (e) {
    services.dataset.status = 'noShow';
    solutions.dataset.status = 'show';

    servicesTab.dataset.active = 'false';
    solutionsTab.dataset.active = 'true';
  });

  country.addEventListener('change', function(e) {
    const capitolName = data[e.target.value];
    capitolWrapper.classList.remove('hidden');
    capitol.innerHTML = `
      <option>${capitolName}</option>
    `;
  });
}


  const data = {
    AF: 'Kabul',
    AL: 'Tirana',
    DZ: 'Algiers',
    AD: 'Andorra la Vella',
    AO: 'Luanda',
    AG: 'Saint John',
    AR: 'Buenos Aires',
    AM: 'Yerevan',
    AU: 'Canberra',
    AT: 'Vienna',
    AZ: 'Baku',
    BS: 'Nassau',
    BH: 'Manama',
    BD: 'Dhaka',
    BB: 'Bridgetown',
    BY: 'Minsk',
    BE: 'Brussels',
    BZ: 'Belmopan',
    BJ: 'Porto-Novo',
    BT: 'Thimphu',
    BO: 'La Paz, Sucre',
    BA: 'Sarajevo',
    BW: 'Gaborone',
    BR: 'Brasilia',
    BN: 'Bandar Seri Begawan',
    BG: 'Sofia',
    BF: 'Ouagadougou',
    BI: 'Bujumbura',
    KH: 'Phnom Penh',
    CM: 'Yaounde',
    CA: 'Ottawa',
    CV: 'Praia',
    CF: 'Bangui',
    TD: 'Djamena',
    CL: 'Santiago',
    CN: 'Beijing',
    CO: 'Bogota',
    KM: 'Moroni',
    CD: 'Brazzaville',
    CR: 'San Jose',
    HR: 'Zagreb',
    CU: 'Havana',
    CY: 'Nicosia',
    CZ: 'Prague',
    DK: 'Copenhagen',
    DJ: 'Djibouti',
    DM: 'Roseau',
    DO: 'Santo Domingo',
    EC: 'Quito',
    EG: 'Cairo',
    SV: 'San Salvador',
    GQ: 'Malabo',
    ER: 'Asmara',
    EE: 'Tallinn',
    ET: 'Addis Ababa',
    FJ: 'Suva',
    FI: 'Helsinki',
    FR: 'Paris',
    GA: 'Libreville',
    GM: 'Banjul',
    GE: 'Tbilisi',
    DE: 'Berlin',
    GH: 'Accra',
    GR: 'Athens',
    GD: 'Saint Georges',
    GT: 'Guatemala City',
    GN: 'Conakry',
    GW: 'Bissau',
    GY: 'Georgetown',
    HT: 'Port-au-Prince',
    HN: 'Tegucigalpa',
    HU: 'Budapest',
    IS: 'Reykjavik',
    IN: 'New Delhi',
    ID: 'Jakarta',
    IR: 'Tehran',
    IQ: 'Baghdad',
    IE: 'Dublin',
    IL: 'Jerusalem',
    IT: 'Rome',
    JM: 'Kingston',
    JP: 'Tokyo',
    JO: 'Amman',
    KZ: 'Astana',
    KE: 'Nairobi',
    KI: 'Tarawa Atoll',
    KP: 'Pyongyang',
    KR: 'Seoul',
    KW: 'Kuwait City',
    KG: 'Bishkek',
    LA: 'Vientiane',
    LV: 'Riga',
    LB: 'Beirut',
    LS: 'Maseru',
    LR: 'Monrovia',
    LY: 'Tripoli',
    LI: 'Vaduz',
    LT: 'Vilnius',
    LU: 'Luxembourg',
    MK: 'Skopje',
    MG: 'Antananarivo',
    MW: 'Lilongwe',
    MY: 'Kuala Lumpur',
    MV: 'Male',
    ML: 'Bamako',
    MT: 'Valletta',
    MH: 'Majuro',
    MR: 'Nouakchott',
    MU: 'Port Louis',
    MX: 'Mexico City',
    FM: 'Palikir',
    MD: 'Chisinau',
    MC: 'Monaco',
    MN: 'Ulaanbaatar',
    ME: 'Podgorica',
    MA: 'Rabat',
    MZ: 'Maputo',
    MM: 'Rangoon',
    NA: 'Windhoek',
    NP: 'Kathmandu',
    NL: 'Amsterdam',
    NZ: 'Wellington',
    NI: 'Managua',
    NE: 'Niamey',
    NG: 'Abuja',
    NO: 'Oslo',
    OM: 'Muscat',
    PK: 'Islamabad',
    PW: 'Melekeok',
    PA: 'Panama City',
    PG: 'Port Moresby',
    PY: 'Asuncion',
    PE: 'Lima',
    PH: 'Manila',
    PL: 'Warsaw',
    PT: 'Lisbon',
    QA: 'Doha',
    RO: 'Bucharest',
    RU: 'Moscow',
    RW: 'Kigali',
    KN: 'Basseterre',
    LC: 'Castries',
    VC: 'Kingstown',
    SM: 'San Marino',
    ST: 'Sao Tome',
    SA: 'Riyadh',
    SN: 'Dakar',
    RS: 'Belgrade',
    SC: 'Victoria',
    SL: 'Freetown',
    SG: 'Singapore',
    SK: 'Bratislava',
    SI: 'Ljubljana',
    SB: 'Honiara',
    SO: 'Mogadishu',
    ZA: 'Pretoria, Cape Town, Bloemfontein',
    SS: 'Juba',
    ES: 'Madrid',
    LK: 'Colombo Sri Jayewardenepura Kotte',
    SD: 'Khartoum',
    SR: 'Paramaribo',
    SZ: 'Mbabane',
    SE: 'Stockholm',
    CH: 'Bern',
    SY: 'Damascus',
    TW: 'Taipei',
    TJ: 'Dushanbe',
    TZ: 'Dar es Salaam Dodoma',
    TH: 'Bangkok',
    TG: 'Lome',
    TO: 'Nukualofa',
    TT: 'Port-of-Spain',
    TN: 'Tunis',
    TR: 'Ankara',
    TM: 'Ashgabat',
    TV: 'Vaiaku village, Funafuti province',
    UG: 'Kampala',
    UA: 'Kyiv',
    AE: 'Abu Dhabi',
    GB: 'London',
    US: 'Washington, D.C.',
    UY: 'Montevideo',
    UZ: 'Tashkent',
    VU: 'Port-Vila',
    VE: 'Caracas',
    VN: 'Hanoi',
    YE: 'Sanaa',
    ZM: 'Lusaka',
    ZW: 'Harare',
  }
