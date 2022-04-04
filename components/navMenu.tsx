import { NavItemGroq } from '../lib/sanity-queries';
import NavItem from './navItem';

interface Props {
  navItems: NavItemGroq[];
  direction: 'horizontal' | 'vertical';
}

function NavMenu({ navItems, direction }: Props) {
  const verticalNavMenu = (
    <div className="w-full flex flex-col p-6">
      {navItems.map((navItem) => (
        <div key={navItem.title} className="mb-4 text-xl">
          <NavItem navItem={navItem} />
        </div>
      ))}
    </div>
  );

  const horizontalNavMenu = (
    <div className="flex text-lg">
      {navItems.map((navItem) => (
        <NavItem key={navItem.title} navItem={navItem} />
      ))}
    </div>
  );

  switch (direction) {
    case 'vertical':
      return verticalNavMenu;
    case 'horizontal':
      return horizontalNavMenu;
  }
  return <div>Nav Menu works</div>;
}

export default NavMenu;
