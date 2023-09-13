// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex flex-row-reverse items-center justify-end px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-row gap-y-6 py-2 justify-between'>
          {/* logo */}
          <Link href={'/'}>
            <Image 
              className=''
              src={'/logo.svg'}
              width={220}
              height={48}
              alt=''
              style={{ width: 'auto', height: 'auto' }}
              priority={true}
              
            />
          </Link>
          {/* Socials */}
            <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
