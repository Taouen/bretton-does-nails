import Header from './Header.js';
import Footer from './Footer';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bretton Does Nails | Home</title>
        <html lang="en-us" />
        <link
          href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Mallanna&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="#" />
        {/* remove console error "can't find favicon" */}
      </Head>

      <div className="container mx-auto px-4 pb-4 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container px-4 mb-8">{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
