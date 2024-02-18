import * as React from 'react';
import { twMerge } from 'tailwind-merge';

import { Logo } from './Logo';

interface NavbarProps {
  classname?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ classname }) => {
  return (
    <nav
      className={twMerge(
        'container mx-auto rounded-md p-5 bg-[#FFFEFC]',
        classname
      )}
    >
      <Logo />
    </nav>
  );
};
