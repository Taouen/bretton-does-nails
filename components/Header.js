import { faBars as menu } from '@fortawesome/free-solid-svg-icons';
import { faTimes as close } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt as externalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { useState } from 'react';

const pages = [
  { title: 'About', link: '/about' },
  { title: 'Services', link: '/services' },
  {
    title: 'Book',
    link:
      'https://www.fresha.com/a/bretton-does-nails-mane-attraction-winnipeg-836-mcleod-avenue-ul7mir4w/booking?menu=true',
    external: true,
  },
  { title: 'Products', link: '/products' },
];

const Header = () => {
  const [active, setActive] = useState(false);

  const mobileMenuClasses = classnames([
    'absolute top-14 md:right-10 md:top-4 lg:hidden font-didact text-3xl  flex-col items-start shadow-xl rounded-lg py-2 px-6 bg-white mt-2 mr-1 md:order-first md:mr-2',
    active ? 'flex' : 'hidden',
  ]);

  return (
    <header className="sticky top-0 flex justify-between md:align-center pt-4 pb-16 bg-gradient-to-b from-white via-white to-clear">
      <a
        href="/"
        className="text-4xl md:inline md:text-5xl font-didact text-pink"
      >
        <h1>Bretton Does Nails</h1>
      </a>

      <ul className="hidden font-didact text-2xl lg:items-center lg:flex">
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

      <div className="lg:hidden flex flex-col items-end md:flex-row md:items-start">
        {!active ? (
          <FontAwesomeIcon
            icon={menu}
            className="lg:hidden fa-2x text-pink mt-1"
            onClick={() => setActive(!active)}
          />
        ) : (
          <FontAwesomeIcon
            icon={close}
            className="lg:hidden fa-2x text-pink mt-1"
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
                  {page.title}
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
