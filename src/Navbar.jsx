import React from 'react';
import './Navbar.css';


function Navbar(){
    return(
      <div className="navbar-container">
      <nav className="navbar">
        <a className="nav-item active" href="#">Home</a>
        <a className="nav-item" href="#">Products</a>
        <a className="nav-item" href="#">Services</a>
        <a className="nav-item" href="#">Team</a>
        <a className="nav-item" href="#">Portfolio</a>
        <a className="nav-item" href="#">Blog</a>
        <a className="nav-item" href="#">Contact</a>
        <a className="nav-item" href="#">Go my Blog</a>
      </nav>
    </div>
  );
}

      

export default Navbar;



