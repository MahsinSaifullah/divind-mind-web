import * as React from 'react';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};
