import { Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useCart } from '../states/CardContext';

const OrderSummary = () => {
    const { selectedBooks, totalCheckoutAmount } = useCart();
    const orderRent = selectedBooks.length * 80;
    const tax = 0.05 * orderRent;
    const convenienceFee = 0.02 * orderRent;
    const totalPayable = orderRent + tax + convenienceFee;
    console.log(totalCheckoutAmount);
    
    const formatAmount = (amount) => {
      return amount.toFixed(2); // Formats amount to two decimal places
    };

    return (
      <Paper sx={{ background: '#f5f5f5', padding: '16px', marginTop: '16px' }}>
        <Typography variant="h6" sx={{ textAlign: 'left', marginBottom: '10px' }}>
          Order Summary
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1">Rent:</Typography>
          <Typography variant="subtitle1">${formatAmount(orderRent)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          <Typography variant="subtitle1">Tax:</Typography>
          <Typography variant="subtitle1">${formatAmount(tax)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          <Typography variant="subtitle1">Convenience Fee:</Typography>
          <Typography variant="subtitle1">${formatAmount(convenienceFee)}</Typography>
        </Box>
        <Divider sx={{ marginTop: '12px' }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
          <Typography variant="subtitle1">Total Payable:</Typography>
          <Typography variant="subtitle1">${formatAmount(totalPayable)}</Typography>
        </Box>
      </Paper>
    );
}

export default OrderSummary;
