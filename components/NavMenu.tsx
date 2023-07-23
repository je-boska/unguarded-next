import { useState } from 'react';
import cx from 'classnames';

export default function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className='hidden md:block font-decay text-2xl'>
        <ul className='flex p-8 gap-10'>
          <li>
            <a href='/info'>Info</a>
          </li>
          <li>
            <a href='/releases'>Releases</a>
          </li>
        </ul>
      </nav>
      <span
        className='m-8 font-decay text-2xl md:hidden'
        onClick={() => setMenuOpen(true)}
      >
        Menu
      </span>
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
          <li>
            <a onClick={() => setMenuOpen(false)} href='/info'>
              Info
            </a>
          </li>
          <li>
            <a onClick={() => setMenuOpen(false)} href='/releases'>
              Releases
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
