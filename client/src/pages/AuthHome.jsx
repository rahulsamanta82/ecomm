import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import NavbarAuth from '../component/Navbar/NavAuth';
import axios from 'axios';


// Sample product data array

function AuthHome() {
  const images = [
    "https://www.asus.com/media/global/SKU/90MP01Y6-BKGA00/7vyrfrssqokfseqw.jpg",
    "https://www.lapcare.com/cdn/shop/files/LGT-423.jpg?v=1723119927&width=2048",
    "https://www.asus.com/media/global/SKU/90MP01Y6-BKGA00/7vyrfrssqokfseqw.jpg",
    "https://www.asus.com/media/global/SKU/90MP01Y6-BKGA00/7vyrfrssqokfseqw.jpg",

  ];

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/get-product");
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
    <div className="d-flex flex-column min-vh-100">
      <NavbarAuth />

      <div
  id="imageCarousel"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="3000" // Adjust the interval (3000ms = 3 seconds)
>
  <div className="carousel-inner">
    {images.map((image, index) => (
      <div
        className={`carousel-item ${index === 0 ? "active" : ""}`}
        key={index}
      >
        <img
          src={image}
          className="d-block w-100"
          alt={`Slide ${index + 1}`}
        />
      </div>
    ))}
  </div>

  {/* Carousel Controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#imageCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#imageCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>





      <div className="container flex-grow-1">
        <h1 className="headline">Our Best Products</h1>
        <div className="underline"></div>


        <div className="row">
          {products
          .map((product) => (
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

      </div>

      <Footer />
    </div>
  );
}

export default AuthHome;
