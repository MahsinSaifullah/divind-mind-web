import * as React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { HOME_NAV_ITEMS } from 'constants';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="min-h-screen bg-cover bg-no-repeat bg-[url('gradientBG.svg')] py-10  flex flex-col">
      <Navbar navLinks={HOME_NAV_ITEMS} />
      <div className="flex-1 flex flex-col justify-center">{children}</div>
      <Footer />
    </main>
  );
};
