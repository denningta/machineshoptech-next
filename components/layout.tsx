import Toolbar from './toolbar';

interface Props {
  landingPageData: any;
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ landingPageData, children }: Props) {
  return (
    <>
      <Toolbar navItems={landingPageData.navItems} />
      <div id="main" className="absolute w-full mt-[60px]">
        {children}
      </div>
    </>
  );
}
