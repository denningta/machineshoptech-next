import { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { NavItemGroq } from '../lib/sanity-queries';
import { ListItemButton } from '@mui/material';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { imageBuilder } from '../lib/sanity-client';
import Image from 'next/image';
import Logo from './logo';

interface Props {
  navItems: NavItemGroq[];
  brandName: string;
  brandIcon: SanityImageSource;
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Toolbar({ navItems, brandName, brandIcon }: Props) {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  console.log(brandIcon);

  return (
    <div className="fixed flex justify-center z-50 top-0 left-0 w-full h-[60px] bg-neutral-900 bg-opacity-60 backdrop-blur-sm border-b border-white border-opacity-10">
      <div className="flex w-full items-center max-w-primary-col p-4 ">
        <Logo width={40} height={40} fill="#fff" />
        <div className="text-xl ml-3">{brandName}</div>
        <div className="grow"></div>
        <div
          className="text-2xl cursor-pointer sm:hidden"
          onClick={toggleDrawer('right', true)}
        >
          <GiHamburgerMenu />
        </div>
        {navItems.map((navItem) => (
          <div
            className="text-md ml-4 hidden sm:flex cursor-pointer"
            key={navItem.title}
          >
            {navItem.title}
          </div>
        ))}
      </div>
      <Drawer
        anchor="right"
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        PaperProps={{ className: 'bg-neutral-800 text-white' }}
      >
        <List>
          {navItems.map((navItem) => (
            <ListItemButton
              key={navItem.title}
              component="a"
              href={navItem.route === 'root' ? '/' : navItem.route}
            >
              <ListItemText primary={navItem.title} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
