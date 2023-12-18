import React, { useState } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css"

const Navbar = ({cart}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const selectedProduct = {
    id: 1,
    name: 'Example Product',
  };
console.log(cart)
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <Link className="logo" to='/'>Your Logo</Link>
      <button className="toggle-button" onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/kazam">Contact</NavLink></li>
        <li>
          <NavLink to="/cart">
            <ShoppingCartIcon aria-label="cart">
            </ShoppingCartIcon>
            <span className="cart-item-count">{cart?.length}</span>
          </NavLink>
        </li>
        {/* Button/icon for adding to cart */}
        
      </ul>
    </nav>
  );
};

export default Navbar;
