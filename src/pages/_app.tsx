import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
