import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();

//this will add the selected books to the cart
export const CartProvider = ({ children }) => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [cartData, setCartData] = useState({});

//add to cart
const addToCart = (book) => {
  const updatedSelectedBooks = [...selectedBooks, book];
  setSelectedBooks(updatedSelectedBooks);

  // Remove individual book properties before sending to the backend
  const booksToSend = updatedSelectedBooks.map(({ book, author, isbn }) => ({ book, author, isbn }));

  // Send selected books to the backend API
  axios.post('http://localhost:8001/store_selected_books', booksToSend) // Replace with your API endpoint
    .then(response => {
      console.log(response.data.message);
    })
    .catch(error => {
      console.error('Error storing selected books:', error);
    });
};

//remove from cart
const removeFromCart = (bookToRemove) => {
    setSelectedBooks((prevSelectedBooks) =>
      prevSelectedBooks.filter((book) => book.isbn !== bookToRemove.isbn)
    );
  };

const totalCheckoutAmount=selectedBooks.length*80+  0.05 * (selectedBooks.length*80)+ 0.02 * (selectedBooks.length*80);

  return (
    <CartContext.Provider value={{ selectedBooks, addToCart, removeFromCart, totalCheckoutAmount, cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
