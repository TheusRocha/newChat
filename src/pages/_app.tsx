import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { RecoilRoot } from 'recoil'

import GlobalStyles from 'styles/global'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config
})

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chat</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={theme.colors.gray[900]} />
        <meta name="description" content="Chat" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RecoilRoot>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </RecoilRoot>
      </ThemeProvider>
    </>
  )
}

export default App
