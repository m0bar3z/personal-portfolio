import { type FC, memo } from 'react';

import Section from './components/Section.component';

const Header: FC = () => {
  return (
    <header className='h-11 flex items-center w-100 sticky top-0 z-50'>
      <Section title='/hello' className='bg-[#4495D4]' />
      <Section title='/projects' className='bg-[#5B9E47]' />
      <Section title='/contact' className='bg-[#F1A031]' />
    </header>
  );
};

export default memo(Header);
