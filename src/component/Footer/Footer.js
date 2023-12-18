import React from 'react';
import './Footer.css'; // Import your footer CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Our Team</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Testimonials</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><a href="/">Web Design</a></li>
              <li><a href="/">Development</a></li>
              <li><a href="/">Marketing</a></li>
              <li><a href="/">SEO</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <p>123 Street, City</p>
            <p>Email: turjo@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="footer-col">
            <h3>Social</h3>
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              {/* Add more social icons */}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
