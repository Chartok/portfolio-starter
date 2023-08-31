// next image
import Image from 'next/image';

const TopLeftImg = () => {
  return (
  <div className='absolute -translate-y-40 left-0 top-10 mix-blend-darken z-10 w-[200px] xl:w-[300px] opacity-50'>
    <Image src='/tL2.png' width={400} height={400} alt='' />
  </div>
  );
};

export default TopLeftImg;
