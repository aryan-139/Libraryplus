import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

//this will add the selected books to the cart
export const CartProvider = ({ children }) => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [cartData, setCartData] = useState({});

//add to cart
  const addToCart = (book) => {
    setSelectedBooks([...selectedBooks, book]);
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
