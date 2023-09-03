// components
import BlkHole from '../../components/BlkHole'

// icons
import { BsArrowRight } from 'react-icons/bs'

// framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../../variants'

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      {/* text & form */}
      <div className='flex flex-col w-full max-w-[700px]'>
        {/* text */}
        <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 text-center mb-12'>
          Connect <span className='text-accent'> with me.</span>
        </motion.h2>
        {/* form */}
        <motion.form variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex-1 flex flex-col gap-6 w-full mx-auto'>
          {/* input group */}
          <div className='flex gap-x-6 w-full'>
            <p className='border-solid p-4 rounded border-2 border-accent '>Drop me a line <span className='text-accent'>@</span> m.bhimjee@outlook.com</p>
          </div>
        </motion.form>
      </div>
    
      </div>
    </div>
  );
};

export default Contact;
