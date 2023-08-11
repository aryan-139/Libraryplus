import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';
import Button from '@mui/material/Button';

const BookCard = ({ book, author, isbn }) => {
  const MAX_TEXT_LENGTH = 30; // Maximum text length before truncating

  // Function to truncate text if it's too long
  const truncateText = (text) => {
    if (text.length > MAX_TEXT_LENGTH) {
      return text.substring(0, MAX_TEXT_LENGTH) + '...';
    }
    return text;
  };

  return (
    <Card
      sx={{
        border: '1px solid #28358C',
        borderRadius: '12px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        width: 280, // Set a fixed width for each card
        height: 250, // Set a fixed height for each card
        maxWidth: 300,
        margin: '20px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <CardContent>
        <BookIcon sx={{ fontSize: 60, color: '#28358C', marginBottom: '10px' }} />
        <Typography variant="h6" component="div">
          {truncateText(book)}
        </Typography>
        <Typography variant="subtitle1">{truncateText(author)}</Typography>
        <Typography variant="body2" color="text.secondary">
          ISBN: {isbn}
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#28358C', color: 'white', marginTop: '10px' }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;