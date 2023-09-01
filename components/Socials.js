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
      <a href={'https://github.com/Chartok'} className='hover:text-accent transition-all duration-300' target='_blank' rel='noopener noreferrer'>
        <RiGithubFill />
      </a>
      <a href={'https://linkedin.com/in/mohammed-bhimjee/'} className='hover:text-accent transition-all duration-300' target='_blank' rel='noopener noreferrer'>
        <RiLinkedinBoxFill />
      </a>
      <a href={'https://dev.to/yaysa'} className='hover:text-accent transition-all duration-300' target='_blank' rel='noopener noreferrer'>
        <SiDevdotto />
      </a>
    </div>
  );
};

export default Socials;
