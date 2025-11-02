import { Link } from 'react-router-dom';
import Logo from '../../assets/dotDAGENEhovedlogo.svg';
import { Bars3Icon } from '@heroicons/react/20/solid';
import type { Site } from '../../types';
import { Dropdown } from './Dropdown';
import { useRef, useState } from 'react';

const sites: Site[] = [
  { title: 'Hjem', href: '/' },
  { title: 'Kontakt oss', href: '#kontakt' },
];

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuicon = useRef<HTMLButtonElement>(null);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <section className="flex flex-row items-center justify-between border-b-2 border-gray-500 p-4 xl:px-60">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-1/2" />
        </Link>
        <button
          className="h-8 w-8 md:hidden"
          onClick={() => setMenu((prev) => !prev)}
          ref={menuicon}
        >
          <Bars3Icon />
        </button>
        <nav className="hidden md:block">
          {sites.map((site) => (
            <a
              key={site.href}
              href={site.href}
              className={
                site.title === 'Kontakt oss'
                  ? 'bg-dotgreen ml-6 px-4 py-2 text-white'
                  : 'ml-6 cursor-pointer text-xl hover:text-gray-700'
              }
            >
              {site.title}
            </a>
          ))}
        </nav>
      </section>

      {/* // Dropdown search menu */}
      <Dropdown
        isOpen={menu}
        onClose={() => setMenu(false)}
        site={sites}
        triggerRef={menuicon}
      />
    </header>
  );
};
