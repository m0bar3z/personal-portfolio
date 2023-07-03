import { type FC, memo, ReactNode } from 'react';

const CommandContainer: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <span className={className}>
      <br />
      {children}
      <br />
    </span>
  );
};

export default memo(CommandContainer);
