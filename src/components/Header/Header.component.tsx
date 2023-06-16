import { type FC, memo } from 'react';

import Section from './components/Section.component';

const Header: FC = () => {
  return (
    <div className='h-10 flex items-center w-100'>
      <Section title='/hello' className='bg-[#4495D4]' />
      <Section title='/projects' className='bg-[#5B9E47]' />
      <Section title='/contact' className='bg-[#F1A800]' />
    </div>
  );
};

export default memo(Header);
