import { AppProps } from 'next/app'
import Head from 'next/head'

import { RecoilRoot } from 'recoil'

import { ThemeProvider } from 'styled-components'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import GlobalStyles from 'styles/global'
import { onError } from '@apollo/client/link/error'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  link: from([httpLink, errorLink]),
  cache: new InMemoryCache()
})

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
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </ChakraProvider>
        </RecoilRoot>
      </ThemeProvider>
    </>
  )
}

export default App
