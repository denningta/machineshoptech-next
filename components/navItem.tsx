import Link from 'next/link';
import { NavItemGroq } from '../lib/sanity-queries';

interface Props {
  navItem: NavItemGroq;
}

function NavItem({ navItem }: Props) {
  return (
    <Link
      key={navItem.title}
      href={navItem.route === 'root' ? '/' : `/${navItem.route}`}
    >
      <div className="text-md ml-4 sm:flex cursor-pointer">{navItem.title}</div>
    </Link>
  );
}

export default NavItem;
