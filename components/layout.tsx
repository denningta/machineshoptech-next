import Toolbar from './toolbar';

interface Props {
  landingPageData: any;
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ landingPageData, children }: Props) {
  return (
    <>
      <Toolbar />
      <div id="main">{children}</div>
    </>
  );
}
