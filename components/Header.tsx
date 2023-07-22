import Logo from './Logo';

export default function Header() {
  return (
    <header className='flex justify-between items-center fixed top-0 w-full h-20 bg-black text-white'>
      <nav className='hidden md:block'>
        <ul className='flex p-8 gap-8'>
          <li>
            <a href='/info'>Info</a>
          </li>
          <li>
            <a href='/releases'>Releases</a>
          </li>
        </ul>
      </nav>

      <a className='p-8' href='/'>
        <Logo className='h-12' />
      </a>
    </header>
  );
}
