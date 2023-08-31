// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Survey',
          path: '/city_skyilne.jpg',
          URL: 'https://chartok.github.io/code-survey/',
        },
        {
          title: 'goodEats',
          path: '/goodEats.png',
          URL: 'https://good-eats-b2abe2613d0c.herokuapp.com/'
        },
        {
          title: 'JottItNow',
          path: '/jott-preview.jpg',
          URL: 'https://jottitnow.herokuapp.com/'
        },
        {
          title: 'GamerLi',
          path: '/prjct2.png',
          URL: 'https://gamerli.herokuapp.com/'
        },
      ],
    },
    {
      images: [
        {
          title: 'GamerLi',
          path: '/prjct2.png',
          URL: 'https://gamerli.herokuapp.com/'
        },
        {
          title: 'JottItNow',
          path: '/jott-preview.jpg',
          URL: 'https://jottitnow.herokuapp.com/'
        },
        {
          title: 'goodEats',
          path: '/goodEats.png',
          URL: 'https://good-eats-b2abe2613d0c.herokuapp.com/'
        },
        {
          title: 'Survey',
          path: '/city_skyline.jpg',
          URL: 'https://chartok.github.io/code-survey/'
        },
      ],
    },
  ],
};


// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// required modules
import { Pagination } from 'swiper/modules';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div 
                    className='relative rounded-lg overflow-hidden mb-10 flex items-center justify-center group' 
                    key={index}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden '>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt={image.title} />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#0ef] to-[#07f] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div>
                            <a href={image.URL} target='_blank' rel='noopener noreferrer'>
                            {/* title */}
                            <div className='delay-100'>PROJECT: </div>
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>{image.title}</div>
                            </a>
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
