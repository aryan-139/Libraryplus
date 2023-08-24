import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import axios from 'axios';

//return book api hitting and receiving the integer value of days borrowed
const ReturnBook = () => {
  const [entryNumber, setEntryNumber] = useState('');
  const [message, setMessage] = useState(''); // Add a message state
  const [daysBorrowed, setDaysBorrowed] = useState(null);

  const handleReturnSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://0.0.0.0:8001/issue-return/${entryNumber}`);
      const responseData = response.data;
      
      if (responseData.message) {
        setMessage(responseData.message); // Update the message state
      }

      const updatedDaysBorrowed = responseData.daysBorrowed; // Assuming the response has a daysBorrowed field
      console.log(updatedDaysBorrowed);
      
      setDaysBorrowed(updatedDaysBorrowed);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Return Book
        </Typography>
        <Typography variant="body1" gutterBottom>
          Enter the entry number of the borrowed book to return it.
        </Typography>
        {/** the functioning of the submit button */}
        <form onSubmit={handleReturnSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Entry Number"
                fullWidth
                required
                value={entryNumber}
                onChange={(e) => setEntryNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!entryNumber}
              >
                Return Book
              </Button>
            </Grid>
          </Grid>
        </form>

        {daysBorrowed !== null && (
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            Number of days borrowed: {daysBorrowed} days
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default ReturnBook;