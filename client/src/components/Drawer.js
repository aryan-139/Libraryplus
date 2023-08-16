import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TransactionsIcon from '@mui/icons-material/AccountBalanceWallet';
import HelpIcon from '@mui/icons-material/Help';
import ReturnBookIcon from '@mui/icons-material/ArrowBack';
import RentFinesIcon from '@mui/icons-material/Money';

const drawerWidth = 290;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: drawerWidth,
  }),
);

const CustomDrawer = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop: '3.5%',
            backgroundColor: '#1F2348',
          },
        }}
        variant="permanent"
        anchor="left"
        open
      >
        <List sx={{ color: 'white' }}>
          {/**Dashboard ListItems */}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/" sx={{ '&:hover': { backgroundColor: '#28358C' } }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <DashboardIcon sx={{ color: 'inherit' }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ color: 'inherit' }} />
            </ListItemButton>
          </ListItem>
          {/**Transactions ListItems */}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/transactions" sx={{ '&:hover': { backgroundColor: '#28358C' } }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <TransactionsIcon sx={{ color: 'inherit' }} />
              </ListItemIcon>
              <ListItemText primary="Transactions" sx={{ color: 'inherit' }} />
            </ListItemButton>
          </ListItem>
          {/**Return Book ListItems */}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/return-book" sx={{ '&:hover': { backgroundColor: '#28358C' } }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <ReturnBookIcon sx={{ color: 'inherit' }} />
              </ListItemIcon>
              <ListItemText primary="Return Book" sx={{ color: 'inherit' }} />
            </ListItemButton>
          </ListItem>
          {/**Rent/Fines ListItems */}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/rent-fines" sx={{ '&:hover': { backgroundColor: '#28358C' } }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <RentFinesIcon sx={{ color: 'inherit' }} />
              </ListItemIcon>
              <ListItemText primary="Rent/Fines" sx={{ color: 'inherit' }} />
            </ListItemButton>
          </ListItem>
          {/**Help ListItems */}
          <ListItem disablePadding>
          <ListItemButton component={Link} to="/help" sx={{ '&:hover': { backgroundColor: '#28358C' } }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <HelpIcon sx={{ color: 'inherit' }} />
            </ListItemIcon>
            <ListItemText primary="Help" sx={{ color: 'inherit' }} />
          </ListItemButton>
        </ListItem>
        
        </List>
      </Drawer>
    </Box>
  );
};

export default CustomDrawer;
