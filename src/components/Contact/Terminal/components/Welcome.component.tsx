import { type FC, memo } from 'react';

const Welcome: FC = () => {
  return (
    <>
      <span>
        type <strong>help</strong> for command list
      </span>
      <br />
      <br />
    </>
  );
};

export default memo(Welcome);
