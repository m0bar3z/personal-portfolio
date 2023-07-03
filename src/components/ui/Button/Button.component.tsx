import React, { type FC, memo } from 'react';
import cn from 'classnames';

type ButtonPropTypes = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'contained' | 'outlined';
};

const Button: FC<ButtonPropTypes> = ({ className, variant = 'outlined', ...rest }) => {
  return (
    <button
      className={cn(
        className,
        'px-4 py-2 text-lg tracking-wide font-semibold flex items-center justify-center gap-2 rounded-md transition-all duration-200',
        {
          'text-gray-100 border-solid border-2 hover:bg-black hover:bg-opacity-5 border-gray-100':
            variant === 'outlined',
          'bg-gray-100 text-[#5B9E47] hover:bg-gray-100/90': variant === 'contained',
        }
      )}
      {...rest}
      title='sdfdsf'
    />
  );
};

export default memo(Button);
