import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  type = 'text',
  name = '',
  placeholder = '',
}) => {
  return (
    <input
      type={type}
      name={name}
      className={twMerge(
        'w-full shadow p-3 rounded-xl font-rubik text-brightPink focus:outline-none focus:border-brightPink focus:border-2 placeholder-brightPink placeholder-opacity-60',
        className
      )}
      placeholder={placeholder}
    />
  );
};
