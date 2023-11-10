import React from 'react';
import '/.Navbhar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <a href="#contact">Contact</a>
        <a href="#terms">Terms and Conditions</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
