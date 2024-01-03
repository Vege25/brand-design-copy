import React from 'react';
interface Content {
  content:
    | 'Osta'
    | 'Mobiili'
    | 'TV & AV'
    | 'Koti & kodinkoneet'
    | 'Tietokoneet'
    | 'Näytöt'
    | 'Lisätarvikkeet'
    | 'SmartThings'
    | string;
}
const NavDownBar: React.FC<Content> = (content) => {
  let dropDownTitle1 = '';
  const dropDownContent1: string[] = [];
  let dropDownTitle2 = '';
  const dropDownContent2: string[] = [];
  switch (content.content) {
    case 'Osta':
      dropDownTitle1 = 'Tarjoukset';
      dropDownTitle2 = 'Osta fiksusti';
      dropDownContent1.push('Kaikki tarjoukset');
      dropDownContent1.push('Lunasta tarjous');
      dropDownContent1.push('Tilaa uutiskirje');
      dropDownContent2.push('Osta fiksusti');
      dropDownContent2.push('Vaihda vanha puhelimesi');
      dropDownContent2.push('Samsung Care+');
      break;
    case 'Mobiili':
      dropDownTitle1 = 'Puhelimet';
      dropDownTitle2 = 'Tabletit';
      dropDownContent1.push('Galaxy S');
      dropDownContent1.push('Galaxy Z');
      dropDownContent1.push('Galaxy A');
      dropDownContent2.push('Galaxy Tab S');
      dropDownContent2.push('Galaxy Tab A');
      dropDownContent2.push('Vertaa');
      break;
    case 'TV & AV':
      dropDownTitle1 = 'TVs';
      dropDownTitle2 = 'Ääni';
      dropDownContent1.push('Kaikki TV:t');
      dropDownContent1.push('TV 2023');
      dropDownContent1.push('QLED');
      dropDownContent2.push('Koe Ääni');
      dropDownContent2.push('Premium Soundbar');
      dropDownContent2.push('Ultra Slim Soundbar');
      break;
    case 'Koti & kodinkoneet':
      dropDownTitle1 = 'Suositellut';
      dropDownTitle2 = 'Jääkaapit ja pakastimet';
      dropDownContent1.push('Tutustu kodinkoneet');
      dropDownContent1.push('Energiatehokkaat laitteet');
      dropDownContent1.push('SmartThings Home');
      dropDownContent2.push('French Door');
      dropDownContent2.push('Jääkaappipakastimet');
      dropDownContent2.push('Side by Side');
      break;
    case 'Tietokoneet':
      dropDownTitle1 = 'Galaxy Book';
      dropDownTitle2 = 'Galaxy Book koon mukaan';
      dropDownContent1.push('Galaxy Book3 Ultra');
      dropDownContent1.push('Galaxy Book3 Pro');
      dropDownContent1.push('Galaxy Book3 360');
      dropDownContent2.push('15" - 16"');
      dropDownContent2.push('13" - 14.9"');
      dropDownContent2.push('11" - 12.9"');
      break;
    case 'Näytöt':
      dropDownTitle1 = 'Suositellut';
      dropDownTitle2 = 'Näytöt';
      dropDownContent1.push('Näin valitset näytön');
      dropDownContent1.push('Miksi smart näyttö?');
      dropDownContent1.push('Odyssey tietoja');
      dropDownContent2.push('Tutustu näyttöihin');
      dropDownContent2.push('Pelinäytöt');
      dropDownContent2.push('Smart näytöt');
      break;
    default:
      break;
  }
  return (
    <div className='absolute left-0 z-10 invisible h-40 p-4 pt-1 overflow-hidden bg-white z-2 top-20 rounded-b-3xl group-hover:visible'>
      <div className='flex items-stretch justify-start bg-white'>
        <div className='relative w-32 py-2 mr-4'>
          <div>
            <h3 className='font-bold cursor-default text-nowrap'>
              {dropDownTitle1}
            </h3>
          </div>
          <ul className='flex flex-col items-start justify-start'>
            <li>
              <a href='#' className='py-2 text-xs cursor-pointer text-nowrap'>
                {dropDownContent1[0]}
              </a>
            </li>
            <li>
              <a href='#' className='py-2 text-xs cursor-pointer text-nowrap'>
                {dropDownContent1[1]}
              </a>
            </li>
            <li>
              <a href='#' className='py-2 text-xs cursor-pointer text-nowrap'>
                {dropDownContent1[2]}
              </a>
            </li>
          </ul>
        </div>
        <div className='relative py-2 mr-4'>
          <div>
            <h3 className='font-bold cursor-default text-nowrap'>
              {dropDownTitle2}
            </h3>
          </div>
          <ul className=''>
            <li>
              <a href='#' className='py-2 text-xs cursor-pointer text-nowrap'>
                {dropDownContent2[0]}
              </a>
            </li>
            <li>
              <a href='#' className='py-2 text-xs cursor-pointer text-nowrap'>
                {dropDownContent2[1]}
              </a>
            </li>
            <li>
              <a href='#' className='py-2 text-xs cursor-pointer text-nowrap'>
                {dropDownContent2[2]}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavDownBar;
