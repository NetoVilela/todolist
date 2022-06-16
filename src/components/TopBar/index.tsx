import { AppBar, Typography, Toolbar, Tabs, Tab, Button } from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import LinkCustomized from '../LinkCustomized';

const TopBar = () => {
  return (
    <AppBar sx={{ background: '#0A1929' }} position="static">
      <Toolbar>
        <FactCheckIcon />

        <Tabs textColor="inherit">
          <Tab label="Início" />
        </Tabs>

        <Button sx={{marginLeft: 'auto'}} variant="outlined" >
          Login
        </Button>
        <Button sx={{marginLeft: '10px'}} variant="outlined" >
          SignUp
        </Button>

        {/* <Typography sx={{ marginLeft: 2 }}>
          <LinkCustomized to='/home' color="#FFF">
            Home
          </LinkCustomized>
        </Typography> */}
      </Toolbar>

    </AppBar>
  )
}


export default TopBar;