import React from 'react';

interface TabNavProps {
  name: string;
  active: boolean;
  white?: boolean;
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const TabNav: React.FC<TabNavProps> = ({ name, active, onClick, white }) => {
  return (
    <li onClick={onClick} className='cursor-pointer tabli'>
      <div className='relative'>
        <button
          className={`font-bold text-md ${white ? 'text-white' : 'text-black'}`}
        >
          {name}
        </button>
        <div
          id='tabNavLine'
          className={`w-full rounded-full h-0.5 ${active ? '' : 'hidden'} ${
            white ? 'bg-white' : 'bg-black'
          }`}
        ></div>
      </div>
    </li>
  );
};

export default TabNav;
