import { Link } from 'react-router-dom';
import Logo from '../../assets/dotDAGENEhovedlogo.svg';
import type { Site } from '../../types';

const sites: Site[] = [
  // { title: 'Hjem', href: '/' },
  { title: 'Kontakt oss', href: '#kontakt' },
];

export const Header = () => {

  return (
    <header className="sticky top-0 z-50 bg-white">
      <section className="flex flex-row items-center justify-between border-b-2 border-gray-500 p-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-1/2" />
        </Link>
        <nav className="block">
          {sites.map((site) => (
            <a
              key={site.href}
              href={site.href}
              className={
                site.title === 'Kontakt oss'
                  ? 'bg-dotgreen px-4 py-2 text-white'
                  : 'ml-6 cursor-pointer text-xl hover:text-gray-700'
              }
            >
              {site.title}
            </a>
          ))}
        </nav>
      </section>
    </header>
  );
};
