import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Toll Free Number : 1800 209 8282</p>
        <p>Missed Call Number: 9512127979</p>
        <p>WhatsApp Number: 96430 06652</p>
      </div>
      <div className="terms-and-conditions">
        <a href="/terms">Terms and Conditions</a>
        <a href="/terms">Privecy & policy</a>


      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
