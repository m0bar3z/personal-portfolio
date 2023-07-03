import { type FC, memo, useMemo, useState } from 'react';
import Image from 'next/image';
import HoverText from '@/components/ui/HoverText.component';
import { ReactIcon } from '@/components/ui/icons';
import LinkButtons from './LinkButtons.component';

const SecondProject: FC = () => {
  const [hoverText, setHoverText] = useState<string>('');

  return (
    <div className='flex flex-col sm:flex-row-reverse gap-8 h-80 mb-16 mt-16'>
      {useMemo(
        () => (
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
        ),
        []
      )}
      <div className='flex flex-col justify-between w-full gap-2 md:gap-8 '>
        <h2 className='text-gray-100 text-xl md:text-3xl font-bold text-center'>My Second Project!</h2>
        <h4 className='text-gray-100 text-lg md:text-2xl font-bold text-center'>
          <HoverText staticText='Elevating web experiences with React magic.' hoverText={hoverText} />
        </h4>
        <div className='flex w-3/5 mx-auto items-center justify-center'>
          <ReactIcon
            width={50}
            height={50}
            className='hero-icon hover:scale-[1.2]'
            onMouseEnter={() => setHoverText('React, Typescript, MUI')}
            onMouseLeave={() => setHoverText('')}
          />
        </div>
        <LinkButtons launchUrl='#' sourceUrl='#' />
      </div>
    </div>
  );
};

export default memo(SecondProject);
