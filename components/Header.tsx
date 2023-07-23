'use client';

import Logo from './Logo';
import NavMenu from './NavMenu';

export default function Header() {
  return (
    <header className='flex justify-between items-center fixed top-0 w-full h-16 bg-black text-white'>
      <NavMenu />

      <a className='p-8' href='/'>
        <Logo className='h-12' />
      </a>
    </header>
  );
}
