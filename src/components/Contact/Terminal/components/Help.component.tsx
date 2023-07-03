import { type FC, memo } from 'react';
import CommandContainer from './Command.container';

const Help: FC = () => {
  return (
    <CommandContainer>
      <span className='ml-2 font-bold'>email</span>
      <br />
      <span className='ml-4'>get my email address</span>
      <br />
      <br />
      <span className='ml-2 font-bold'>copy [argument]</span>
      <br />
      <span className='ml-4'>copy argument to clipboard</span>
    </CommandContainer>
  );
};

export default memo(Help);
