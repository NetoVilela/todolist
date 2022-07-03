import { useState } from 'react';
import { 
  Box,
  Drawer, 
  IconButton, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText
} from '@mui/material';
import Options from '../TopBar/Options';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        variant="temporary"
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 180 },
        }}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText> Login</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <Options mobile={true} />
        </List>
      </Drawer>

      <Box
        sx={{ marginLeft: '20px' }}
      >
        <IconButton
          color="inherit"
          onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon />
        </IconButton>
      </Box>


    </>
  )
}

export default DrawerComponent;