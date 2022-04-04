import { RefObject, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavItemGroq } from '../lib/sanity-queries';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Logo from './logo';
import Link from 'next/link';
import React from 'react';
import NavItem from './navItem';
import NavMenu from './navMenu';

interface Props {
  navItems: NavItemGroq[];
  brandName: string;
  brandIcon: SanityImageSource;
}

export default function Toolbar({ navItems, brandName }: Props) {
  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <div className="fixed flex justify-center z-50 top-0 left-0 w-full h-[60px] bg-neutral-900 bg-opacity-60 backdrop-blur-sm border-b border-white border-opacity-10">
      <div className="flex w-full items-center max-w-primary-col p-4 ">
        <Logo width={40} height={40} fill="#fff" />
        <div className="text-xl ml-3">{brandName}</div>
        <div className="grow"></div>
        <button
          className="h-[40px] w-[40px] flex flex-col items-center justify-center text-2xl cursor-pointer sm:hidden"
          onClick={() => setShowNavMenu(!showNavMenu)}
        >
          <div
            className={`h-[2px] w-[30px] bg-white ease-in-out duration-100 mb-[10px] ${
              showNavMenu ? 'rotate-45 translate-y-[6px]' : 'rotate-0'
            }`}
          ></div>
          <div
            className={`h-[2px] w-[30px] bg-white ease-in-out duration-200 ${
              showNavMenu ? '-rotate-45 -translate-y-[6px]' : 'rotate-0'
            }`}
          ></div>
        </button>
        <div className="hidden sm:flex">
          <NavMenu navItems={navItems} direction="horizontal" />
        </div>
        <div
          className={`absolute top-[60px] sm:hidden w-full h-screen left-0 bg-neutral-800 overflow-auto transition-all ease-in-out duration-300 ${
            showNavMenu ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <NavMenu navItems={navItems} direction="vertical" />
        </div>
      </div>
    </div>
  );
}
