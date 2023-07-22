import Marquee from 'react-fast-marquee';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className='fixed font-decay bg-black z-50 bottom-0 h-10 w-full'>
      <Marquee
        className='marquee-wrapper'
        style={{ height: '100%' }}
        gradient={false}
        speed={120}
        pauseOnHover
      >
        {[...Array(20)].map((_, idx) => (
          <div key={idx} className='flex items-center mr-8'>
            <span className='uppercase text-white mr-8'>
              <a href='/'>Unguarded</a>
            </span>
            <Logo className='h-8' />
          </div>
        ))}
      </Marquee>
    </footer>
  );
}
