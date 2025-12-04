import React, {useState} from 'react';

import { AiOutlineUser } from "react-icons/ai";
import { IoHomeOutline } from 'react-icons/io5';
import { FaRegEnvelope, FaWindowClose } from 'react-icons/fa';
import { TbCircleDashedLetterA, TbLayoutSidebarLeftExpand } from "react-icons/tb";

import ThemeToggle from './theme-btn';

function Navigation( ) {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <aside className={` flex border-r-2 border-r-[#40404020] dark:border-r-[#202020]`}>

      <div className={`flex w-12 h-screen pt-5 pl-3 gap-3 flex-col transition-all duration-200 text-black dark:text-white
        ${isOpen 
          ? 'bg-[#ffffff] dark:bg-[#202020] cursor-ew-resize' 
          : 'bg-[#ffffff60] dark:bg-[#303030] cursor-auto'}
      `}>
        <div className='flex flex-row items-center justify-between w-25 transition-all duration-200'>
          {isOpen ? (
            <TbCircleDashedLetterA
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-e-resize"
              size={25}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          ) : isHovering ? (
            <TbLayoutSidebarLeftExpand
              className="cursor-e-resize"
              onClick={() => setIsOpen(!isOpen)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              size={25}
            />
          ) : (
            <TbCircleDashedLetterA
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              size={25}
            />
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-transform duration-200 ${isOpen ? 'translate-x-30 cursor-crosshair' : 'translate-x-0 cursor-cell'}`}
          >
            {isOpen ? <FaWindowClose size={25} /> : <div />}
          </button>
        </div>

        {/* Icons */}
        <IoHomeOutline
          onClick={() => setIsOpen(!isOpen)}
          size={30}
          className={`p-1 rounded-md cursor-pointer 
            ${isOpen ? '' : 'hover:bg-[#ffffff60] dark:hover:bg-[#414141]'}`}
        />
        <AiOutlineUser
          onClick={() => setIsOpen(!isOpen)}
          size={30}
          className={`p-1 rounded-md cursor-pointer 
            ${isOpen ? '' : 'hover:bg-[#ffffff60] dark:hover:bg-[#414141]'}`}
        />
        <FaRegEnvelope
          onClick={() => setIsOpen(!isOpen)}
          size={30}
          className={`p-1 rounded-md cursor-pointer 
            ${isOpen ? '' : 'hover:bg-[#ffffff60] dark:hover:bg-[#414141]'}`}
        />
        
        <ThemeToggle />
      </div>

      {/* Side Nav Expanded Panel */}
      <div className={`transition-all duration-200 h-screen overflow-hidden 
        ${isOpen 
          ? 'w-56 bg-[#ffffff] dark:bg-[#202020]' 
          : 'w-0 bg-[#ffffff00] dark:bg-[#303030]'}
      `}>
        <nav className='mt-16'>
          <ul className='flex flex-col justify-start gap-2 h-screen text-black dark:text-white'>
            <li className='p-1 mr-2 cursor-pointer rounded-md hover:bg-[#ffffff40] dark:hover:bg-[#414141]'>
              <a href="#home">Home</a>
            </li>
            <li className='p-1 mr-2 cursor-pointer rounded-md hover:bg-[#ffffff40] dark:hover:bg-[#414141]'>
              <a href="#about">About</a>
            </li>
            <li className='p-1 mr-2 cursor-pointer rounded-md hover:bg-[#ffffff40] dark:hover:bg-[#414141]'>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Navigation;
