import React from 'react'
import './Newsletter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
    <h2 className="newsletter-title">Newsletter</h2>
    <p className="newsletter-description">
      Get timely updates from your favorite products.
    </p>
    <div className="input-container">
      <input className="newsletter-input" type="email" placeholder="Your email" />
      <button className="newsletter-button">
        <span className="send-icon">&#10148;</span>
      </button>
    </div>
  </div>
);
};

export default NewsLetter