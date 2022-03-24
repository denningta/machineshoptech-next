import Toolbar from "./toolbar";

interface Props {
  children: JSX.Element[];
}

export default function Layout({ children }: Props) {
  console.log(children);
  return (
    <>
      <Toolbar />
      <div id="main">{children}</div>
    </>
  );
}
