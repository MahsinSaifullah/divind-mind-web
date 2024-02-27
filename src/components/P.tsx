import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface Pprops {
  text: string;
  className?: string;
}

export const P: React.FC<Pprops> = ({ className, text }) => {
  return (
    <p className={twMerge('font-rubik tracking-widest text-sm', className)}>
      {text}
    </p>
  );
};
