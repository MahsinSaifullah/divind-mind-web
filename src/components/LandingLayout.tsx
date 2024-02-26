import * as React from 'react';

import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { INavLink } from 'types';

interface LandingLayoutProps {
  navLinks?: INavLink[];
  navIcons?: JSX.Element[];
}

export const LandingLayout: React.FC<
  React.PropsWithChildren<LandingLayoutProps>
> = ({ children, navLinks, navIcons }) => {
  return (
    <main className="min-h-screen bg-cover bg-no-repeat bg-[url('gradientBG.svg')] py-10  flex flex-col">
      <Navbar navLinks={navLinks} icons={navIcons} />
      {children}
      <Footer />
    </main>
  );
};
