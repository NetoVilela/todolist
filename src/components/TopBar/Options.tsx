import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';

interface IProps {
  mobile?: boolean;
}

function Options({ mobile = false }: IProps) {
  const [value, setValue] = useState(0);
  if (mobile) {
    console.log('mobile')
  }
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tabs
        textColor="inherit"
        value={value}
        onChange={(e, value) => { setValue(value); }}
        indicatorColor="primary"
      >
        <Tab
          label="Início"
          component={Link}
          to={'/home'}
        />
        <Tab
          label="Tarefas"
          component={Link}
          to={'/tarefas'}
        />
        <Tab
          label="Desenvolvedor"
          component={Link}
          to={'/developer'}
        />
      </Tabs>
    </Box>
  );
}

export default Options;
