import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface H3props {
  text: string;
  className?: string;
}

export const H3: React.FC<H3props> = ({ className, text }) => {
  return (
    <h3
      className={twMerge(
        'font-rubik tracking-widest font-semibold text-xl',
        className
      )}
    >
      {text}
    </h3>
  );
};
