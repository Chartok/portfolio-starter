// use state from react
import { useState } from 'react';
// icons
import
  {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
  } from 'react-icons/hi2';

// nav data
export const navData=[
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



const Nav=() =>
{
  const router=useRouter();
  const [ isOpen, setIsOpen ]=useState( false );
  const pathname=router.pathname;
  // toggle menu funtion
  const toggleMenu=() =>
  {
    setIsOpen( !isOpen );
  };
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* inner */ }
      <div
        className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-accent/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>

        <button onClick={ toggleMenu } className='lg:hidden'>Menu</button>

        { navData.map( ( link, index ) =>
        {
          return (
            <Link
              className={ `${ link.path===pathname&&'text-accent'
                } ${ isOpen? 'opacity-100':'opacity-0 lg:opacity-100' } relative flex items-center group hover:text-accent translation-all duration-300` }
              href={ link.path }
              key={ index }
            >

              {/* tooltips */ }
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='relative flex text-accent backdrop-blur-sm items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    { link.name }
                  </div>
                  {/* tri-point */ }
                  <div className='border-solid border-l-accent border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>
                  </div>
                </div>
              </div>
              {/* icons */ }
              <div>{ link.icon }</div>
            </Link>
          );
        } ) }

      </div>
    </nav>
  );
};

export default Nav;
