// Navbar.js
import React, { useState } from 'react';
import './Header.css';
import { NavLink,Link } from 'react-router-dom';
import "./Header.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <Link className="logo" to='/'>Your Logo</Link>
      <button className="toggle-button" onClick={toggleNavbar}>
        ☰ {/* Hamburger icon */}
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
       
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Product</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
