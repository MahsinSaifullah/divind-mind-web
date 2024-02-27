import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  className?: string;
}

export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  children,
  className,
}) => {
  return (
    <article
      className={twMerge(
        'shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-customWhite rounded-md',
        className
      )}
    >
      {children}
    </article>
  );
};
