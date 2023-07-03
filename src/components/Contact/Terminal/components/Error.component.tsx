import { type FC, memo } from 'react';

const Error: FC<{ title?: string }> = ({ title }) => {
  return <span className='font-bold text-[#FF443E]'>{title ? title : 'Command not found!'}</span>;
};

export default memo(Error);
