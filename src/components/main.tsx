import React from 'react';
import TabNav from './navigations/tabNav';
import Discounts from './discounts';
import Carousel from './carousel';
import Adverts from './adverts';

const Main: React.FC = () => {
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
    <main>
      <Carousel />
      <section>
        <div className='pt-10 mb-6'>
          <h2 className='mx-2 text-3xl font-bold text-center sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl'>
            Ajankohtaiset tarjoukset ja tuotteet
          </h2>
        </div>
      </section>
      <section className='w-full'>
        <div className='w-full'>
          <div className='tab '>
            <ul className='flex items-center justify-center gap-10'>
              <TabNav
                onClick={handleTabClick}
                active={true}
                name='Valikoidut'
              />
              <TabNav
                onClick={handleTabClick}
                active={false}
                name='Mobiili & tabletit'
              />
              <TabNav onClick={handleTabClick} active={false} name='TV & AV' />
              <TabNav
                onClick={handleTabClick}
                active={false}
                name='Kodinkoneet'
              />
              <TabNav
                onClick={handleTabClick}
                active={false}
                name='Kellot & lisätarvikkeet'
              />
              <TabNav
                onClick={handleTabClick}
                active={false}
                name='Näytöt & PC:t'
              />
            </ul>
          </div>
        </div>
      </section>
      <Discounts />
      <Adverts />
    </main>
  );
};

export default Main;
