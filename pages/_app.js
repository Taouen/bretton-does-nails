import '../styles/tailwind.css';
import '../styles/global.css';
import '../styles/about.css';
import '../styles/products.css';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
