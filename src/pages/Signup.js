import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');  // State for username
    const [email, setEmail] = useState('');  // State for email
    const [password, setPassword] = useState('');  // State for password

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission

        try {
            const response = await axios.post('https://backendfood-7.onrender.com/api/signup', {
                username,
                email,
                password,
            });
            console.log('Signup successful', response.data);
            alert('Signup successful!');  // Show an alert or display a success message
        } catch (error) {
            console.error('Signup failed', error.response?.data || error);
            alert(`Signup failed: ${error.response?.data?.message || 'Unknown error'}`);  // Show error message
            //     console.log('Signup successful', response.data);
            // } catch (error) {
            //     console.error('Signup failed', error.response?.data || error);
        }
    };

    return (
        <div className="signup">
            <div className="signup-container">
                <h1>Join Foodie's Paradise</h1>
                <p>Create your account and start ordering your favorite meals today.</p>
                <form className="signup-form" onSubmit={handleSubmit}> {/* Added onSubmit to form */}
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            value={username}  // Bind state to input value
                            onChange={(e) => setUsername(e.target.value)}  // Update state on input change
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}  // Bind state to input value
                            onChange={(e) => setEmail(e.target.value)}  // Update state on input change
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Create a password"
                            value={password}  // Bind state to input value
                            onChange={(e) => setPassword(e.target.value)}  // Update state on input change
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-signup">Sign Up</button>
                </form>
                <div className="signup-footer">
                    <p>Already have an account? <Link to="/login" className="login-link">Login here</Link>.</p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
