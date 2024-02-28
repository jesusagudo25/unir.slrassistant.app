import { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Hidden,
  Icon,

  MenuItem,

  Box,
  styled,
  Button
} from '@mui/material';

import { MatxMenu, MatxSearchBox } from 'app/theme';
import { themeShadows } from 'app/theme/MatxTheme/themeColors';
import { topBarHeight } from 'app/utils/constant';
import { Span } from '../../Typography';


const TopbarRoot = styled('div')({
  top: 0,
  zIndex: 96,
  height: topBarHeight,
  boxShadow: themeShadows[8],
  transition: 'all 0.3s ease'
});

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: '8px',
  paddingLeft: 18,
  paddingRight: 20,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 16,
    paddingRight: 16
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: 14,
    paddingRight: 16
  }
}));

const UserMenu = styled(Box)({
  padding: 4,
  display: 'flex',
  borderRadius: 24,
  cursor: 'pointer',
  alignItems: 'center',
  '& span': { margin: '0 8px' }
});

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minWidth: 185,
  '& a': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  },
  '& span': { marginRight: '10px', color: theme.palette.text.primary }
}));

const Layout1Topbar = () => {
  const navigate = useNavigate();

  return (
    <TopbarRoot>
      <TopbarContainer>
        <Box display="flex">

          <Link to="/dashboard/app">
            <Button variant="a" color="primary" size="small">
              Dashboard
            </Button>
          </Link>

          <Link to="/repositories">
            <Button variant="a" color="primary" size="small">
              Repositories
            </Button>
          </Link>

        </Box>

        <Box display="flex" alignItems="center">


          <MatxMenu
            menuButton={
              <UserMenu>
                <Hidden xsDown>
                  <Span>
                    Hi <strong>{localStorage.getItem('name')}</strong>
                  </Span>
                </Hidden>
                <Avatar  sx={{ cursor: 'pointer' }} />
              </UserMenu>
            }
          >

            <StyledItem>
              <Link to="/profile">
                <Icon> person </Icon>
                <Span> Profile </Span>
              </Link>
            </StyledItem>

            <StyledItem onClick={() => { localStorage.clear(); navigate('/'); }}>
              <Icon> power_settings_new </Icon>
              <Span> Logout </Span>
            </StyledItem>
          </MatxMenu>
        </Box>
      </TopbarContainer>
    </TopbarRoot>
  );
};

export default memo(Layout1Topbar);
