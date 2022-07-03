import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Button } from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DrawerComponent from '../DrawerComponent';
import LinkCustomized from '../LinkCustomized';
import { Box } from '@mui/system';

import Options from './Options';

const TopBar = () => {

  return (
    <AppBar sx={{ background: '#0A1929' }} position="static">

      <Toolbar
        sx={{
          display: { xs: 'none', sm: 'flex' }
        }}
      >

        <FactCheckIcon sx={{ marginRight: 5 }} />
        <Options />


        <Button sx={{ marginLeft: 'auto', color: '#fff' }} size='small' variant="contained" >
          <LinkCustomized color="#fff" to="/login"> Login </LinkCustomized>
        </Button>
        <Button sx={{ marginLeft: '10px', color: '#fff' }} size='small' variant="contained" >
          <LinkCustomized color="#fff" to="/signup"> SignUp </LinkCustomized>
        </Button>

      </Toolbar>

      <Box
        sx={{
          display: { xs: 'block', sm: 'none' },
        }}
      >
        <DrawerComponent />
      </Box>

    </AppBar>
  )
}


export default TopBar;