import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get URL parameters

function Success() {
  const { amount } = useParams(); // Get the amount from the URL parameter
  const [transactionId, setTransactionId] = useState('');

  // Function to generate a random transaction ID
  const generateTransactionId = () => {
    return 'TXN' + Math.floor(Math.random() * 1000000000); // Random 9-digit transaction ID
  };

  useEffect(() => {
    setTransactionId(generateTransactionId());
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm border-success">
            <div className="card-body text-center">
              {/* Success Icon */}
              <h1 className="text-success">
                <i className="bi bi-check-circle"></i>
              </h1>
              <h2 className="card-title text-success">Payment Successful!</h2>
              <p className="card-text">Thank you for your purchase. Your transaction was successful.</p>

              {/* Transaction Details */}
              <div className="mt-4">
                <h5>Transaction Details</h5>
                <p><strong>Transaction ID:</strong> {transactionId}</p>
                <p><strong>Amount Paid:</strong> Rs. {amount}</p>
              </div>

              {/* Return to Home Button */}
              <a href="/home" className="btn btn-success mt-4">
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
