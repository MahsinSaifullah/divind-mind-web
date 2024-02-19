import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface SubHeadingProps {
  text: string;
  className?: string;
}

export const SubHeading: React.FC<SubHeadingProps> = ({ text, className }) => {
  return (
    <h3
      className={twMerge(
        'text-xl text-customWhite font-rubik tracking-widest',
        className
      )}
    >
      {text}
    </h3>
  );
};
