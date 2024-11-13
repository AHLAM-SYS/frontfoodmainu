import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email,
                password,
            });
            console.log('Login successful');
            alert('Login successful!');  // Show an alert or display a success message
        } catch (error) {
            console.error('Login failed', error.response?.data || error);
            alert(`Login failed: ${error.response?.data?.message || 'Unknown error'}`);
            //     localStorage.setItem('token', response.data.token); // Store JWT token
            //     console.log('Login successful');
            // } catch (error) {
            //     console.error('Login failed', error.response?.data || error);
        }
    };

    return (
        <div className="login">
            <div className="login-container">
                <h1>Welcome Back!</h1>
                <p>Login to access your account and explore our delicious menu.</p>
                <form className="login-form" onSubmit={handleSubmit}> {/* Added onSubmit to form */}
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
                            placeholder="Enter your password"
                            value={password}  // Bind state to input value
                            onChange={(e) => setPassword(e.target.value)}  // Update state on input change
                            required
                        />
                    </div>
                    <button type="submit" className="btn-login">Login</button>
                </form>
                <div className="login-footer">
                    <p>Don't have an account? <Link to="/signup" className="signup-link">Sign up here</Link>.</p>
                    <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
