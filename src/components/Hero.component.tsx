'use client';

import { type FC } from 'react';
import cn from 'classnames';
import { useTypingAnimation, TypePhase } from '@/hooks/useTypingAnimatino';
import { HtmlIcon, Css3Icon, JsIcon, ReactIcon, NodeIcon } from './icons';
import { useState } from 'react';

const Hero: FC = () => {
  const [hoverText, setHoverText] = useState<string>('');
  const { typedText, phase, selectedText } = useTypingAnimation(['a React dev', 'Carl.']);

  return (
    <section className='bg-[#4495D4] h-hero flex items-center justify-center'>
      <div className='h-2/5 w-full m-32'>
        <h1
          className={cn('mb-16 text-4xl text-gray-100 text-center md:text-7xl font-bold', {
            ['end-cursor']: phase !== TypePhase.Deleting && phase !== TypePhase.Stopping,
            ['blinking']: phase === TypePhase.Pausing,
          })}
          aria-label={selectedText}
        >
          Hi, I&apos;m {typedText}
        </h1>
        <p className='text-gray-100 text-xl text-center md:text-2xl mb-5'>I speak</p>
        <div className='flex justify-center items-center mb-3 gap-4'>
          <HtmlIcon
            onMouseEnter={() => setHoverText('HTML5')}
            onMouseLeave={() => setHoverText('')}
            className='hero-icon'
          />
          <Css3Icon
            onMouseEnter={() => setHoverText('CSS3, SASS, CSS-in-JS, Material-UI, Tailwind')}
            onMouseLeave={() => setHoverText('')}
            width={56}
            height={56}
            className='hero-icon'
          />
          <ReactIcon
            onMouseEnter={() => setHoverText('React, Redux')}
            onMouseLeave={() => setHoverText('')}
            width={68}
            height={68}
            className='animate-spin-slow mb-3'
          />
          <JsIcon
            onMouseEnter={() => setHoverText('Javascript, Typescript')}
            onMouseLeave={() => setHoverText('')}
            width={56}
            height={56}
            className='hero-icon'
          />
          <NodeIcon
            onMouseEnter={() => setHoverText('NodeJS, ExpressJS')}
            onMouseLeave={() => setHoverText('')}
            width={56}
            height={56}
            className='hero-icon'
          />
        </div>
        <div className='flex justify-center'>
          <div>
            <div
              className={cn(
                'text-gray-100 text-center text-xl md:text-2xl transition-opacity duration-500 ease-linear ',
                {
                  ['opacity-0']: !hoverText,
                }
              )}
            >
              {hoverText}
            </div>
            <div
              className={cn(
                'text-gray-100 text-xl text-center md:text-2xl transition-opacity duration-500 ease-linear',
                {
                  ['opacity-0 -mt-8']: hoverText,
                }
              )}
            >
              I like UI, UX, web3, Blockchain, Security and Linux
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
