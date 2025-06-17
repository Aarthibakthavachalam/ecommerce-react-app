import React from 'react';
import './Footer.css';
import logo from '../assets/logo-white.png'; // Update the path as per your folder

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Logo & Text */}
        <div className="footer-column">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Column 2: About */}
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3: Customer Care */}
        <div className="footer-column">
          <h4>Customer Care</h4>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
            <li>Corporate & Bulk Purchasing</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>123, Dummy Street, Bengaluru</p>
          <p>Email: info@example.com</p>
          <p>Phone: +91 676xxxxx</p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
