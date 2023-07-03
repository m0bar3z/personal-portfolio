import { type FC, memo, ReactNode } from 'react';

const CommandContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span>
      <br />
      {children}
      <br />
    </span>
  );
};

export default memo(CommandContainer);
