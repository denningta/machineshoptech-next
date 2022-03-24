import { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Toolbar() {
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

  return (
    <>
      <div className="flex items-center p-4 border-b border-white border-opacity-10 text-xl">
        <div className="pr-3 text-2xl">
          <FaBeer />
        </div>
        <div className="grow text-xl">Brandname</div>
        <div
          className="text-2xl cursor-pointer"
          onClick={toggleDrawer('right', true)}
        >
          <GiHamburgerMenu />
        </div>
      </div>
      <Drawer
        anchor="right"
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        PaperProps={{ className: 'bg-neutral-800 text-white' }}
      >
        <List>
          {['All mail', 'Trash', 'Spam'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
