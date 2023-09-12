// next image
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className='absolute z-30 w-full flex flex-row text-white px-8 xl:px-0 xl:h-[90px]'>
            <div className='container mx-auto text-center '>
                
                
                <div className='relative justify-start flex flex-row flex-wrap duration-300 left-0'>
                    <p className='flex items-center justify-start'>| <span className='text-accent'> Credits </span> |</p>
                    <a className='hover:text-accent transition-all duration-300 ' href='https://www.youtube.com/@cristianmihai01' target='_blank' rel='noopener noreferrer'>
                        <p className='flex-row hover:text-accent transition-all flex text-center duration-300'>Cristianmiahi01 | </p> </a>
                    <a  className='flex flex-row hover:text-accent transition-all duration-300 ' href='https://hotpot.ai/art-generator' target='_blank' rel='noopener noreferrer'> 
                        <p className='flex flex-row hover:text-accent transition-all duration-300'>HotpotAI | </p>   
                    </a>
                    <a className='hover:text-accent transition-all duration-300 ' href='https://www.imagine.art' target='_blank' rel='noopener noreferrer'> 
                        <p className='flex flex-row hover:text-accent transition-all duration-300'>ImagineAI | </p>
                    </a>
                    <a className='hover:text-accent transition-all duration-300 ' href='https://davinci.ai/' target='_blank' rel='noopener noreferrer'> 
                        <p className='flex flex-row hover:text-accent transition-all duration-300'>DaVinciAI | </p>
                    </a>
                    <div className='flex flex-row text-sm text-center items-center justify-end' ><p>|| 2023 M.Asad Bhimjee. All rights reserved. ||</p>
                    </div>
                </div>
                
                
            </div>
        </footer>
    );
};

export default Footer;
