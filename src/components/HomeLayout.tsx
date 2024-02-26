import * as React from 'react';

import { Navbar } from './Navbar';

interface HomeLayoutProps {
  navIcons?: JSX.Element[];
}

export const HomeLayout: React.FC<React.PropsWithChildren<HomeLayoutProps>> = ({
  children,
  navIcons,
}) => {
  return (
    <main className="min-h-screen py-10 flex flex-col bg-bluishWhite">
      <Navbar
        icons={navIcons}
        containerStyles="bg-gradient-to-r from-darkPurple to-softPurple"
        logoStyles="text-customWhite"
      />
      {children}
    </main>
  );
};
