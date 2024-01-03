import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className=' bg-white flex z-50 h-14 items-center justify-start xl:hidden'>
      <div className='ml-4 mr-0 w-32'>
        <a href='#' className='w-full inline-block relative cursor-pointer'>
          <img
            src='../src/assets/logo.png'
            className='w-full h-auto inline-block'
            alt='Samsung logo'
          />
        </a>
      </div>
      <div className='flex items-start relative w-full h-full p-4 justify-end'>
        <div className='inline-flex justify-start items-center h-full relative'>
          <div className='h-full relative items-center inline-flex justify-start'>
            <button className='w-10'>
              <i className='fa-solid fa-magnifying-glass text-xl'></i>
            </button>
          </div>
          <div className='h-full relative items-center inline-flex justify-start'>
            <button className='w-10'>
              <i className='fa-solid fa-cart-shopping text-xl'></i>
            </button>
          </div>
          <div className='h-full relative items-center inline-flex justify-start'>
            <button className='w-10'>
              <i className='fa-regular fa-user text-xl'></i>
            </button>
          </div>
          <div className='h-full relative items-center inline-flex justify-start'>
            <button className='w-10'>
              <i className='fa-solid fa-bars text-xl'></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
