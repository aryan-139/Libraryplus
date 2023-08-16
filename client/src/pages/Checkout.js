import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Divider } from '@mui/material';
import axios from 'axios';
import { useCart } from '../states/CardContext';
import OrderSummary from '../components/OrderSummary';

const CheckoutPage = () => {
  const { selectedBooks } = useCart();

  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [branch, setBranch] = useState('');
  const[contact,setContact]=useState('');
  const[email,setEmail]=useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
        timeBorrowed: new Date(),
        fullName: firstName + ' ' + lastName,
        rollNumber: rollNumber,
        email: email,
        contact: contact,
        branch: branch,
        billingAmount: 80,
        books: selectedBooks,
        returnTime: "Not Returned",
    };

    console.log(formData)

    try {
        const response = await axios.post("http://0.0.0.0:8001/submit", formData);
        if (response.status === 200) {
            console.log("Success");
        } else {
            console.log("Error", response.status);
        }
    } catch (error) {
        console.log("Error", error);
    }
};

  return (
    <div className='calibrate-layout'>
    <Container maxWidth="md">
      <Typography variant="h4" align="left" gutterBottom>
        Checkout
      </Typography>
      <Typography variant="h6" align="left" mt={4} mb={2}> 
        Personal Details
      </Typography>
      <Divider />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}> 
          <TextField
            label="First Name"
            fullWidth
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}> 
          <TextField
            label="Last Name"
            fullWidth
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}> 
          <TextField
            label="Roll Number (Enter in IMH/100XX/XX format)"
            fullWidth
            required
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}> 
          <TextField
            label="Email Address"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}> 
          <TextField
            label="Contact Number"
            fullWidth
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="College Name"
            fullWidth
            required
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Branch" fullWidth required value={branch} onChange={(e) => setBranch(e.target.value)} />
        </Grid>
      </Grid>
      <br />
      <OrderSummary books={selectedBooks} />
      <br/>
      <Button onClick={handleSubmit} variant="contained" sx={{backgroundColor: '#1F2348',color: 'white',borderRadius: '30px',marginLeft: 'auto', padding: '10px 20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s','&:hover': {  backgroundColor: '#28358C',},
        }}
      >
      Make Entry
      </Button>

      <br />
      <br />
    </Container>
    </div>
  );
};

export default CheckoutPage;