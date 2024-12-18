import React from 'react';
import './Home.css';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


// Sample product data array
const products = [
  { id: 1, name: 'Product 1', description: 'This is a great product', price: 19.99, imgSrc: 'https://www.meteorelectrical.com/media/wysiwyg/dev.jpeg' },
  { id: 2, name: 'Product 2', description: 'This is another great product', price: 29.99, imgSrc: 'https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg?auto=webp&quality=75&width=1024' },
  { id: 3, name: 'Product 3', description: 'This product is amazing', price: 39.99, imgSrc: 'https://www.lapcare.com/cdn/shop/files/LGT-423.jpg?v=1723119927&width=2048' },
  { id: 4, name: 'Product 4', description: 'Best value for money', price: 49.99, imgSrc: 'https://www.asus.com/media/global/SKU/90MP01Y6-BKGA00/7vyrfrssqokfseqw.jpg' },
  { id: 1, name: 'Product 1', description: 'This is a great product', price: 19.99, imgSrc: 'https://www.meteorelectrical.com/media/wysiwyg/dev.jpeg' },
  { id: 2, name: 'Product 2', description: 'This is another great product', price: 29.99, imgSrc: 'https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg?auto=webp&quality=75&width=1024' },
  { id: 3, name: 'Product 3', description: 'This product is amazing', price: 39.99, imgSrc: 'https://www.lapcare.com/cdn/shop/files/LGT-423.jpg?v=1723119927&width=2048' },
  { id: 4, name: 'Product 4', description: 'Best value for money', price: 49.99, imgSrc: 'https://www.asus.com/media/global/SKU/90MP01Y6-BKGA00/7vyrfrssqokfseqw.jpg' },
  { id: 1, name: 'Product 1', description: 'This is a great product', price: 19.99, imgSrc: 'https://www.meteorelectrical.com/media/wysiwyg/dev.jpeg' },
  { id: 2, name: 'Product 2', description: 'This is another great product', price: 29.99, imgSrc: 'https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg?auto=webp&quality=75&width=1024' },
  { id: 3, name: 'Product 3', description: 'This product is amazing', price: 39.99, imgSrc: 'https://www.lapcare.com/cdn/shop/files/LGT-423.jpg?v=1723119927&width=2048' },
  { id: 4, name: 'Product 4', description: 'Best value for money', price: 49.99, imgSrc: 'https://www.asus.com/media/global/SKU/90MP01Y6-BKGA00/7vyrfrssqokfseqw.jpg' },
];

function HomePage() {

  const toastMesg = () =>{
    console.log("Come")
    toast.success("Please login")
  }
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <ToastContainer />

      <div className="container flex-grow-1">
        <h1 className="headline">Our Best Products</h1>
        <div className="underline"></div>


        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
              <div className="card shadow-sm border-light">
                <img
                  src={product.imgSrc}
                  className="card-img-top"
                  alt={product.name}
                  style={{ objectFit: 'cover', height: '200px' }} // Ensure the image has a fixed height and aspect ratio
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <h6 className="text-primary">₹{product.price}</h6>
                  <button className="btn btn-primary btn-block" onClick={toastMesg}>Add to Cart</button>
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

export default HomePage;
