import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';
import Button from '@mui/material/Button';
import { useCart } from '../states/CardContext';
import BookDetailsModal from './BookDetailsModal';

const BookCard = ({ book, author, isbn, num_pages ,average_rating }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const MAX_TEXT_LENGTH = 30; // Maximum text length before truncating
  // Function to truncate text if it's too long
  const truncateText = (text) => {
    if (text.length > MAX_TEXT_LENGTH) {
      return text.substring(0, MAX_TEXT_LENGTH) + '...';
    }
    return text;
  };

  const { selectedBooks, addToCart, removeFromCart } = useCart();
  const isInCart=selectedBooks.some((selectedBook) => selectedBook.isbn === isbn);

  return (
    <Card
      sx={{
        maxWidth: 300,
        border: '1px solid #28358C',
        borderRadius: '12px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
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
          onClick={() => addToCart({ book, author, isbn })}
        >
          Add to Cart
        </Button>

        {/**The learn more modal */}
        <Button
          variant="outlined"
          sx={{ marginTop: '10px', marginLeft:"5px" }}
          onClick={() => setIsModalOpen(true)} // Open the modal on button click
        >
          Learn More
        </Button>
      </CardContent>
      {/* Pass book details to the BookDetailsModal */}
      <BookDetailsModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close the modal
        book={book}
        author={author}
        isbn={isbn}
        num_pages={num_pages}
        average_rating={average_rating}
      />

    </Card>
  );
};

export default BookCard;
