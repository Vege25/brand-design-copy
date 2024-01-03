import React, { useState } from 'react';
import NavDownBar from './navDownBar';

const NavigationXl: React.FC = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  return (
    <>
      <nav className='hidden h-20 m-0 bg-white z-1 2xl:mx-auto xl:block 2xl:w-3/4'>
        <div className='flex items-center justify-start h-full px-4'>
          <div className=' w-44 mr-14'>
            <a href='#' className='relative inline-block w-full cursor-pointer'>
              <img
                src='../src/assets/logo.png'
                className='inline-block w-full h-auto'
                alt='Samsung logo'
              />
            </a>
          </div>
          <div className='relative inline-flex items-center justify-between w-full h-full'>
            <ul className='w-full h-full'>
              <ul className='w-full h-full'>
                <li
                  id='navItemOsta'
                  className={`relative inline-flex items-center justify-start h-full nav-item group ${
                    isHovered === 'Osta'
                      ? 'group-hover:bg-black group-hover:text-white group-hover:rounded-full'
                      : ''
                  }`}
                  onMouseEnter={() => setIsHovered('Osta')}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <button className='px-2 py-1 text-sm'>Osta</button>
                  <NavDownBar content='Osta' />
                </li>

                <li
                  id='navItemMobiili'
                  className={`relative inline-flex items-center justify-start h-full nav-item group ${
                    isHovered === 'Mobiili'
                      ? 'group-hover:bg-black group-hover:text-white group-hover:rounded-full'
                      : ''
                  }`}
                  onMouseEnter={() => setIsHovered('Mobiili')}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <button className='px-2 py-1 text-sm'>Mobiili</button>
                  <NavDownBar content='Mobiili' />
                </li>

                <li
                  id='navItemTvAv'
                  className={`relative inline-flex items-center justify-start h-full nav-item group ${
                    isHovered === 'TV & AV'
                      ? 'group-hover:bg-black group-hover:text-white group-hover:rounded-full'
                      : ''
                  }`}
                  onMouseEnter={() => setIsHovered('TV & AV')}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <button className='px-2 py-1 text-sm'>TV & AV</button>
                  <NavDownBar content='TV & AV' />
                </li>

                <li
                  id='navItemKotiKodinkoneet'
                  className={`relative inline-flex items-center justify-start h-full nav-item group ${
                    isHovered === 'Koti & kodinkoneet'
                      ? 'group-hover:bg-black group-hover:text-white group-hover:rounded-full'
                      : ''
                  }`}
                  onMouseEnter={() => setIsHovered('Koti & kodinkoneet')}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <button className='px-2 py-1 text-sm'>
                    Koti & kodinkoneet
                  </button>
                  <NavDownBar content='Koti & kodinkoneet' />
                </li>

                <li
                  id='navItemTietokoneet'
                  className={`relative inline-flex items-center justify-start h-full nav-item group ${
                    isHovered === 'Tietokoneet'
                      ? 'group-hover:bg-black group-hover:text-white group-hover:rounded-full'
                      : ''
                  }`}
                  onMouseEnter={() => setIsHovered('Tietokoneet')}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <button className='px-2 py-1 text-sm'>Tietokoneet</button>
                  <NavDownBar content='Tietokoneet' />
                </li>

                <li
                  id='navItemNaytot'
                  className={`relative inline-flex items-center justify-start h-full nav-item group ${
                    isHovered === 'Näytöt'
                      ? 'group-hover:bg-black group-hover:text-white group-hover:rounded-full'
                      : ''
                  }`}
                  onMouseEnter={() => setIsHovered('Näytöt')}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <button className='px-2 py-1 text-sm'>Näytöt</button>
                  <NavDownBar content='Näytöt' />
                </li>

                <li
                  id='navItemLisatarvikkeet'
                  className={`relative inline-flex items-center justify-start h-full nav-item group ${
                    isHovered === 'Lisätarvikkeet'
                      ? 'group-hover:bg-black group-hover:text-white group-hover:rounded-full'
                      : ''
                  }`}
                  onMouseEnter={() => setIsHovered('Lisätarvikkeet')}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <button className='px-2 py-1 text-sm'>Lisätarvikkeet</button>
                </li>

                <li
                  id='navItemSmartThings'
                  className={`relative inline-flex items-center justify-start h-full nav-item group ${
                    isHovered === 'SmartThings'
                      ? 'group-hover:bg-black group-hover:text-white group-hover:rounded-full'
                      : ''
                  }`}
                  onMouseEnter={() => setIsHovered('SmartThings')}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <button className='px-2 py-1 text-sm'>SmartThings</button>
                </li>
              </ul>
            </ul>
          </div>
          <div className='relative flex items-start justify-end h-full p-4'>
            <div className='relative inline-flex items-center justify-start h-full'>
              <div className='relative inline-flex items-center justify-start h-full'>
                <button className='w-10'>
                  <i className='text-xl fa-solid fa-magnifying-glass'></i>
                </button>
              </div>
              <div className='relative inline-flex items-center justify-start h-full'>
                <button className='w-10'>
                  <i className='text-xl fa-solid fa-cart-shopping'></i>
                </button>
              </div>
              <div className='relative inline-flex items-center justify-start h-full'>
                <button className='w-10'>
                  <i className='text-xl fa-regular fa-user'></i>
                </button>
              </div>
            </div>
          </div>
          <div className='fixed group-hover:visible'></div>
        </div>
      </nav>
      {isHovered && (
        <div
          id='blurBg'
          className='fixed w-full h-screen bg-black opacity-70 z-100 top-20'
        ></div>
      )}
    </>
  );
};

export default NavigationXl;
