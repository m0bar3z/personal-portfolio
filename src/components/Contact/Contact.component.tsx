'use client';

import { type FC, memo } from 'react';
import Terminal from './Terminal/Terminal.component';

const Contact: FC = () => {
  return (
    <section className='bg-[#F1A031] h-section flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-14 w-screen'>
        <h1 className='responsive-header'>Let&apos;s work together.</h1>
        <Terminal />
      </div>
    </section>
  );
};

export default memo(Contact);
