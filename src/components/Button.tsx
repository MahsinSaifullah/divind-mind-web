import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        'bg-customWhite drop-shadow-[0_2px_1.2px_rgba(0,0,0,0.3)] py-2 px-4 rounded-3xl shadow font-rubik min-w-[300px] text-darkPurple hover:bg-lightGrey',
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
