import { NavItemGroq } from '../lib/sanity-queries';
import NavItem from './navItem';

interface Props {
  navItems: NavItemGroq[];
  direction: 'horizontal' | 'vertical';
}

function NavMenu({ navItems, direction }: Props) {
  const verticalNavMenu = (
    <div className="w-full flex flex-col">
      {navItems.map((navItem) => (
        <div key={navItem.title} className="">
          <NavItem
            navItem={navItem}
            className="text-lg p-4 hover:bg-white hover:bg-opacity-5 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );

  const horizontalNavMenu = (
    <div className="flex text-lg">
      {navItems.map((navItem) => (
        <div key={navItem.title} className="ml-6">
          <NavItem navItem={navItem} />
        </div>
      ))}
    </div>
  );

  switch (direction) {
    case 'vertical':
      return verticalNavMenu;
    case 'horizontal':
      return horizontalNavMenu;
  }
}

export default NavMenu;
