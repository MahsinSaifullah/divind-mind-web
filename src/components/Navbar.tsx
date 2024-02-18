import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

import { Logo } from './Logo';
import { INavLink } from 'types';

interface NavbarProps {
  containerStyles?: string;
  navLinkStyles?: string;
  navButtonStyles?: string;
  backButtonStyles?: string;
  navLinks?: INavLink[];
  showBackButton?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  containerStyles,
  navLinkStyles,
  navButtonStyles,
  backButtonStyles,
  navLinks,
  showBackButton = false,
}) => {
  return (
    <nav
      className={twMerge(
        'container mx-auto rounded-xl p-4 bg-customWhite flex justify-between items-center pr-10',
        containerStyles
      )}
    >
      <Logo />
      {!!navLinks?.length && !showBackButton && (
        <ul className="flex gap-16 items-center tracking-wide">
          {navLinks.map((link) => {
            return (
              <li
                key={link.url}
                className={twMerge(
                  'text-brightPink cursor-pointer hover:text-darkPink',
                  link.isButton
                    ? 'bg-brightPink text-customWhite p-1 rounded-md text-sm px-4 uppercase shadow-[0_4px_8px_-4px_#F597C1] transition duration-150 ease-in-out hover:bg-darkPink hover:text-customWhite'
                    : '',
                  link.isButton ? navButtonStyles : navLinkStyles
                )}
              >
                {link.title}
              </li>
            );
          })}
        </ul>
      )}
      {showBackButton && (
        <ArrowLeftIcon
          className={twMerge(
            'h-6 w-6 text-lightPurple cursor-pointer',
            backButtonStyles
          )}
        />
      )}
    </nav>
  );
};
