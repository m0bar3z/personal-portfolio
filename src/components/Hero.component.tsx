import { type FC } from 'react';

const Hero: FC = () => {
  return (
    <section className='bg-[#4495D4] h-hero flex items-center justify-center'>
      <div className='h-3/5 w-full'>
        <h1 className='mb-2 text-4xl text-gray-100 md:text-6xl'>
          Hi, I&apos;m <br className='block md:hidden' /> a React dev
        </h1>
      </div>
    </section>
  );
};

export default Hero;
