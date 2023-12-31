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
          path: '/city_skyilne.jpg',
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
      className='h-[280px] sm:h-[463px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                  >
                    <div className='flex flex-row justify-center relative  group w-[300px] h-[300px] mb-30'>
                      {/* image */}
                      <Image src={image.path} alt={image.title} width={500} height={500} style={{ width: 'auto', height: 'auto', objectFit: 'contain' }} className='absolute items-center justify-center' />
                      {/* overlay gradient */}
                      <div className='absolute contain h-[90px] inset-0 bg-gradient-to-b from-transparent via-[#012346] to-[#939393] opacity-0 group-hover:opacity-60 transition-all duration-700'></div>
                      <div className='absolute bottom-0 translate-y-full  group-hover:-translate-y-40 group-hover:xl:-translate-y-40 transition-all duration-300'>
                      {/* text in title container*/}
                        <div className='flex flex-col gap-x-2 text-[14px] tracking-[0.2rem]'>
                          <div>
                            <a href={image.URL} target='_blank' rel='noopener noreferrer'>
                              {/* title event*/}
                              <div className='translate-y-[500%] group-hover:-translate-y-20 transition-all duration-200 delay-150'>PROJECT:{image.title}</div>
                            </a>
                          </div>
                          {/* icon */}
                          <div className='text-[40px] translate-y-[500%] group-hover:-translate-y-20 transition-all duration-300 delay-200'>
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
