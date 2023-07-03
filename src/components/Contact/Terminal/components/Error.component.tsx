import { type FC, memo } from 'react';

const Error: FC = () => {
  return <span className='font-bold text-[#FF443E]'>Command not found!</span>;
};

export default memo(Error);
