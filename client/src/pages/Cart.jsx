import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarAuth from '../component/Navbar/NavAuth';

function CartPage() {
  const navigate = useNavigate();
  const [initialCart, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState('');

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);

    const updatedCartIds = updatedCart.map((item) => item.id);
    localStorage.setItem('cart', JSON.stringify(updatedCartIds));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handlePay = () => {
    const total = getTotalPrice();
    navigate(`/success/${total}`);
  };

  useEffect(() => {
    const cartIds = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartIds.length > 0) {
      axios
        .post('https://ecomm-dlpd.onrender.com/api/auth/get-products', { ids: cartIds })
        .then((response) => {
          setProducts(response.data);
          setCart(response.data);
        })
        .catch((error) => {
          setError('Error fetching products');
          console.error(error);
        });
    }
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarAuth />
      <div className="container py-5 flex-grow-1">
        <h1 className="text-center mb-4">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="alert alert-warning text-center" role="alert">
            Your cart is empty!
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={item.image} alt={item.brand} className="img-thumbnail" width="50" />
                        <span className="ms-3">{item.brand}</span>
                      </div>
                    </td>
                    <td>{item.currency} {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {cart.length > 0 && (
          <div className="d-flex justify-content-between mt-4">
            <h4>Total: ₹{getTotalPrice()}</h4>
            <button className="btn btn-success" onClick={handlePay}>
              Pay Now
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
