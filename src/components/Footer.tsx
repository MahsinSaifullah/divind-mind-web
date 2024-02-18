import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface FooterProps {
  containerStyles?: string;
}
export const Footer: React.FC<FooterProps> = ({ containerStyles }) => {
  return (
    <footer
      className={twMerge(
        'container mx-auto rounded-xl p-4 bg-customWhite flex justify-between items-center px-10 text-brightPink',
        containerStyles
      )}
    >
      <div className="flex gap-2 tracking-widest font-rubik">
        <span>©</span>
        <span>{new Date().getFullYear()}</span>
        <span>Mahsin Saifullah</span>
      </div>
    </footer>
  );
};
