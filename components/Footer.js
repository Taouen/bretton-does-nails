import Link from 'next/link';
const socialMedia = [
  {
    name: 'Facebook',
    image: '/assets/facebook.svg',
    link: 'https://www.facebook.com/bretton.does.nails',
  },
  {
    name: 'Instagram',
    image: '/assets/instagram.svg',
    link: 'https://www.instagram.com/bretton.does.nails/',
  },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      <div className="flex justify-center mb-3">
        {socialMedia.map((item) => (
          <Link href={item.link} key={item.name}>
            <a className="last:mr-0 h-8 w-8 mr-5">
              <img src={item.image} alt={item.name} />
            </a>
          </Link>
        ))}
      </div>
      <p className="font-didact text-xs">© Bretton Wiltshire 2020</p>
    </footer>
  );
};

export default Footer;
