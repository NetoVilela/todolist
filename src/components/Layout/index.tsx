import React from 'react';

import TopBar from '../TopBar';
import * as C from './styles';

interface IProps {
  children?: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <>
      <TopBar />
      <C.Container>
        {children}
      </C.Container>
    </>
  );
}

export default Layout;
