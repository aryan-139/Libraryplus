import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import axios from 'axios'; // Import axios for API calls

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  // Fetch data function
  const fetchData = async () => {
    try {
      const response = await axios.get('http://0.0.0.0:8001/transactions');
      setTransactions(response.data);
      console.log(response.data); // Add this line to see the received data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data on component mount and then every 5 seconds
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const columns = [
    { field: 'entryNumber', headerName: 'Entry Number', flex: 1 },
    { field: 'dateBorrowed', headerName: 'Date Borrowed', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'rollNumber', headerName: 'Roll Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'contact', headerName: 'Contact', flex: 1 },
    { field: 'branch', headerName: 'Branch', flex: 1 },
    { field: 'books', headerName: 'Books', flex: 1 },
    { field: 'amount', headerName: 'Amount', flex: 1 },
    { field: 'dateOfReturn', headerName: 'Date of Return', flex: 1 },
  ];

  return (
    <div className='calibrate-layout'>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <Typography variant='h6'>Transactions</Typography>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={transactions}
          columns={columns}
          pageSize={5}
          onCellClick={(params, event) => {
            if (params.field !== '__check__') {
              setSelectedRow(params.row);
            }
          }}
        />
      </div>
      {selectedRow && <TransactionModal open={selectedRow !== null} data={selectedRow} onClose={() => setSelectedRow(null)} />}
    </div>
  );
};

const TransactionModal = ({ open, data, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Transaction Details</DialogTitle>
      <DialogContent>
        {/* Render the transaction details */}
        <Typography>Entry Number: {data.entryNumber}</Typography>
        {/* Add other fields here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Transactions;
