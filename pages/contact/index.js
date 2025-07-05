// components
import Avatar2 from '../../components/Avatar2';
import ParticlesContainer from '../../components/ParticlesContainer';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text */ }
        <div className='flex flex-col w-full max-w-[700px] justify-center'>
          <motion.h2
            variants={ fadeIn( 'up', 0.2 ) }
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 mb-12'>
            Connect <span className='text-accent'> with me.</span>
          </motion.h2>

        <motion.div
          variants={ fadeIn( 'left', 0.4 ) }
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full max-w-[350px] border-solid p-8 rounded border-2 border-accent text-center'>
          <p>Drop a
            <span className='text-accent'> line.</span>
          </p>
          <motion.hr
            variants={ fadeIn('up', 1)}
            initial='hidden'
            animate='show'
            exit='hidden'
          />
          <motion.h2
            variants={ fadeIn( 'up', 2.5 ) }
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <span className='text-accent'>m.bhimjee</span>@outlook.com</motion.h2>
        </motion.div>

          </div>
        {/* image */ }
        <div className='w-[1280px] h-full absolute bottom-0 right-0'>
          {/* bg-img */ }
          <div
            className='bg-none xl:bg-rorschach -rotate-45 xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-darken z-0 translate-x-[250px]'></div>
          {/* particles */ }
          <ParticlesContainer />
          {/* avatar */ }
          <motion.div
            variants={ fadeIn( 'up', 0.5 ) }
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={ { duration: 1, ease: 'easeInOut' } }
            className='w-[40%] max-w-[462px] max-h-[540px] absolute -bottom-32 lg:bottom-0 lg:right-[7%]'>
            <Avatar2 />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
