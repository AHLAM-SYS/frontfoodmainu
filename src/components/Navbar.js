import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Foodie's Paradise</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/cart">Go to cart</Link></li>
                <li><Link to="/checkout">Go to Checkout</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
