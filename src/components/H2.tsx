import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface H2props {
  text: string;
  className?: string;
}

export const H2: React.FC<H2props> = ({ className, text }) => {
  return (
    <h2
      className={twMerge(
        'font-rubik tracking-widest font-bold text-lg',
        className
      )}
    >
      {text}
    </h2>
  );
};
