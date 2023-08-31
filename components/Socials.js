// links
import Link from 'next/link';

// icons
import {
  RiGithubFill,
  RiLinkedinBoxFill
} from 'react-icons/ri';
import {
  SiDevdotto
} from 'react-icons/si'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>

      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxFill />
      </Link>

      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <SiDevdotto />
      </Link>

    </div>
  );
};

export default Socials;
