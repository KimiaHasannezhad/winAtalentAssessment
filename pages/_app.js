import Head from 'next/head'
import '../styles/globals.scss'
import '../styles/dropdown.scss'
import '../styles/searchBox.scss'
import '../styles/selectBox.scss'
import { CounterProvider } from '../context/MultiSelectCounterContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
      </Head>
      < CounterProvider >
        <Component {...pageProps} />
      </CounterProvider>
    </>

  )
}

export default MyApp