import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Trend Mart</h5>
            <p>&copy; 2024 Trend Mart, All Rights Reserved</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h6>Follow Us</h6>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a href="https://facebook.com" target="_blank" className="text-white"><i className="bi bi-facebook"></i> Facebook</a></li>
              <li className="ms-3"><a href="https://twitter.com" target="_blank" className="text-white"><i className="bi bi-twitter"></i> Twitter</a></li>
              <li className="ms-3"><a href="https://instagram.com" target="_blank" className="text-white"><i className="bi bi-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
