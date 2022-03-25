import Toolbar from './toolbar';

interface Props {
  landingPageData: any;
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ landingPageData, children }: Props) {
  console.log(landingPageData);
  return (
    <>
      <Toolbar navItems={landingPageData.navItems} />
      <div id="main">{children}</div>
    </>
  );
}
