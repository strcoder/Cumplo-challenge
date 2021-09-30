import React from 'react';

import Appbar from '../../components/Appbar';

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Appbar />
      {children}
    </>
  );
};

export default Layout;
