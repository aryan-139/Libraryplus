import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import CustomCard from '../components/DashboardCard'
import BookCard from '../components/BookCard';

const Dashboard = () => {
  const cardsData = [
          { text: 'Total Books', value: '1256' },
          { text: 'Total Revenue', value: 'Rs. 5700' },
          { text: 'Total Books Lended', value: '5' },
          { text: 'Average Return Days', value: '29' },
          { text: 'Total Books Lended', value: '5' },
        ];
        const booksData = [
            { book: 'The Alchemist', author: 'Paulo Coelho', isbn: '978-0062315007' },
            { book: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-0061120084' },
            { book: '1984', author: 'George Orwell', isbn: '978-0451524935' },
            { book: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '978-0743273565' },
            { book: 'Pride and Prejudice', author: 'Jane Austen', isbn: '978-0486284736' },
            { book: 'The Catcher in the Rye', author: 'J.D. Salinger', isbn: '978-0316769488' },
            { book: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-0061120084' },
            { book: 'Brave New World', author: 'Aldous Huxley', isbn: '978-0060850524' },
          ];
          

  return (
    <div className='calibrate-layout'>
        <Typography variant='h3'>Dashboard</Typography>
        <Divider />
        {/* Create a FlexBox and align the cards by columns */}
        <Box
      sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px', }}
    >
      {cardsData.map((card, index) => (
        <CustomCard key={index} text={card.text} value={card.value} />
      ))}
    </Box>
    <br />
    <Divider />
    <br />
    <Typography variant='h5'>Available Books</Typography>
    <br />

    <Box
        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}
        >
        {booksData.map((book, index) => (
            <BookCard key={index} book={book.book} author={book.author} isbn={book.isbn} />
        ))}
        </Box>
    

       
    </div>
  )
}

export default Dashboard