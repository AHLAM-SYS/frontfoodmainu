import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleProceedToPayment = () => {
        navigate('/payment');
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Add items to proceed.</p>
            ) : (
                <>
                    <div className="checkout-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="checkout-item">
                                <span>{item.name} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="checkout-total">
                        <h2>Total: ${totalAmount.toFixed(2)}</h2>
                    </div>
                    <button className="btn-proceed" onClick={handleProceedToPayment}>
                        Proceed to Payment
                    </button>
                </>
            )}
        </div>
    );
};

export default Checkout;
