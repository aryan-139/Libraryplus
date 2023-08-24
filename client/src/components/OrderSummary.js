import React from 'react';
import { Box, Divider, Paper, Typography } from '@mui/material';
import { useCart } from '../states/CardContext';

const OrderSummary = ({ storedBooks }) => {
  const { selectedBooks } = useCart();
  //console.log(storedBooks);
  const orderRent = selectedBooks.length * 80;
  const tax = 0.05 * orderRent;
  const convenienceFee = 0.02 * orderRent;
  const totalPayable = orderRent + tax + convenienceFee;

  const formatAmount = (amount) => {
    return amount.toFixed(2); // Formats amount to two decimal places
  };

  const OrderItem = ({ label, value }) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
      <Typography variant="subtitle1">{label}:</Typography>
      <Typography variant="subtitle1">${formatAmount(value)}</Typography>
    </Box>
  );

  return (
    <Paper sx={{ padding: '16px', marginTop: '16px' }}>
      <Typography variant="h6" sx={{ textAlign: 'left', marginBottom: '10px' }}>
        Order Summary
      </Typography>
      {storedBooks.map((book, index) => (
        <OrderItem
          key={index}
          label={book.book}
          value={book.author + ' (ISBN: ' + book.isbn + ')'}
        />
      ))}
      <Divider sx={{ marginTop: '12px' }} />
      <OrderItem label="Rent" value={orderRent} />
      <OrderItem label="Tax" value={tax} />
      <OrderItem label="Convenience Fee" value={convenienceFee} />
      <Divider sx={{ marginTop: '12px' }} />
      <OrderItem label="Total Payable" value={totalPayable} />
    </Paper>
  );
};

export default OrderSummary;
