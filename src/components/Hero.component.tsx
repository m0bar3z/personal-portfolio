'use client';

import { useCallback, type FC } from 'react';
import cn from 'classnames';
import { useTypingAnimation, TypePhase } from '@/hooks/useTypingAnimatino';
import { HtmlIcon, Css3Icon } from './icons';
import { useState } from 'react';

const Hero: FC = () => {
  const [hoverText, setHoverText] = useState<string>('');
  const { typedText, phase, selectedText } = useTypingAnimation(['a React dev', 'Carl.']);

  // const handleMouseEnter = useCallback((newTest: string) => {
  //   console.log('handle mouse enter');
  //   setHoverText(newTest);
  // }, []);

  const handleMouseEnter = (newTest: string) => {
    console.log('handle mouse enter');
    setHoverText(newTest);
  };

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
        <div className='flex justify-center mb-3'>
          <HtmlIcon
            onMouseEnter={() => handleMouseEnter('HTML5')}
            onMouseLeave={() => setHoverText('')}
            width={56}
            height={56}
            className='hover:scale-125 mb-3 transition duration-500'
          />
        </div>
        <div className='flex justify-center'>
          <div>
            <div
              className={cn(
                'text-gray-100 w-full text-center text-xl md:text-2xl transition-opacity duration-500 ease-linear ',
                {
                  ['opacity-0']: !hoverText,
                }
              )}
            >
              {'HTML5'}
            </div>
            <div
              className={cn(
                'text-gray-100 text-xl text-center md:text-2xl transition-opacity duration-500 ease-linear -mt-8',
                {
                  ['opacity-0']: hoverText,
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
