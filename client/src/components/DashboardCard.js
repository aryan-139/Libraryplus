import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CustomCard = ({ text, value }) => {
  return (
    <Card
      sx={{
        border: '1px solid #28358C',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: 400, // Adjust the maxWidth to make the card wider
        margin: '0 auto',
        marginTop: '20px',
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
