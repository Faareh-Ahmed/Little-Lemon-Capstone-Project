import React from 'react';
import './Footer.css';
import footerLogo from './footer-logo.png';

function Footer() {
  return ( 
    <footer>
      <div className="logo-container">
        <div className="logo">
          <img src={footerLogo} alt="Little Lemon Logo" />
        </div>
        <div className="contact-container">
          <div className="contact">
            <h3>Contact Us</h3>
            <p>123 Main Street</p>
            <p>Chicago, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: littlelemon@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="social">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
        </ul>
      </div>
      <nav className="doormat">
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="about">About Us</a></li>
          <li><a href="Menu">Our Menu</a></li>
          <li><a href="Reservation">Reserve a Table</a></li>
          <li><a href="OrderOnline">Online Order</a></li>
          <li><a href="Login">Login</a></li>
        </ul>
      </nav>
      <p className="copy">&copy; 2023 Little Lemon</p>
    </footer>
  );
}

export default Footer;
