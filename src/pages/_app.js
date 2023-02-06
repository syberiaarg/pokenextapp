import '@/styles/globals.css'
import Head from 'next/head'
import Image from 'next/image'

const App = ({ Component, pageProps }) => (

  <>
    <Head>
      <title>Pokenext App</title>
      <meta name="description" content="Pokemonsters App - Nextjs Practice" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Component {...pageProps} />
  </>
)

export default App
