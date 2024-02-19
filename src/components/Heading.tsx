import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface HeadingProps {
  text: string;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ text, className }) => {
  return (
    <h1
      className={twMerge(
        'text-6xl text-customWhite drop-shadow-[0_2px_1.2px_rgba(0,0,0,0.3)] font-rubik font-semibold tracking-widest',
        className
      )}
    >
      {text}
    </h1>
  );
};
