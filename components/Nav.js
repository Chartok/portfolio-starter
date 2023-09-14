// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className='fixed flex flex-col items-center xl:justify-center gap-y-4 h-max xl:bottom-0 bottom-[60px] xl:h-screen mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md '>
      {/* inner */}
      <div 
        className='absolute w-full xl:flex-col flex-row items-center flex justify-evenly gap-y-10 px-4 md:px-30 xl:px-0 h-[80px] bg-gradient-to-b from-accent/20 via-white/10 to-white/20 xl:h-max py-8 xl:backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>

        {navData.map((link, index) => {
          return (
            <Link 
              className={`${
                link.path === pathname && 'text-accent'
              } relative flex items-center group hover:text-accent translation-all duration-300`}
              href={link.path} 
              key={index}
              >

              {/* tooltips */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='relative flex text-accent backdrop-blur-sm items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  {/* tri-point */}
                  <div className='border-solid border-l-accent border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>
                  </div>
                </div>
              </div>
              {/* icons */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
