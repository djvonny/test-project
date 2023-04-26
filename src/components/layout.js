import React from 'react';
import { Container } from '@mui/material';

function Layout({children}) {
  return (<Container sx={{width: '100%', height: '100vh'}}>{children}</Container>)
}

export default Layout;