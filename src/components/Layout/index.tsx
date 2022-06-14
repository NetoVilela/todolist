import React from 'react';

import TopBar from '../TopBar';

interface IProps {
  children?: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <>
    <TopBar />
    aaa
      {children}
    </>
  );
}

export default Layout;
