import React from 'react';
import TabNav from './navigations/tabNav';

const Adverts: React.FC = () => {
  const handleTabClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const tabs = document.querySelectorAll('#tabNavLine');
    // Add hidden class to all tabs
    tabs.forEach((tab) => {
      if (tab.classList.contains('hidden') === false) {
        // Remove hidden class from clicked tab
        event.currentTarget.classList.remove('hidden');
      } else {
        tab.classList.add('hidden');
      }
    });
  };
  return (
    <>
      <section className='mt-6 bg-gray-100'>
        <div>
          <div className='pt-12 mb-4'>
            <h2 className='mx-2 text-3xl font-bold tracking-tight text-center sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl'>
              Mobiili
            </h2>
          </div>
        </div>
        <div className='w-full'>
          <div className='w-full'>
            <div className='tab '>
              <ul className='flex items-center justify-center gap-10'>
                <TabNav
                  onClick={handleTabClick}
                  active={true}
                  name='Galaxy Z Fold5'
                />
                <TabNav
                  onClick={handleTabClick}
                  active={false}
                  name='Galaxy Z Flip5'
                />
                <TabNav
                  onClick={handleTabClick}
                  active={false}
                  name='Galaxy Watch6 | Watch6 Classic'
                />
                <TabNav
                  onClick={handleTabClick}
                  active={false}
                  name='Galaxy Tab S9 -sarja'
                />
                <TabNav
                  onClick={handleTabClick}
                  active={false}
                  name='Samsung Atelier'
                />
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='w-full'>
            <img
              className='block object-cover w-full mx-auto'
              src='https://images.samsung.com/is/image/samsung/assets/fi/2307/home/HOME_Q5_MX-KV_1440X810_pc.jpg?$1440_810_JPG$'
              alt='Samsung image'
              style={{ height: '30.5rem' }}
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 pb-10'>
          <h2 className='text-5xl font-bold text-black'>Galaxy Z Fold5</h2>
          <div className='flex flex-row items-center justify-center gap-4'>
            <a
              href='#'
              className='text-sm font-bold text-center underline cursor-pointer text-nowrap underline-offset-8'
            >
              Lisätietoja
            </a>
            <button className='px-5 py-2 text-sm font-bold text-white bg-black rounded-full hover:bg-gray-500'>
              Osta nyt
            </button>
          </div>
        </div>
      </section>
      <section
        className='mt-0 bg-center bg-cover'
        style={{
          backgroundImage:
            'url("https://images.samsung.com/is/image/samsung/assets/fi/homepage/TV_Freestyle-2Gen_GBM_1440x810.jpg?$1440_810_JPG$")',
        }}
      >
        <div>
          <div className='pt-12 mb-4'>
            <h2 className='mx-2 text-3xl font-bold tracking-tight text-center text-white sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl'>
              TV & AV
            </h2>
          </div>
        </div>
        <div className='w-full'>
          <div className='w-full'>
            <div className='tab '>
              <ul className='flex items-center justify-center gap-10'>
                <TabNav
                  onClick={handleTabClick}
                  active={true}
                  name='The Freestyle 2ⁿᵈ Gen'
                  white={true}
                />
                <TabNav
                  onClick={handleTabClick}
                  active={false}
                  name='The Frame – Disney100 Edition'
                  white={true}
                />
                <TabNav
                  onClick={handleTabClick}
                  active={false}
                  name='The Freestyle'
                  white={true}
                />
                <TabNav
                  onClick={handleTabClick}
                  active={false}
                  name='Neo QLED'
                  white={true}
                />
                <TabNav
                  onClick={handleTabClick}
                  active={false}
                  name='QLED'
                  white={true}
                />
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='w-full'>
            <div
              className='block object-cover w-full mx-auto'
              style={{ height: '30rem' }}
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 pb-10'>
          <h2 className='text-5xl font-bold text-white'>
            The Freestyle 2<sup>nd</sup> Gen
          </h2>
          <p className='text-white text-md'>
            Seuraavan sukupolven viihdettä. Missä ikinä oletkin.
          </p>
          <div className='flex flex-row items-center justify-center gap-4'>
            <button className='px-5 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-500'>
              Osta nyt
            </button>
          </div>
        </div>
      </section>
      <section
        className='mt-0 bg-center bg-cover'
        style={{
          backgroundImage:
            'url("https://images.samsung.com/is/image/samsung/assets/fi/1_PC_1440x810.jpg?$1440_810_JPG$")',
        }}
      >
        <div>
          <div className='pt-12 mb-4'>
            <h2 className='mx-2 text-3xl font-bold tracking-tight text-center text-white sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl'>
              Koti & kodinkoneet
            </h2>
          </div>
        </div>
        <div className='w-full'>
          <div className='w-full'>
            <div className='tab '>
              <ul className='flex items-center justify-center gap-10'>
                <TabNav
                  onClick={handleTabClick}
                  active={true}
                  name='Kodinkoneet'
                  white={true}
                />
                <TabNav
                  onClick={handleTabClick}
                  active={false}
                  name='EcoBubble'
                  white={true}
                />
                <TabNav
                  onClick={handleTabClick}
                  active={false}
                  name='BESPOKE Jet™ AI'
                  white={true}
                />
                <TabNav
                  onClick={handleTabClick}
                  active={false}
                  name='Bespoke-jääkaapit'
                  white={true}
                />
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='w-full'>
            <div
              className='block object-cover w-full mx-auto'
              style={{ height: '30rem' }}
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 pb-10'>
          <h2 className='text-5xl font-bold text-white'>Kodin keskipiste</h2>
          <div className='flex flex-row items-center justify-center gap-4'>
            <button className='px-5 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-500'>
              Tutustu
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Adverts;
