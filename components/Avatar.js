// next image
import Image from 'next/image';


const Avatar = () => {
    return (
        <div className='hidden xl:flex xl:max-w-none'>
            <Image
                src={'/avatr.png'}
                width={462}
                height={540}
                alt=''
                className='translate-z-0 w-full h-full'
            />
        </div>
    );
};

export default Avatar;