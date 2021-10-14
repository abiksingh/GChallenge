import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#17202A' }} position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" component="div">
            {!matches
              ? `The New York Times`
              : `"The New York Times" article search application`}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
