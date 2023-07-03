import { type FC, memo } from 'react';
import CommandContainer from './Command.container';

const Email: FC = () => {
  return (
    <CommandContainer>
      <span className='ml-2 font-bold'>mzali9895@gmail.com</span>
      <br />
      <span className='ml-4'>for copy email address type: copy email</span>
    </CommandContainer>
  );
};

export default memo(Email);
