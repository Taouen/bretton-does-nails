import Head from 'next/head';
import '../styles/tailwind.css';
import '../styles/global.css';
import '../styles/about.css';
import '../styles/products.css';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
