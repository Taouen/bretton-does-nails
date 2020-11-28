import Link from 'next/link';

const Header = (props) => {
  return (
    <div>
      <nav className="text-didact flex justify-center text-xl w-full mt-4">
        <ul className="flex flex-row">
          <li className="mr-10 hover:bg-white hover:text-ltpink">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-10 hover:bg-white hover:text-ltpink">
            <Link href="/about">About</Link>
          </li>
          <li className="mr-10 hover:bg-white hover:text-ltpink">
            <Link href="/book">Book</Link>
          </li>
          <li className="mr-10 hover:bg-white hover:text-ltpink">
            <Link href="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
