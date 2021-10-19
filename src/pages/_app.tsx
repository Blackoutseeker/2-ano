import { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import darkTheme from '@styles/themes/dark'
import GlobalStyle from '@styles/globalStyle'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
