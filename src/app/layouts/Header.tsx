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

  const handleScrollSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 130;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };
  
  return (
    <header id="Header" className="text-white font-sans px-4 h-full sm:h-32 sticky top-0 z-10">
      <div className='max-w-full flex justify-end sm:hidden'>
        {!showMenu ?
        <Image className='hover:brightness-150 hover:cursor-pointer' key="Open" src={iconMenu} alt="Icon Menu" onClick={()=>setShowMenu(true)} />
        :
        <Image className='hover:brightness-150 hover:cursor-pointer' key="Close" src={iconCloseMenu} alt="Icon Close Menu" onClick={()=>setShowMenu(false)} />
        }
      </div>
      { showMenu &&
      <nav className="flex justify-between uppercase h-full items-center fadeIn">
        <ul className="flex flex-col sm:flex-row">
          <li className='cursor-pointer mt-4 sm:mt-0 transition duration-500 px-4 py-2 hover:bg-slate-500' onClick={()=>handleScrollSection("Main")}>
            Home
          </li>
          <li className='cursor-pointer mt-4 sm:mt-0 transition duration-500 px-4 py-2 hover:bg-slate-500' onClick={()=>handleScrollSection("About")}>
            About
          </li>
          <li className='cursor-pointer mt-4 sm:mt-0 transition duration-500 px-4 py-2 hover:bg-slate-500' onClick={()=>handleScrollSection("Offerts")}>
            Offerts
          </li>
          <li className='cursor-pointer mt-4 sm:mt-0 transition duration-500 px-4 py-2 hover:bg-slate-500' onClick={()=>handleScrollSection("Contact")}>
            Contact
          </li>
        </ul>
        <div className='mr-4 hidden sm:block' onClick={()=>handleScrollSection("Main")}>
         <Image className='cursor-pointer hover:brightness-150' src={gymIcon} alt='Logo gym'/>
        </div>
      </nav>}
    </header>
  );
}

export default Header;