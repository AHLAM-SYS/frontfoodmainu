import React, { useState } from 'react';

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();

        if (!cardNumber || !expiry || !cvv) {
            setError('All fields are required.');
            return;
        }

        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            setError('Card number must be 16 digits.');
            return;
        }

        setError('');
        setSuccess(true);
        console.log('Payment processed successfully!');
    };

    return (
        <div className="payment-container">
            <h1>Payment</h1>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">Payment Successful!</div>}
            <form className="payment-form" onSubmit={handlePayment}>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        required
                    />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="expiry">Expiry Date</label>
                        <input
                            type="text"
                            id="expiry"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            placeholder="MM/YY"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input
                            type="text"
                            id="cvv"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="123"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn-submit">Pay Now</button>
            </form>
        </div>
    );
};

export default Payment;
