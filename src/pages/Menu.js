import React from 'react';
import './Menu.css'; // Ensure this contains appropriate styling
import { useCart } from '../context/CartContext'; // Global cart management
import { Link } from 'react-router-dom'; // Navigation

function Menu() {
    const { cart = [], addToCart, removeFromCart, totalPrice = 0 } = useCart(); // Default value to prevent undefined errors

    // Menu items
    const foodItems = [
        { id: 1, name: 'pizza', price: 12.99, image: '/images/pizza.jpg' },
        { id: 2, name: 'burger', price: 8.99, image: '/images/burger.jpg' },
        { id: 3, name: 'pasta', price: 10.99, image: '/images/pasta.jpg' },
        { id: 4, name: 'chicken', price: 16.99, image: '/images/chicken.jpg' },
        { id: 5, name: 'fish', price: 13.99, image: '/images/fish.jpg' },
        { id: 6, name: 'egg', price: 6.99, image: '/images/egg.jpg' },
        { id: 7, name: 'cupcake1', price: 4.99, image: '/images/capcake1.jpg' },
        { id: 8, name: ' cupcake2', price: 6.99, image: '/images/capcake2.jpg' },
        { id: 9, name: 'Vegitable', price: 5.99, image: '/images/vegitable.jpg' },
        { id: 10, name: 'juce', price: 6.99, image: '/images/juce.jpg' },
        { id: 11, name: 'fruits', price: 3.99, image: '/images/fruits.jpg' },
        { id: 12, name: 'icecream', price: 2.99, image: '/images/icecream.jpg' },
    ];

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1>Welcome to Our Menu</h1>
                <p>Select your favorite dishes and add them to your cart!</p>
            </header>

            <div className="menu-list">
                {foodItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name} className="menu-item-image" />
                        <div className="menu-item-info">
                            <h3>{item.name}</h3>
                            <p className="menu-item-price">${item.price.toFixed(2)}</p>
                            <button onClick={() => addToCart(item)} className="btn-add-to-cart">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <aside className="cart-section">
                <h2>Your Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul className="cart-items">
                            {cart.map((item) => (
                                <li key={item.id} className="cart-item">
                                    <div className="cart-item-details">
                                        <span>{item.name} (x{item.quantity})</span>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="btn-remove"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="cart-total">
                            <h3>Total: ${totalPrice.toFixed(2)}</h3>
                        </div>
                        <Link to="/checkout" className="btn-checkout">
                            Proceed to Checkout
                        </Link>
                    </>
                )}
            </aside>
        </div>
    );
}

export default Menu;
