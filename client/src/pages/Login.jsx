import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation (you can extend this as per your requirements)
    if (!email || !password) {
      setErrorMessage('Please enter both email and password');
    } else {
      // Redirect or show a success message on successful login
      setErrorMessage('');
      try {
        // Make Axios POST request to backend for login
        const response = await axios.post("http://localhost:5000/api/auth/login", {
          email,
          password
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        });

        navigate("/")
        // You can handle the response (e.g., saving JWT in localStorage)

        // Redirect the user or perform additional actions
        // For example: redirect to dashboard or homepage
        // window.location.href = "/dashboard"; // Example redirect

      } catch (error) {
        console.error('Login error:', error);
        setErrorMessage(error.response?.data?.message || 'Something went wrong!');
      }
    }

  }


  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>

              {/* Error message */}
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

              {/* Login form */}
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

              {/* Link to register page */}
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
  );
}

export default LoginPage;
