import Link from 'next/link';
import { NavItemGroq } from '../lib/sanity-queries';

interface Props {
  navItem: NavItemGroq;
  className?: string;
}

function NavItem({ navItem, className = '' }: Props) {
  return (
    <Link
      key={navItem.title}
      href={navItem.route === 'root' ? '/' : `/${navItem.route}`}
    >
      <div className={`sm:flex cursor-pointer ` + className}>
        {navItem.title}
      </div>
    </Link>
  );
}

export default NavItem;
