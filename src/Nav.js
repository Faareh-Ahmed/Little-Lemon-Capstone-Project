import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import littlelemonlogo from './images/Little-lemon-logo.png'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
        <img
            src={littlelemonlogo}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reserve Table</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
