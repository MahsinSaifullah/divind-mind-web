import * as React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { HOME_NAV_ITEMS } from 'constants';

interface LayoutProps {
  showBackButton?: boolean;
}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
  showBackButton,
}) => {
  return (
    <main className="min-h-screen bg-cover bg-no-repeat bg-[url('gradientBG.svg')] py-10  flex flex-col">
      <Navbar navLinks={HOME_NAV_ITEMS} showBackButton={showBackButton} />
      {children}
      <Footer />
    </main>
  );
};
