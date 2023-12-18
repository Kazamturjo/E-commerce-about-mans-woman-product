import React, { useState } from 'react';

const Cart = ({ cart }) => {
  const [cartItems, setCartItems] = useState(cart); // Initialize cart items state

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems(prevCart => prevCart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ marginTop: "20px", color: "black", display: "flex", flexWrap: "wrap" }}>
      {cartItems.map((ct, index) => (
        <div key={index} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", margin: "10px", width: "250px" }}>
          <img src={ct.image} alt={`Item ${index}`} style={{ maxWidth: "100%", height: "auto" }} />
          <h3 style={{ marginTop: "5px", marginBottom: "5px" }}>{ct.title}</h3>
          <p>{ct.description}</p>
          <button onClick={() => handleRemoveFromCart(index)} style={{ marginRight: "5px" }}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
