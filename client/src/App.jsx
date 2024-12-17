import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import ProductPage from './pages/Product';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<HomePage />} />  {/* Home page route */}
        <Route path="/cart" element={<CartPage />} />  {/* Home page route */}
        <Route path="/product" element={<ProductPage />} />  {/* Home page route */}
        <Route path="/login" element={<LoginPage />} />  {/* Home page route */}
        <Route path="/register" element={<RegisterPage />} />  {/* Home page route */}
        <Route path="/success/:amount" element={<Success />} />  {/* Home page route */}
      </Routes>
    </Router>
  );
}

export default App;
