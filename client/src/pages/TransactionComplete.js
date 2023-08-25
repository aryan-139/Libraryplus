import React from 'react';
import { Button, Container, Paper, Typography } from '@mui/material';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ReceiptDocument from '../components/ReceiptDocument';
import { useCart } from '../states/CardContext';

const TransactionComplete = () => {
  const { cartData,selectedBooks } = useCart();
  
  console.log(cartData);
  // Sample metrics data (replace with actual data)
  const metrics = {
    fullName: '',
    rollNumber: '',
    email: '',
    contact: '',
    branch: '',
    billingAmount: 0,
    books: selectedBooks || [], // Use selectedBooks from cartData or an empty array
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Transaction Complete
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Thank you for your purchase!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your transaction has been successfully completed. Here are your transaction details:
        </Typography>

        {/* Display Metrics */}
        <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
          Transaction Details:
        </Typography>
        <Typography variant="body1">
          Full Name: {metrics.fullName}
          <br />
          Roll Number: {metrics.rollNumber}
          <br />
          Email: {metrics.email}
          <br />
          Contact: {metrics.contact}
          <br />
          Branch: {metrics.branch}
          <br />
          Billing Amount: ${metrics.billingAmount}
          <br />
          Books: {metrics.books.length > 0 ? metrics.books.join(', ') : 'No books selected'}
        </Typography>

        {/* PDF Download Link */}
        <PDFDownloadLink
          document={<ReceiptDocument metrics={metrics} />}
          fileName="transaction_receipt.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Generating PDF...' : <Button variant="contained">Download Receipt (PDF)</Button>
          }
        </PDFDownloadLink>

        {/* PDF Viewer */}
        <PDFViewer width="100%" height="600px">
          <ReceiptDocument metrics={metrics} />
        </PDFViewer>
      </Paper>
    </Container>
  );
};

export default TransactionComplete;
