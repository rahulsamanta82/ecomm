import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function NavbarAuth() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [name, setName] = useState("");

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  useEffect(() => {
    const n = localStorage.getItem("name");
    setName(n);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand logo" to="/">
            Trend Mart
          </Link>

          {/* Sidebar Toggle Button (Visible on small screens) */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>

          {/* Full Navigation Menu (Visible on larger screens) */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white hover-effect" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white hover-effect" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white hover-effect" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-light"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
              <li className="nav-item">
                <span style={{ color: "white" }}>
                  {name ? `Hi, ${name}` : "Loading"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar (Visible on small screens) */}
      <div className={`sidebar bg-dark ${sidebarOpen ? "active" : ""}`}>
        <ul className="list-unstyled">
          <li className="nav-item">
            <Link
              className="nav-link text-white hover-effect"
              to="/home"
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white hover-effect"
              to="/product"
              onClick={() => setSidebarOpen(false)}
            >
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white hover-effect"
              to="/cart"
              onClick={() => setSidebarOpen(false)}
            >
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-outline-light w-100"
              onClick={() => {
                setSidebarOpen(false);
                handleLogout();
              }}
            >
              Logout
            </button>
          </li>
          <li className="nav-item mt-2">
            <span style={{ color: "white" }}>
              {name ? `Hi, ${name}` : "Loading"}
            </span>
          </li>
        </ul>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default NavbarAuth;
