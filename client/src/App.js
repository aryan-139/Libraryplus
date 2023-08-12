import { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Summary from './pages/Summary';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import CustomDrawer from './components/Drawer';
import CheckoutPanel from './components/CheckoutPanel';
import { CartProvider } from './states/CardContext';

const App = ({ view }) => {
  let content;

  //change the component based on the view prop
  switch (view) {
    case 'dashboard':
      content = <Dashboard />;
      break;
    case 'summary':
      content = <Summary/>;
      break;
    case 'checkout':
      content = <Checkout />;
      break;
    case 'transactions':
      content = <Checkout />;
      break;
    case 'help':
      content = <Checkout />;
          break;
    default:
      content = <Dashboard />;
  }

  return(
    <div>
      <CartProvider>
      <Navbar />
      <CustomDrawer />
      {content}
      <CheckoutPanel />
      </CartProvider>
    </div>
  )
};


export default App;
