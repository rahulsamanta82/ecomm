// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate for programmatic navigation

// function Navbar() {
//   const navigate = useNavigate(); // Initialize useNavigate hook for navigation

//   // Handle Logout
//   const handleLogout = () => {
//     // Clear the localStorage or any session-related data (such as token)
//     localStorage.removeItem("userToken"); // Remove any stored token or session data
//     navigate("/login"); // Redirect to the homepage (or you can redirect to the login page)
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         {/* Logo with image */}
//         <Link className="navbar-brand" to="/">
//           {/* <img src="https://via.placeholder.com/40" alt="Logo" className="d-inline-block align-text-top" /> */}
//           Trend Mart
//         </Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/cart">Cart</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/product">Product</Link>
//             </li>
//             {/* Logout Button */}
//             <li className="nav-item">
//               <button className="btn btn-danger" onClick={handleLogout}>
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React from 'react';
// import './Navbar.css'; 
// import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate for programmatic navigation

// function Navbar() {
//   const navigate = useNavigate(); // Initialize useNavigate hook for navigation

//   // Handle Logout
//   const handleLogout = () => {
//     // Clear the localStorage or any session-related data (such as token)
//     localStorage.removeItem("userToken"); // Remove any stored token or session data
//     navigate("/login"); // Redirect to the homepage (or you can redirect to the login page)
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
//       <div className="container">
//         {/* Logo with image */}
//         <Link className="navbar-brand text-white fw-bold" to="/">
//           Trend Mart
//         </Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link text-white hover:text-primary" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white hover:text-primary" to="/cart">Cart</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white hover:text-primary" to="/product">Product</Link>
//             </li>
//             {/* Logout Button */}
//             <li className="nav-item">
//               <button className="btn btn-outline-light" onClick={handleLogout}>
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import './Navbar.css'; 
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate for programmatic navigation
import { FaShoppingCart } from 'react-icons/fa'; // For cart icon
import { FaUserAlt } from 'react-icons/fa'; // For user login icon

function Navbar() {
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Remove any stored token or session data
    navigate("/login"); // Redirect to the login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand logo" to="/">
          Trend Mart
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home Link */}
            <li className="nav-item">
              <Link className="nav-link text-white hover-effect" to="/">Home</Link>
            </li>
            {/* Product Link */}
            <li className="nav-item">
              <Link className="nav-link text-white hover-effect" to="/login">
              <FaUserAlt className="nav-icon" />Login</Link>
            </li>
            {/* Login Link */}
            <li className="nav-item">
              <Link className="nav-link text-white hover-effect" to="/register">
                <FaUserAlt className="nav-icon" />
                Register
              </Link>
            </li>
            {/* Cart Link */}
           
            {/* Logout Button (Conditional) */}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
