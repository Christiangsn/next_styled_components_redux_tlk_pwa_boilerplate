import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/GlobalStyles'
import { T } from 'theme'
import { Page } from 'types/page'

type Props = AppProps & { Component: Page }

export default function App({ Component, pageProps }: Props) {
  const Layout = Component.Layout || Fragment
  return (
    <ThemeProvider theme={T}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyles />
      </Layout>
    </ThemeProvider>
  )
}
