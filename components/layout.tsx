import Toolbar from './toolbar';
import { StyledEngineProvider } from '@mui/material/styles';

interface Props {
  children: JSX.Element[];
}

export default function Layout({ children }: Props) {
  console.log(children);
  return (
    <StyledEngineProvider injectFirst>
      <Toolbar />
      <div id="main">{children}</div>
    </StyledEngineProvider>
  );
}
