import { type FC } from 'react';

interface SectionPropsType {
  title: string;
  className?: string;
  href: string;
}

const Section: FC<SectionPropsType> = ({ title, className, href }) => {
  return (
    <a
      className={`${className} w-1/3 h-full flex items-center justify-center hover:cursor-pointer text-xl text-white `}
      href={href}
    >
      {title}
    </a>
  );
};

export default Section;
