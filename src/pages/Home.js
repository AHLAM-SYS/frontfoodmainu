import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <div className="hero">
                <div className="hero-content">
                    <h1>Welcome to Foodie's Paradise</h1>
                    <p>Your one-stop destination for delicious meals, delivered to your doorstep.</p>
                    <Link to="/menu" className="btn-hero">
                        Explore Our Menu
                    </Link>
                </div>
            </div>

            {/* Feature Section */}
            <div className="feature">
                <img src="/images/featured-food.jpg" alt="Featured Food" className="feature-image" />
                <div className="feature-text">
                    <h2>Our Signature Dish</h2>
                    <p>
                        Experience the finest flavors with our signature dish. Crafted with care, fresh ingredients,
                        and a touch of culinary magic, it's the perfect meal to satisfy your cravings.
                    </p>
                    <Link to="/menu" className="btn-feature">
                        Order Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
