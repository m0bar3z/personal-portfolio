import { type FC, memo } from 'react';
import FristProject from './components/FristProject.component';
import SecondProject from './components/SecondProject.component';

const SelectedWork: FC = () => {
  return (
    <section className='bg-[#5B9E47] section-height'>
      <div className='p-8'>
        <h1 className='responsive-header text-center mt-14 mb-20'>Selected Works.</h1>
        <div className='flex flex-col max-w-7xl m-auto'>
          <FristProject />
          <SecondProject />
        </div>
      </div>
    </section>
  );
};

export default memo(SelectedWork);
