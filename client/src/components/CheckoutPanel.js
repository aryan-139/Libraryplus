import React from 'react';
import { Button, Divider, Drawer, Grid, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCart } from '../states/CardContext';
import DeleteIcon from '@mui/icons-material/Delete';
import OrderSummary from './OrderSummary';

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

const CheckoutPanel = () => {
  const { selectedBooks, removeFromCart } = useCart();

  const updateItemList = () => {
    return selectedBooks.length + ' ' + 'Items';
  };

  return (
    <RightAlignedDrawer variant="permanent" anchor="right" open>
      <Grid container alignItems="center" justifyContent="flex-end" marginTop="13%">
        <Typography variant="h4" sx={{ marginLeft: '3%', textAlign: 'left', marginRight: '10px' }}>
          #Checkout
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontSize: '12px',
            backgroundColor: '#FF6B6B',
            marginRight: '8px',
            borderRadius: '30px',
            marginLeft: 'auto',
            '&:hover': { backgroundColor: '#FF6B6B' },
          }}
        >
          {updateItemList()}
        </Button>
      </Grid>

      <Divider />

      <List>
        {selectedBooks.map((book, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar onClick={() => removeFromCart(book)}>
                <DeleteIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={book.book} secondary={`ISBN: ${book.isbn}`} />
          </ListItem>
        ))}
      </List>

      <Divider />
      
      <OrderSummary />
      <br />

      <Button className='checkout-button' variant="contained" sx={{backgroundColor: '#1F2348',color: 'white',borderRadius: '30px',marginLeft: 'auto',marginRight: 'auto', padding: '10px 20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s','&:hover': {  backgroundColor: '#28358C',},
        }}
      >
      Submit Order
      </Button>
    </RightAlignedDrawer>
  );
};

export default CheckoutPanel;
