import Header from './Header.js';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className="container max-w-screen-lg mx-auto px-4 pb-4 flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-grow flex-col container px-4 mb-8">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
