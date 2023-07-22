import Marquee from 'react-fast-marquee';

const UnguardedMarquee = () => {
  return (
    <div className='fixed bg-black z-50 bottom-0 h-20 w-full'>
      <Marquee
        className='marquee-wrapper'
        style={{ height: '100%' }}
        gradient={false}
        speed={40}
      >
        {[...Array(20)].map((idx) => (
          <span key={idx} className='uppercase text-white mr-8'>
            Unguarded
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default UnguardedMarquee;
