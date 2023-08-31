// next image
import Image from 'next/image';

const BlkHole = () => {
  return (
    <div className='w-[200px] xl:w-[300px] absolute -right-8 -bottom-16 mix-blend-color-dodge animate-pulse duration-75 z-10'>
      <Image alt='' src={'/blkhole.jpg'} width={260} height={200} className='object-cover w-full h-full' />
      <div className='absolute inset-0' style={{background: 'linear-gradient(90deg, rgba(0, 0, 0, 5) 0%, transparent 100%)'}}></div>
    </div>
  );
};

export default BlkHole;
