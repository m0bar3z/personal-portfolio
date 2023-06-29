import { type FC, memo } from 'react';

const Works: FC = () => {
  return (
    <section className='bg-[#5B9E47] h-section'>
      <div className='p-8'>
        <h1 className='responsive-header text-center mt-14'>Selected Works.</h1>
      </div>
    </section>
  );
};

export default memo(Works);
