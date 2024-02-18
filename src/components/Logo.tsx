import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <p
      className={twMerge(
        'font-rubik font-bold tracking-widest text-darkPurple',
        className
      )}
    >
      Divine Mind
    </p>
  );
};
