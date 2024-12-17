import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate for programmatic navigation

function Navbar() {
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Handle Logout
  const handleLogout = () => {
    // Clear the localStorage or any session-related data (such as token)
    localStorage.removeItem("userToken"); // Remove any stored token or session data
    navigate("/login"); // Redirect to the homepage (or you can redirect to the login page)
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo with image */}
        <Link className="navbar-brand" to="/">
          {/* <img src="https://via.placeholder.com/40" alt="Logo" className="d-inline-block align-text-top" /> */}
          Trend Mart
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>
            {/* Logout Button */}
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
