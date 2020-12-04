import { faBars as bars } from '@fortawesome/free-solid-svg-icons';
import { faTimes as close } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt as externalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { useState } from 'react';

const pages = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  {
    title: 'Book',
    link:
      'https://www.fresha.com/a/bretton-does-nails-mane-attraction-winnipeg-836-mcleod-avenue-ul7mir4w/booking?menu=true',
    external: true,
  },
  { title: 'Products', link: '/products' },
  { title: 'Services', link: '/services' },
];

const Header = () => {
  const [active, setActive] = useState(false);

  const mobileMenuClasses = classnames([
    'lg:hidden font-didact text-3xl  flex-col items-start shadow-lg rounded-lg py-2 px-6 bg-white mt-2 mr-1',
    active ? 'flex' : 'hidden',
  ]);

  return (
    <header className="flex justify-between md:align-center w-full mt-4">
      <h1 className="hidden lg:inline text-5xl font-didact text-pink">
        Bretton Does Nails
      </h1>

      <div className="lg:hidden flex flex-col">
        <h1 className=" text-5xl font-didact text-pink">Bretton </h1>
        <h1 className=" text-5xl font-didact text-pink"> Does </h1>
        <h1 className=" text-5xl font-didact text-pink"> Nails</h1>
      </div>

      <ul className="hidden font-didact text-2xl lg:items-center  lg:flex">
        {pages.map((page) => {
          const classes = classnames([
            'last:mr-0 text-pink group hover:text-grey hover:underline',
            `${page.external ? 'mr-5' : 'mr-10'}`,
          ]);
          return (
            <li className={classes} key={page.title}>
              <a
                href={page.link}
                target={page.external ? '_blank' : null}
                rel={page.external ? 'noopener' : null}
              >
                <span className={page.external ? 'mr-1' : null}>
                  {page.title}
                </span>
                {page.external ? (
                  <FontAwesomeIcon
                    icon={externalLink}
                    className="invisible group-hover:visible fa-xs mb-0.5"
                  />
                ) : null}
              </a>
            </li>
          );
        })}
      </ul>

      {/*  ------- Mobile Menu ------- */}

      <div className="lg:hidden flex flex-col items-end">
        {!active ? (
          <FontAwesomeIcon
            icon={bars}
            className="lg:hidden fa-2x text-pink mr-2 mt-2"
            onClick={() => setActive(!active)}
          />
        ) : (
          <FontAwesomeIcon
            icon={close}
            className="lg:hidden fa-2x text-pink mr-2 mt-2"
            onClick={() => setActive(!active)}
          />
        )}

        <ul className={mobileMenuClasses}>
          {pages.map((page) => {
            return (
              <li className="text-pink pb-2" key={page.title}>
                <a
                  href={page.link}
                  target={page.external ? '_blank' : null}
                  rel={page.external ? 'noopener' : null}
                >
                  <span className={page.external ? 'mr-1' : null}>
                    {page.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
