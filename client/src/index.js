import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import './index.css';
import App from './App';
import Summary from './pages/Summary';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} /> {/* Route for home */}
        <Route path="/summary" element={<Summary />} /> {/* Route for summary */}
        <Route path="/checkout" element={<Checkout />} /> {/* Route for checkout */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
