'use client';

import { type FC, memo } from 'react';
import Image from 'next/image';

const SelectedWork: FC = () => {
  return (
    <section className='bg-[#5B9E47] h-section'>
      <div className='p-8 bg-red-300'>
        <h1 className='responsive-header text-center mt-14 mb-20'>Selected Works.</h1>
        <div className='flex flex-col max-w-7xl m-auto'>
          <div className='flex flex-col sm:flex-row gap-8 h-80'>
            <div className='overflow-hidden rounded-xl flex-grow-0 flex-shrink-0 basis-3/6'>
              <Image
                unoptimized
                src={'https://i.postimg.cc/j2L6shYm/test.gif'}
                alt='test'
                className='w-full brightness-75 hover:brightness-100 hover:scale-105 transition duration-200'
                style={{ objectPosition: 'fill' }}
                width={200}
                height={400}
              />
            </div>
            <div className='flex flex-col w-full gap-2 md:gap-8'>
              <h2 className='text-gray-100 text-xl md:text-3xl font-bold text-center'>My Project</h2>
              <h4 className='text-gray-100 text-lg md:text-2xl font-bold text-center'>
                This is a description for my own project!
              </h4>
            </div>
          </div>
          {/* <Image unoptimized src={myGif.src} alt='test' width={300} height={600} /> */}
        </div>
      </div>
    </section>
  );
};

export default memo(SelectedWork);
