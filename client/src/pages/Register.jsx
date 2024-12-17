import React, { useState } from 'react';
import axios from "axios"
function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log("Come")
    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required');
      setSuccessMessage('');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setSuccessMessage('');
    } else {
      // Successful registration

      try {
        const response = await axios.post("http://localhost:5000/api/auth/register", {
          name,
          email,
          password
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        });
    
        // Successfully registered
        console.log(response.data);
        alert(response.data.message); // Display success message
    
      } catch (error) {
        console.error("There was an error registering!", error);
        alert(error.response?.data?.message || "Something went wrong!");
      }
      setErrorMessage('');
      setSuccessMessage('Registration successful! You can now log in.');
      // Clear form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register</h3>

              {/* Error message */}
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

              {/* Success message */}
              {successMessage && <div className="alert alert-success">{successMessage}</div>}

              {/* Registration form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
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
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>

              {/* Link to login page */}
              <div className="mt-3 text-center">
                <p>
                  Already have an account? <a href="/login">Login here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
