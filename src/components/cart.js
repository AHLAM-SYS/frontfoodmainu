import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <span>{item.name} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <h2>Total: ${totalAmount.toFixed(2)}</h2>
                    </div>
                    <button className="btn-checkout" onClick={handleCheckout}>
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
