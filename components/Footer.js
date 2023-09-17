// next image
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className='flex absolute items-center xl:bottom-0 inset-x-0 bottom-20 z-30 w-full text-white xl:px-0 xl:h-[90px]'>
            <div className='mx-auto text-center ' >
                
                
                <div className='flex flex-row max-md:collapse justify-between text-[12px] xs:text-[6px] gap-2 duration-300 '>
                    <p className='flex items-center justify-start'>| <span className='text-accent'> Credits </span> : </p>
                    <a className='hover:text-accent transition-all duration-300 ' href='https://www.youtube.com/@cristianmihai01' target='_blank' rel='noopener noreferrer'>
                        <p className='flex-row hover:text-accent transition-all flex text-center duration-300'>Cristianmiahi01  </p> </a>
                    <a  className='flex flex-row hover:text-accent transition-all duration-300 ' href='https://hotpot.ai/art-generator' target='_blank' rel='noopener noreferrer'> 
                        <p className='flex flex-row hover:text-accent transition-all duration-300'>HotpotAI  </p>   
                    </a>
                    <a className='hover:text-accent transition-all duration-300 ' href='https://www.imagine.art' target='_blank' rel='noopener noreferrer'> 
                        <p className='flex flex-row hover:text-accent transition-all duration-300'>ImagineAI  </p>
                    </a>
                    <a className='hover:text-accent transition-all duration-300 ' href='https://davinci.ai/' target='_blank' rel='noopener noreferrer'> 
                        <p className='flex flex-row hover:text-accent transition-all duration-300'>DaVinciAI  </p>
                    </a>
                    <div className='flex flex- lg:text-[8px] text-center items-center justify-end' ><p>|| 2023 M.Asad Bhimjee. All rights reserved. ||</p>
                    </div>
                </div>
                
                
            </div>
        </footer>
    );
};

export default Footer;
