import { Box, Divider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CustomCard from '../components/DashboardCard'
import BookCard from '../components/BookCard';
import { useCart } from '../states/CardContext';

const Dashboard = () => {
  const cardsData = [
          { text: 'Total Books', value: '1256' },
          { text: 'Total Revenue', value: 'Rs. 5700' },
          { text: 'Total Books Lended', value: '5' },
          { text: 'Average Return Days', value: '29' },
          { text: 'Total Books Lended', value: '5' },
        ];
        
  const { selectedBooks } = useCart();
  //console.log(selectedBooks);

  const [booksData, setBooksData] = React.useState([]); // State to hold the fetched books data

  

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch('http://localhost:8001/books'); 
        if (response.ok) {
          const data = await response.json();
          setBooksData(data);
          //console.log(data.message.num_pages);
        } else {
          console.error('Failed to fetch books data');
        }
      } catch (error) {
        console.error('Error while fetching books:', error);
      }
    }

    fetchBooks();
  }, []);

  console.log(booksData);
  

  return (
    <div className='calibrate-layout'>
        <Typography variant='h3'>Dashboard</Typography>
        <Divider />
        {/* Create a FlexBox and align the cards by columns */}
        <Box
      sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1px', }}
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
  sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0px',
    flexWrap: 'wrap',
  }}
>
{Array.isArray(booksData.message) && booksData.message.map((book, index) => (
    <BookCard
      key={index}
      book={book.title}
      author={book.authors}
      isbn={book.isbn}
      num_pages={book.num_pages}
      average_rating={book.average_rating}
    />
  ))}

</Box>
    
    </div>
  )
}

export default Dashboard