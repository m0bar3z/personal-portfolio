'use client';

import { type FC } from 'react';
import cn from 'classnames';
import { useTypingAnimation, TypePhase } from '@/hooks/useTypingAnimatino';

const Hero: FC = () => {
  const { typedText, phase, selectedText } = useTypingAnimation(['a React dev', 'Carl.']);

  return (
    <section className='bg-[#4495D4] h-hero flex items-center justify-center'>
      <div className='h-2/5 w-full m-32'>
        <h1
          className={cn('mb-2 text-4xl text-gray-100 text-center md:text-7xl', {
            ['end-cursor']: phase !== TypePhase.Deleting && phase !== TypePhase.Stopping,
            ['blinking']: phase === TypePhase.Pausing,
          })}
          aria-label={selectedText}
        >
          Hi, I&apos;m {typedText}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
