import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>
                        At Foodie's Paradise, we bring joy to your taste buds with delicious meals delivered to your doorstep.
                        <Link to="/about" className="footer-link"> Learn more.</Link>
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li>
                            <Link to="/" className="footer-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/menu" className="footer-link">Menu</Link>
                        </li>
                        <li>
                            <Link to="/about" className="footer-link">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="footer-link">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: support@foodiesparadise.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Location: 123 Food Street, Flavor Town</p>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Foodie's Paradise. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
