// next image
import Image from 'next/image';

const Bulb = () => {
  return (
  <div className='absolute -left-32 -bottom-40 rotate-90 mix-blend-darken  bg-gradient-to-l via-[#0ef] to-[#07f] animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]'>
    <Image 
      src={'/tL2.png'}
      width={260}
      height={200}
      className='w-full h-full'
      alt=''
    />
  </div>
  );
};

export default Bulb;
