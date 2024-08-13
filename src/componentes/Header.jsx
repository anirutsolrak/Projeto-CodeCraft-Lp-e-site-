import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#000000' }}>
      <Toolbar>
        <Typography variant="h2" sx={{ flexGrow: 1, textAlign: 'center', color: '#7CFC00' }}>
          CodeCraft
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;