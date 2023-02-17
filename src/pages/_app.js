import Layout from "@components/Layout";
import "@styles/globals.scss";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Pokenext App</title>
      <meta name="description" content="Pokemonsters App - Nextjs Practice" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);



export default App;
