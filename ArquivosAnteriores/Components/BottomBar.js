import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Toolbar from '@mui/material/Toolbar';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ImageIcon from '@mui/icons-material/Image';

export default function BottomBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%', bottom: 0, position: 'fixed' }}>
      <div style={{position: "inherit"}}>
      <Toolbar />
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recentes" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Galeria" icon={<ImageIcon />} />
        </BottomNavigation>
        </div>
    </Box>
  );
}