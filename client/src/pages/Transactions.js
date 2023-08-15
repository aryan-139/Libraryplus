import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  // Placeholder data
  const sampleData = [
    {
      id: 1,
      entryNumber: '123',
      dateBorrowed: '2023-08-15',
      name: 'John Doe',
      rollNumber: 'A123',
      email: 'john@example.com',
      contact: '1234567890',
      branch: 'Computer Science',
      books: 'Book 1, Book 2',
      amount: '$50',
      dateOfReturn: '2023-08-25',
    },
    // Add more sample data items here
  ];

  useEffect(() => {
    // Fetch data from backend API here
    // For now, using sampleData as placeholder
    setTransactions(sampleData);
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
        <DataGrid rows={transactions} columns={columns} pageSize={5} />
      </div>
    </div>
  );
};

export default Transactions;
