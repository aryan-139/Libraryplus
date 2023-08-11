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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
