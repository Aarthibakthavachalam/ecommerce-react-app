import {Link} from 'react-router-dom';
 import './Navbar.css';
 import navbarlogo from '../assets/logo-white.png';


function Navbar() {


  return (

    <nav className="navbar">
       <img src={navbarlogo} alt="Logo" className="navbar-logo" />
      <div className="navbar-container">

            <Link to="/" className="navbar-link">Home</Link>
         
            <Link to="/shop" className="navbar-link">Shop</Link>
        
            <Link to="/cart" className="navbar-link">Cart</Link>
        
            <Link to="/user" className="navbar-link">User</Link>
      </div>
    </nav>
  );
}

export default Navbar;
// import React from 'react';