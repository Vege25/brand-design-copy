import React from 'react';

interface discountProps {}

const Discounts: React.FC<discountProps> = () => {
  return (
    <section className='w-full p-4 mt-1 h-96' style={{ height: '50vw' }}>
      <div className='flex flex-row items-center w-full h-full gap-6'>
        <div className='flex flex-col items-center justify-center w-1/4 h-full gap-6'>
          <div className='w-full bg-gray-100 rounded-2xl h-1/2'>
            <div className='w-full h-2/3'>
              <img
                className='py-8 m-auto rounded-2xl'
                src='https://images.samsung.com/is/image/samsung/assets/fi/home/S.com_WinterOffers_MerchTileSmall_SMP192_PC_160x160.png?$160_160_PNG$'
              ></img>
            </div>
            <div className='m-auto text-center h-1/3'>
              <p className='mb-4 text-lg font-bold'>Galaxy S23</p>
              <span className='text-xs'>100€ lisäalennusta vaihdossa</span>
            </div>
          </div>
          <div
            className='w-full rounded-2xl h-1/2'
            style={{
              backgroundImage:
                'url("https://images.samsung.com/is/image/samsung/assets/fi/homepage/Wash_S.com_Homepage_MerchTile_SmallFullBleed_Desktop_330x330.jpg?$330_330_JPG$")',
            }}
          >
            <div className='relative w-full h-full'>
              <div className='absolute bottom-0 w-full h-2/5'>
                <div className='w-full pt-4 m-auto text-center text-white'>
                  <p className='text-lg'>Luo oma pakettitarjouksesi!</p>
                  <span className='text-xs' style={{ lineHeight: '0.33' }}>
                    Osta kaksi kodinkonetta – saat 20 % alennusta koko
                    ostoksesta
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-2/4 h-full'>
          <div
            className='w-full h-full rounded-2xl'
            style={{
              backgroundImage:
                'url("https://images.samsung.com/is/image/samsung/assets/fi/home/S23FE_S.com_Homepage_MerchTile_Large_Desktop_684x684.jpg?$684_684_JPG$")',
            }}
          >
            <div className='relative w-full h-full'>
              <div className='absolute bottom-0 w-full h-2/5'>
                <div className='relative w-full h-full'>
                  <div className='absolute w-full m-auto text-center text-black t-4 bottom-8'>
                    <p className='text-xl font-bold'>Galaxy S23 FE</p>
                    <div className='w-1/2 m-auto mt-4'>
                      <span className='text-sm ' style={{ lineHeight: '0.33' }}>
                        Langattomat Galaxy Buds2 -kuulokkeet (arvo n. 149 €)
                        kaupan päälle
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-1/4 h-full gap-6'>
          <div className='w-full bg-gray-100 rounded-2xl h-1/2'>
            <div className='w-full h-2/3'>
              <img
                className='py-8 m-auto rounded-2xl'
                src='https://images.samsung.com/is/image/samsung/assets/fi/homepage/TV_Frame_160px_01.12.png?$160_160_PNG$'
              ></img>
            </div>
            <div className='m-auto text-center h-1/3'>
              <p className='mb-4 text-lg font-bold'>56 % alennus</p>
              <span className='text-xs'>Talvitarjouksia televisiosta</span>
            </div>
          </div>
          <div className='w-full bg-gray-100 rounded-2xl h-1/2'>
            <div className='w-full h-2/3'>
              <img
                className='py-8 m-auto rounded-2xl'
                src='https://images.samsung.com/is/image/samsung/assets/fi/home/S.com_WinterOffers_MerchTileSmall_IT_PC_160x160.png?$160_160_PNG$'
              ></img>
            </div>
            <div className='m-auto text-center h-1/3'>
              <p className='mb-4 font-bold text-md'>
                Jopa 600 € alennus näytöistä valikoiduista näytöistä
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
