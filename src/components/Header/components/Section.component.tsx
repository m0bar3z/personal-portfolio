import { type FC } from 'react';

interface SectionPropsType {
  title: string;
  className?: string;
}

const Section: FC<SectionPropsType> = ({ title, className }) => {
  return (
    <div
      className={`${className} w-1/3 h-full flex items-center justify-center hover:cursor-pointer text-xl text-white `}
    >
      {title}
    </div>
  );
};

export default Section;
