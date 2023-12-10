import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  padding: '8px 20px',
  borderRadius: '3px',
  '&:hover': {
    transition: 'all 0.3s ease 0s',
    background: 'rgba(255, 255, 255, 0.15)',
    color: 'common.white',
  },
};

const AppBarStyle = {
  'background-image': 'linear-gradient(to bottom, rgba(34,42,69, 0.96), rgba(34,42,69, 0.96)),url(/assets/images/sidebar/sidebar-bg-dark.jpg)',
  'background-repeat': 'no-repeat',
  'background-size': 'cover',
  'background-position': 'center center',
  'box-shadow': ' 0 2px 4px 0 rgba(0,0,0,0.10)',
  'background-color': '#fff',
  'padding-left': '16px',
  'padding-right': '16px',
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={AppBarStyle}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="#"
            sx={{ fontSize: 24, mr: 3 }}
          >
            {'SLR-Assistant'}
          </Link>
          <Box sx={{ display: 'flex' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#"
              sx={rightLink}
            >
              {'Features'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#"
              sx={rightLink}
            >
              {'Get Involved'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/repositories/"
              sx={rightLink}
            >
              {'Repositories'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/news/"
              sx={rightLink}
            >
              {'News'}
            </Link>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/sign-in/"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/sign-up"
              sx={{ ...rightLink, color: '#ff9e43' }}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
