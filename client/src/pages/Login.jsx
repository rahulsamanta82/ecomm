import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please enter both email and password');
    } else {
      setErrorMessage('');
      try {
        const response = await axios.post("https://ecomm-dlpd.onrender.com/api/auth/login", {
          email,
          password
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        });

        localStorage.setItem("name", response.data.user.name);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
        toast.success("Login Successfully");
      } catch (error) {
        toast.error("Internal Server Error...");
        setErrorMessage(error.response?.data?.message || 'Something went wrong!');
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <ToastContainer />
      <div style={{ flex: 1 }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-center mb-4">Login</h3>

                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Login</button>
                  </form>

                  <div className="mt-3 text-center">
                    <p>
                      Don't have an account? <a href="/register">Register here</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
