import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const BookDetailsModal = ({ open, onClose, book, author, isbn, num_pages, average_rating }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Book Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <strong>Title:</strong> {book}<br />
          <strong>Author:</strong> {author}<br />
          <strong>ISBN:</strong> {isbn}<br/>
          {/* <strong>Number of Pages:</strong> {num_pages}<br/> */}
          <strong>Average Rating:</strong> {average_rating}<br/>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookDetailsModal;
