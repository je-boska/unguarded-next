'use client';

import { useState } from 'react';
import cx from 'classnames';
import Logo from './Logo';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='flex justify-between items-center fixed top-0 w-full h-16 bg-black text-white'>
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

      <a className='p-8' href='/'>
        <Logo className='h-12' />
      </a>
    </header>
  );
}
