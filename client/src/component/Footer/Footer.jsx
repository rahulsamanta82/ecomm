import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Company Info Section */}
          <div className="col-md-3 mb-3">
            <h5>Trend Mart</h5>
            <p>Shop the latest trends with us! Your one-stop solution for fashion, electronics, and more.</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-2 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/about-us" className="text-white">About Us</a></li>
              <li><a href="/shop" className="text-white">Shop</a></li>
              <li><a href="/contact-us" className="text-white">Contact</a></li>
              <li><a href="/terms" className="text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="col-md-3 mb-3">
            <h6>Customer Service</h6>
            <ul className="list-unstyled">
              <li><a href="/faq" className="text-white">FAQ</a></li>
              <li><a href="/" className="text-white">Returns</a></li>
              <li><a href="/shipping" className="text-white">Shipping Info</a></li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div className="col-md-2 mb-3">
            <h6>Contact Us</h6>
            <ul className="list-unstyled">
              <li><a href="mailto:support@trendmart.com" className="text-white">Email: support@trendmart.com</a></li>
              <li><a href="tel:+1234567890" className="text-white">Phone: +91 5354-9763</a></li>
            </ul>
          </div>

          {/* Follow Us & Creative Us Section */}
          <div className="col-md-2 mb-3">
            <h6>Follow Us</h6>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a href="https://facebook.com" target="_blank" className="text-white">
                  <i className="bi bi-facebook" style={{ fontSize: '20px' }}></i>
                </a>
              </li>
              <li className="ms-3">
                <a href="https://twitter.com" target="_blank" className="text-white">
                  <i className="bi bi-twitter" style={{ fontSize: '20px' }}></i>
                </a>
              </li>
              <li className="ms-3">
                <a href="https://instagram.com" target="_blank" className="text-white">
                  <i className="bi bi-instagram" style={{ fontSize: '20px' }}></i>
                </a>
              </li>
              <li className="ms-3">
                <a href="https://linkedin.com" target="_blank" className="text-white">
                  <i className="bi bi-linkedin" style={{ fontSize: '20px' }}></i>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="row mt-0">
          <div className="col-12 text-center">
            <p>&copy; 2024 Made with ❤️ by Trend Mart Team | All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
