import React, { useState, useEffect } from 'react';
import './Cart.css'

const Cart = ({updateCartCount}) => {
  const [cartItems, setCartItems] = useState([]);  
   const [totalPrice, setTotalPrice] = useState(0); 

   useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    setCartItems(savedCartItems === null ? []: savedCartItems)
   
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


  return (
    <div className="cart-container">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      {cartItems.map((ct, index) => (
        <div key={index} className="cart-item">
          <img src={ct.image} alt={`Item ${index}`} className="cart-item-image" />
          <div className="cart-item-details">
            <h3 className="cart-item-title">{ct.title}</h3>
            <h3 className="cart-item-price">${ct.price}</h3>
            {/* <div className="cart-item-description">

            <p >{ct.description}</p>
            </div> */}
            <button onClick={() => handleRemoveFromCart(index)} className="remove-button">Remove</button>
          </div>
        </div>
      ))}
      <div className="total-price">
        <hr/>
        <h2>Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default Cart;
