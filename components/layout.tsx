import { NavItemGroq, SiteSettingsGroq } from '../lib/sanity-queries';
import Toolbar from './toolbar';

interface Props {
  siteSettings: SiteSettingsGroq;
  navItems: NavItemGroq[];
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ siteSettings, navItems, children }: Props) {
  return (
    <>
      <Toolbar
        navItems={navItems}
        brandName={siteSettings.name || 'BrandName'}
        brandIcon={siteSettings.icon || 'Logo'}
      />
      <div id="main" className="absolute w-full min-h-screen">
        {children}
      </div>
    </>
  );
}
