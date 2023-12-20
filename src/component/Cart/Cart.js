import React, { useState, useEffect } from 'react';
import './Cart.css';
import Order from '../PlacedOrder/Order';
import { useNavigate } from 'react-router-dom';

const Cart = ({ updateCartCount }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate(); // Correctly using useNavigate as a function

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    setCartItems(savedCartItems === null ? [] : savedCartItems);
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.filter((_, index) => index !== indexToRemove);
      setCartItems(updatedCart);
      updateCartCount(updatedCart.length);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      updateCartCount(updatedCart.length);
      return updatedCart;
    });
  };

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0);
    setTotalPrice(total);
  };

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      alert('You need to add items to your cart!');
    } else {
      setOrderPlaced(true);
      navigate('/order');
    }
  }

  return (
    <div className="cart-container">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      {/* Render cart items */}
      {cartItems.map((ct, index) => (
        <div key={index} className="cart-item">
          <img src={ct.image} alt={`Item ${index}`} className="cart-item-image" />
          <div className="cart-item-details">
            <h3 className="cart-item-title">{ct.title}</h3>
            <h3 className="cart-item-price">${ct.price}</h3>
            <button onClick={() => handleRemoveFromCart(index)} className="remove-button">
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total-price">
        <hr />
        <h2>Total Price: ${totalPrice}</h2>
      </div>
      <button onClick={handleBuyNow} className="buy-now-button">
        Buy Now
      </button>
      {orderPlaced && <Order />}
    </div>
  );
};

export default Cart;
