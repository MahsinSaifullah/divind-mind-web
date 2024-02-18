import * as React from 'react';
import { Navbar } from './Navbar';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="min-h-screen bg-cover bg-no-repeat bg-[url('gradientBG.svg')] pt-10 pb-4">
      <Navbar />
      {children}
    </main>
  );
};
