import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Button } from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DrawerComponent from '../DrawerComponent';
import LinkCustomized from '../LinkCustomized';

const TopBar = () => {
  const [value, setValue] = useState(0);
  const [valueAction, setValueAction] = useState(false);

  return (
    <AppBar sx={{ background: '#0A1929' }} position="static">
      <Toolbar>
        <FactCheckIcon sx={{ marginRight: 5 }} />

        <Tabs textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor="primary">
          <Tab
            label="Início"
            component={Link}
            to={'/home'}
          />
          <Tab
            label="Créditos"
            component={Link}
            to={'/login'}
          />
        </Tabs>

        <Button sx={{ marginLeft: 'auto', color: '#fff' }} size='small' variant="contained" >
          <LinkCustomized color="#fff" to="/login"> Login </LinkCustomized>
        </Button>
        <Button sx={{ marginLeft: '10px', color: '#fff' }} size='small' variant="contained" >
          <LinkCustomized color="#fff" to="/signup"> SignUp </LinkCustomized>
        </Button>

      </Toolbar>
      <DrawerComponent />
    </AppBar>
  )
}


export default TopBar;