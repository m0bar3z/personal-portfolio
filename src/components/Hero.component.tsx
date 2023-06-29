'use client';

import { type FC, useState } from 'react';
import cn from 'classnames';
import HoverText from './HoverText.component';
import { useTypingAnimation, TypePhase } from '@/hooks/useTypingAnimatino';
import { HtmlIcon, Css3Icon, JsIcon, ReactIcon, NodeIcon } from './icons';

const Hero: FC = () => {
  const [hoverText, setHoverText] = useState<string>('');
  const { typedText, phase, selectedText } = useTypingAnimation(['a React dev', 'Carl.']);

  return (
    <section className='bg-[#4495D4] h-section flex items-center justify-center'>
      <div className='h-2/5 w-full m-32'>
        <h1
          className={cn('responsive-header mb-16 text-center', {
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
          <HoverText staticText='I like UI, UX, web3, Blockchain, Security and Linux' hoverText={hoverText} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
