import { useState } from 'react';
import cx from 'classnames';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    title: 'Info',
    link: '/info',
  },
  {
    title: 'Releases',
    link: '/releases',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
  {
    title: 'Bandcamp',
    link: 'https://unguarded.bandcamp.com/',
  },
];

export default function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className='hidden md:block font-decay text-2xl'>
        <ul className='flex p-8 gap-10'>
          {menuItems.map(({ title, link }, idx) => (
            <li key={idx}>
              <a
                href={link}
                target={link.startsWith('http') ? '_blank' : '_self'}
                className={cx({
                  'line-through': pathname.includes(link),
                })}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav menu button */}
      <span
        className='m-8 font-decay text-2xl md:hidden hover:line-through'
        onClick={() => setMenuOpen(true)}
      >
        Menu
      </span>

      {/* Mobile nav */}
      <nav
        className={cx(
          'font-decay text-2xl md:hidden fixed w-full h-screen bg-black transition-all',
          {
            'top-0': menuOpen,
            '-top-full': !menuOpen,
          }
        )}
      >
        <div
          className='absolute right-0 m-8'
          onClick={() => setMenuOpen(false)}
        >
          X
        </div>
        <ul className='flex flex-col w-full h-full items-center justify-center p-8 gap-10'>
          {menuItems.map(({ title, link }, idx) => (
            <li
              key={idx}
              onClick={() => setMenuOpen(false)}
              className='text-4xl'
            >
              <a
                href={link}
                target={link.startsWith('http') ? '_blank' : '_self'}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
