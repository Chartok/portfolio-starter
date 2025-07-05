// image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';


const Home = () => {
  return (
    <div className='bg-primary/60 h-[35em]'>
      {/* Text */}
      <div className='w-full flex h-full xl:absolute top-0 left-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='flex xl:flex-col flex-wrap xl:bottom-40 items-baseline xl:flex-nowrap xl:justify-center gap-2 xl:pt-40 text-left h-full container mx-auto p-14'>

          {/* Title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 z-30'>
            Innovative <br /> and{' '}
            <span className='text-accent'>versitile</span>
          </motion.h1>
          {/* subtext */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 z-30'
          >
            Blending expertise in common tech-stacks with a keen eye for responsiveness and design, I can build apps and websites that resonate.
          </motion.p>
          {/* ProjectsBtn */}
          <div className='justify-center xl:relative absolute bottom-20 scale-75 z-40'>
            <ProjectsBtn />
          </div>
          {/* <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className=' xl:flex'
          >
            <ProjectsBtn />
          </motion.div> */}
        </div>
      </div>
      {/* image */}
      <div className='w-[1280px] h-full absolute bottom-0 right-0'>
        {/* bg-img */}
        <div 
          className='bg-none xl:bg-rorschach -rotate-45 xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-darken z-0 translate-x-[250px]'></div>
        {/* particles */}
        <ParticlesContainer  />
        {/* avatar */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-[40%] max-w-[462px] max-h-[540px] absolute -bottom-32 lg:bottom-0 lg:right-[7%]'>
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
