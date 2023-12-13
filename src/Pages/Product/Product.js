import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Product.css';

const Product = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        // Slice the first 4 images from the fetched data
        setImages(res.data.slice(0,8));
      })
      .catch(err => {
        console.error('Error fetching data', err);
      });
  }, []);

  return (
    <div className='image-gallery'>
      {images.map((product, index) => (
        <Link to={`/products/`} key={index} className="card-link">
          <div className="image-card">
            <img src={product.image} alt={product.description} className="card-image" />
            <div className="card-details">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
