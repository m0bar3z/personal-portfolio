import { ReactNode, type FC } from 'react';

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <main>{children}</main>;
};

export default DefaultLayout;
