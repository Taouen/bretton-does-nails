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
      </Head>

      <div className="mx-auto my-0 flex flex-col min-h-screen ">
        <Header />
        <main className="flex-grow mt-40 md:mt-16 lg:mt-20 px-8">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
