import Header from './Header.js';
import Footer from './Footer';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <div className="container mx-auto px-4 pb-4 flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-grow flex-col container px-4 mb-8">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
