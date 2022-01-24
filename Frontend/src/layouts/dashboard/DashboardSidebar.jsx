import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Drawer} from '@mui/material';
import NavSection from '../../components/NavSection';
import {sidebarUnauthenticated, sidebarAuthenticated} from './sidebarConfig';
import {isAuthPrivateRoute, isAuthPublicRoute, logOut} from '../../utils/AuthorizationUtils';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountDisplay from './AccountDisplay';

const drawerWidth = 280;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
 
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const logOutUser = () => {
    logOut();
    setTimeout(() => {
      navigate('/welcome', {replace: true})
    }, 1500)
  }

  useEffect(() => {
    const path = window.location.pathname;

    {(path.includes('dashboard') || path.includes('students')) && isAuthPublicRoute() ? (
      navigate('/', {replace: true})
    ): (
      navigate(`${path}`, {replace: true})
    )}
  }, [])

  const renderContent = (
    <div style={{backgroundColor: 'white', height: '100%'}}>
      {
        isAuthPrivateRoute() ? (
          <>
            <AccountDisplay />
            <NavSection navConfig={sidebarAuthenticated} />
            <Box sx={{height: '15px'}}/>
            <Box sx={{justifyContent: 'center', display: 'flex', width: '92%'}}>
              <Button onClick={logOutUser}>Logout</Button>
            </Box>
          </>
        ) : (
          <NavSection navConfig={sidebarUnauthenticated} />
        ) 
      }
    </div>
  );

  return (
    <div>
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor: '#f5f5f5'}} elevation={0}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }), backgroundColor: 'transparent',
            color: '#367588' }}
          >
            <MenuIcon style={{height: '32px', width: '32px'}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{backgroundColor: 'white'}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{height: '32px', width: '32px', color: '#367588'}} /> : <ChevronRightIcon sx={{height: '32px', width: '32px', color: '#367588'}} />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {renderContent}
      </Drawer>
      <Main open={open} >
        <DrawerHeader />
      </Main>
    </Box>
    </div>
  );
}
