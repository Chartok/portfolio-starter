import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
} from 'react-icons/fa';

import { SiNextdotjs } from 'react-icons/si';

// components
import Avatar from '../../components/Avatar';
import BlkHole from '../../components/BlkHole';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="FaHtml5" />,
          <FaCss3 key="FaCss3" />,
          <FaJs key="FaJs" />,
          <FaReact key="FaReact" />,
          <SiNextdotjs key="SiNextdotjs" />,
        ],
      },
    ],
  },

  {
    title: 'credentials',
    info: [
      {
        title: 'Certified Web Developer - Univeristy of Texas at Austin Coding Bootcamp',
        stage: '2023',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='flex relative h-full w-full bg-primary/30 py-20 text-center xl:text-left'>
      <BlkHole />
      {/* avatar */}
      {/* <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden w-[40%] h-[50%] xl:flex absolute -bottom-20 -left-[115px]'
      >
        <Avatar />
      </motion.div> */}
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'>
            Innovative Developer <span className='text-accent'>Human-Centric</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[700px] text-sm mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            Driven by a passion for technology and an unwavering commitment to innovation, I have recently embarked on a journey in software development. My background, enriched by interactions with diverse individuals across multiple industries, equips me with the unique insights needed to create apps that genuinely enhance quality of life.
          </motion.p>
        </div>
        {/* info */}
        <motion.div 
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex}
                  className='flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4 mt-2'>
                    {/* icons */}
                    {item.icons?.map((icon) => {
                      return (
                        <div key={icon} className='text-2xl text-white'>{icon}</div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>

  );
};

export default About;
