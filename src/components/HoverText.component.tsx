import { type FC, memo } from 'react';
import cn from 'classnames';

interface HoverTextPropsType {
  hoverText: string;
  staticText: string;
}

const HoverText: FC<HoverTextPropsType> = ({ hoverText, staticText }) => {
  return (
    <div>
      <div
        className={cn('text-gray-100 text-center text-xl md:text-2xl transition-opacity duration-500 ease-linear ', {
          ['opacity-0']: !hoverText,
        })}
      >
        {hoverText}
      </div>
      <div
        className={cn('text-gray-100 text-xl text-center md:text-2xl transition-opacity duration-500 ease-linear', {
          ['opacity-0 -mt-8']: hoverText,
        })}
      >
        {staticText}
      </div>
    </div>
  );
};

export default memo(HoverText);
