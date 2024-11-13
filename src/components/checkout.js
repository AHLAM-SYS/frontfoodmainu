import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './paymentform';

const stripePromise = loadStripe('your-publishable-key'); // Replace with your Stripe publishable key

function Checkout({ totalAmount }) {
    return (
        <Elements stripe={stripePromise}>
            <div className="checkout">
                <h1>Checkout</h1>
                <PaymentForm totalAmount={totalAmount} />
            </div>
        </Elements>
    );
}

export default Checkout;
