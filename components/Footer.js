// next image
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className='absolute z-30 bottom-0 w-full flex lg:items-center text-white px-8 xl:px-0 xl:h-[90px] pb-5'>
            <div className='container mx-auto text-center '>
                
                <div className='text-xs flex flex-row justify-center text-center'> 
                <div className='text-center justify-center flex flex-row duration-300'>
                    <p className='flex items-center justify-center'>| <span className='text-accent'> Credits </span> |</p>
                    <a className='hover:text-accent transition-all duration-300  m-2' href='https://www.youtube.com/@cristianmihai01' target='_blank' rel='noopener noreferrer'>
                        <p className='hover:text-accent transition-all flex text-center font-medium duration-300'>Cristianmiahi01 | </p> </a>
                    <a  className='hover:text-accent transition-all duration-300 m-2' href='https://hotpot.ai/art-generator' target='_blank' rel='noopener noreferrer'> 
                        <p className='hover:text-accent transition-all duration-300'>HotpotAI | </p>   
                    </a>
                    <a className='hover:text-accent transition-all duration-300 m-2' href='https://www.imagine.art' target='_blank' rel='noopener noreferrer'> 
                        <p className='hover:text-accent transition-all duration-300'>ImagineAI | </p>
                    </a>
                    <a className='hover:text-accent transition-all duration-300 m-2' href='https://davinci.ai/' target='_blank' rel='noopener noreferrer'> 
                        <p className='hover:text-accent transition-all duration-300'>DaVinciAI | </p>
                    </a>
                </div>
                
                </div>
                <div className='text-sm flex flex-row flex-wrap text-center items-center '><p>2023 M.Asad Bhimjee. All rights reserved. </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
