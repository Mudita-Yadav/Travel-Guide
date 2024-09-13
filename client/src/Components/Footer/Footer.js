import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import payments from '../Images/pyment.jpeg';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3 footer-section">
            <h5>TravelGuide</h5>
            <p>Your guide to explore the world’s most beautiful destinations.</p>
            <ul className="footer-links">
              <li>Email: <a href="mailto:info@travelguide.com">info@travelguide.com</a></li>
              <li>Address: A-56 Adventure Road, Travel city, 110043</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>

          <div className="col-md-3 footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-3 footer-section">
            <h5>Support</h5>
            <ul className="footer-links">
              <li><a href='#'>Frequently Asked Questions</a></li>
              <li><a href='#'>Report a Payment Issue</a></li>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="col-md-3 footer-section">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <p className="footer-bottom">© 2024 TravelGuide. All Rights Reserved.</p>
            <div className="payment">
              <img src={payments} alt="Payment Methods" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
