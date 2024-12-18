import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import axios from "axios";
import './Product.css';
import NavbarAuth from '../component/Navbar/NavAuth';

function ProductPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://ecomm-dlpd.onrender.com/api/auth/get-product");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Filter products based on search term by product name (case-insensitive)
  // Filter products based on search term in either the product name or brand (case-insensitive)
  const filteredProducts = products.filter((product) => {
    const lowercasedSearchTerm = searchTerm.trim().toLowerCase();
    return (
      product.name.toLowerCase().includes(lowercasedSearchTerm) ||
      product.brand.toLowerCase().includes(lowercasedSearchTerm)
    );
  });


  const addCart = (product) => {
    // Retrieve the existing cart from localStorage (if it exists)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the product ID to the cart array
    cart.push(product.id);

    // Save the updated cart array back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Cart updated:", cart);
  };

  return (
    <>
      <NavbarAuth />
      <div className="container py-5">
        <h1 className="text-center mb-4">Products</h1>

        {/* Search bar */}
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-secondary" type="button">
                <span className="bx--search-alt"></span>
              </button>
            </div>
          </div>
        </div>




        {/* Product grid */}
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card shadow-sm product-card">
                <img
                  src={product.image}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150?text=No+Image";
                  }}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body product-card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">INR {product.price}</span>
                    <button className="btn btn-primary" onClick={() => addCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No products found */}
        {filteredProducts.length === 0 && (
          <div className="alert alert-warning text-center" role="alert">
            No products found matching your search!
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
