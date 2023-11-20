"use client";
import Image from 'next/image';
import gymIcon from '../../../public/images/gymIcon.png';
import iconMenu from '../../../public/images/iconMenu.png';
import iconCloseMenu from '../../../public/images/closeMenu.png';
import { useEffect, useState } from 'react';

function Header() {
  const [showMenu,setShowMenu]= useState<boolean>(false);

  useEffect(() => {
    const updateMenu = () => {
      if (window.innerWidth >= 640) {
        setShowMenu(true);
      }
    };

    updateMenu();

    window.addEventListener('resize', updateMenu);

    return () => window.removeEventListener('resize', updateMenu);
  }, []);
  
  return (
    <header id="Header" className="text-white font-sans py-2 px-4 pt-12">
      <div className='max-w-full flex justify-end sm:hidden'>
        {!showMenu ?
        <Image className='hover:brightness-150 hover:cursor-pointer' key="Open" src={iconMenu} alt="Icon Menu" onClick={()=>setShowMenu(true)} />
        :
        <Image className='hover:brightness-150 hover:cursor-pointer' key="Close" src={iconCloseMenu} alt="Icon Close Menu" onClick={()=>setShowMenu(false)} />
        }
      </div>
      { showMenu &&
      <nav className="flex justify-between items-center uppercase">
        <ul className="flex flex-col sm:flex-row">
          <li className='mt-4 sm:mt-0'>
            <a  className="transition duration-500 px-4 py-2 hover:bg-slate-500" href="#Main">Home</a>
          </li>
          <li className='mt-4 sm:mt-0'>
            <a  className="transition duration-500 px-4 py-2 hover:bg-slate-500" href="#About">About</a>
          </li>
          <li className='mt-4 sm:mt-0'>
            <a  className="transition duration-500 px-4 py-2 hover:bg-slate-500" href="#Offerts">Offerts</a>
          </li>
          <li className='mt-4 sm:mt-0'>
            <a  className="transition duration-500 px-4 py-2 hover:bg-slate-500" href="#Contact">Contact</a>
          </li>
        </ul>
        <div className='mr-4 hidden sm:block'>
         <a href='#'> <Image className='hover:brightness-150' src={gymIcon} alt='Logo gimnacio'/>
         </a>
        </div>
      </nav>}
    </header>
  );
}

export default Header;