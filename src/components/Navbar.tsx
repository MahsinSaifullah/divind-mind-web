import * as React from 'react';
import { twMerge } from 'tailwind-merge';

import { Logo } from './Logo';
import { INavLink } from 'types';

interface NavbarProps {
  containerStyles?: string;
  navLinkStyles?: string;
  navButtonStyles?: string;
  logoStyles?: string;
  navLinks?: INavLink[];
  hideLogo?: boolean;
  icons?: JSX.Element[];
}

export const Navbar: React.FC<NavbarProps> = ({
  containerStyles,
  navLinkStyles,
  navButtonStyles,
  logoStyles,
  navLinks,
  hideLogo = false,
  icons = [],
}) => {
  return (
    <nav
      className={twMerge(
        'container mx-auto rounded-xl p-4 bg-customWhite flex justify-between items-center px-10',
        containerStyles
      )}
    >
      {!hideLogo && <Logo className={logoStyles} />}
      <ul className="flex gap-16 items-center tracking-wide">
        {!!navLinks?.length &&
          navLinks.map((link) => {
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
        {!!icons.length && (
          <div className="flex gap-10">
            {icons.map((icon, index) => {
              return React.cloneElement(icon, { key: index });
            })}
          </div>
        )}
      </ul>
    </nav>
  );
};
