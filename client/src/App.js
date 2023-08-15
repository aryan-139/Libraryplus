import { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Summary from './pages/Summary';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import CustomDrawer from './components/Drawer';
import CheckoutPanel from './components/CheckoutPanel';
import { CartProvider } from './states/CardContext';
import Transactions from './pages/Transactions';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme/Theme'; // Import lightTheme and darkTheme

const App = ({ view }) => {
  let content;
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTheme, setCurrentTheme] = useState('light'); // Theme state

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  //change the component based on the view prop
  switch (view) {
    case 'dashboard':
      content = <Dashboard searchQuery={searchQuery}/>;
      break;
    case 'summary':
      content = <Summary/>;
      break;
    case 'checkout':
      content = <Checkout />;
      break;
    case 'transactions':
      content = <Transactions/>;
      break;
    case 'help':
      content = <Checkout />;
      break;
    default:
      content = <Dashboard />;
  }

  return (
    <div>
      <CartProvider>
        <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
          <CssBaseline />
          <Navbar setSearchQuery={setSearchQuery} toggleTheme={toggleTheme} currentTheme={currentTheme} />
          <CustomDrawer />
          {content}
          <CheckoutPanel />
        </ThemeProvider>
      </CartProvider>
    </div>
  );
};

export default App;
