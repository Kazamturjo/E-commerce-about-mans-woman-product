import React, { useState, useEffect } from 'react';
import { Link, useParams, NavLink, Outlet } from 'react-router-dom';
import './ProductID.css';
import axios from 'axios';

const ProductID = ({setCart,cart}) => {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#161616',
  };
  const { id } = useParams();
  const [current, setCurrent] = useState(null);
 

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setCurrent(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data', err);
      });
  }, [id]);

  const addToCart = (current) => {


    current.quantity=1
   
      setCart(prev => [...prev,current]);
    
  };

  return (
    <>
      <Link to="/product" relative="path" className="back-button">
        &larr;<span>Back to all products</span>
      </Link>
      {current ? (
        <div className="ID-container">
          <div className="">
            <img src={current.image} style={{ width: '300px', margin: '20px' }} />
            <div className="host-van-detail-info-text">
              <i>{current.category}</i>
            </div>
          </div>
          <nav className="detail-nav">
            <NavLink to="." style={({ isActive }) => (isActive ? activeStyles : null)}>
              Details
            </NavLink>
            <NavLink to="pricing" style={({ isActive }) => (isActive ? activeStyles : null)}>
              Pricing
            </NavLink>
          </nav>

          {/* Add to Cart button */}
          <button onClick={() =>addToCart(current)}>Add to Cart</button>

          <Outlet context={{ current }} />
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
};

export default ProductID;
