import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import GlobalStyle from '../styles/GlobalStyle';
import DefaultTheme from '../styles/defaultTheme';

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Reset />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
