import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App view="dashboard" />} /> {/* Route for home */}
        <Route path="/summary" element={<App view="summary" />} /> {/* Route for summary */}
        <Route path="/checkout" element={<App view="checkout" />} /> {/* Route for checkout */}
        <Route path="/transactions" element={<App view="transactions" />} />
        <Route path="/help" element={<App view="help" />} />
        <Route path="/paymentsuccessful" element={<App view="paid" />} />
        <Route path="/return" element={<App view="return" />} />
        <Route path="/setrent" element={<App view="rent" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
