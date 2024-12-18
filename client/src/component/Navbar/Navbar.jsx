import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand logo" to="/">
            Trend Mart
          </Link>
          {/* Toggle Button for Sidebar */}
          <button className="btn btn-dark d-lg-none" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* Normal Navbar for Larger Screens */}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white hover-effect" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white hover-effect" to="/login">
                  <FaUserAlt className="nav-icon" /> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white hover-effect" to="/register">
                  <FaUserAlt className="nav-icon" /> Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login" onClick={toggleSidebar}>
              <FaUserAlt className="nav-icon" /> Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register" onClick={toggleSidebar}>
              <FaUserAlt className="nav-icon" /> Register
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link text-white" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Navbar;
 