// next image
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className='absolute z-30 bottom-0 w-full flex lg:items-center text-white px-8 xl:px-0 xl:h-[90px] pb-5'>
            <div className='container mx-auto text-center '>
                
                <div className='text-xs flex lg:flex-row justify-center text-center'> <p>Credits:</p>.
                <div className='text-center justify-center flex duration-300'>

                    <a className='hover:text-accent transition-all duration-300' href='https://www.youtube.com/@cristianmihai01' target='_blank' rel='noopener noreferrer'>
                        <p className='hover:text-accent transition-all duration-300'>Cristian miahi01 || </p> </a>
                    <a  className='hover:text-accent transition-all duration-300' href='https://hotpot.ai/art-generator' target='_blank' rel='noopener noreferrer'> 
                        <p className='hover:text-accent transition-all duration-300'> HotpotAI || </p>   
                    </a>
                    <a className='hover:text-accent transition-all duration-300' href='https://www.imagine.art' target='_blank' rel='noopener noreferrer'> 
                        <p className='hover:text-accent transition-all duration-300'> ImagineAI || </p>
                    </a>
                    <a className='hover:text-accent transition-all duration-300' href='https://davinci.ai/' target='_blank' rel='noopener noreferrer'> 
                        <p className='hover:text-accent transition-all duration-300'> DaVinciAI || </p>
                    </a>
                </div>
                </div>
            </div>
                <div className='text-sm flex lg:flex-row justify-center text-center items-center mb-0'><p>2023 M.Asad Bhimjee. All rights reserved. </p>
                </div>
        </footer>
    );
};

export default Footer;
