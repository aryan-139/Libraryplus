import React from 'react';
import { Button, Divider, Drawer, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 320;

const RightAlignedDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    marginTop: '3.5%',
    boxSizing: 'border-box',
  },
}));

//update the total number of items in the list dynamically
const updateItemList = () => {
    return "5 Items";
};

const CheckoutPanel = () => {
  return (
   <RightAlignedDrawer variant="permanent" anchor="right" open>
   <Grid container alignItems="center" justifyContent="flex-end" marginTop="13%">
      <Typography variant="h4" sx={{ marginLeft: "3%", textAlign: "left", marginRight: '10px' }}>
        #Checkout
      </Typography>
      <Button variant="contained" sx={{ fontSize: "12px" ,backgroundColor: '#FF6B6B', marginRight:"8px",borderRadius: '30px', marginLeft: 'auto', '&:hover': { backgroundColor: '#FF6B6B' } }}>
        {updateItemList()}
      </Button>
    </Grid>
    
    <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
        {/* Add more ListItems here */}
      </List>

        <Divider />
        <br />

        <Button
      variant="contained"
      sx={{
        backgroundColor: '#1F2348',
        color: 'white',
        borderRadius: '30px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px 20px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: '#28358C',
        },
      }}
    >
      Proceed to Checkout
    </Button>

    </RightAlignedDrawer>
  );
};

export default CheckoutPanel;
