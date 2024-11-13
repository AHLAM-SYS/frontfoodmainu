import React from 'react';

function About() {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>
                Welcome to <strong>Foodie's Paradise</strong> — your ultimate destination for delicious meals delivered straight to your doorstep!
                Our goal is to make food ordering fast, convenient, and enjoyable.
            </p>

            <div className="about-section">
                <h2>Our History</h2>
                <p>
                    Founded in 2020, Foodie's Paradise began as a small team of food enthusiasts with a big dream:
                    to connect people with their favorite meals from the comfort of their homes. Over the years, we've partnered with
                    hundreds of restaurants to bring you a diverse menu of cuisines, from local favorites to international delicacies.
                </p>
            </div>

            <div className="about-section">
                <h2>Our Mission</h2>
                <p>
                    We believe food is more than just sustenance — it's an experience!
                    Our mission is to deliver joy, one meal at a time, while supporting local businesses and ensuring quality at every step.
                </p>
            </div>

            <div className="about-section">
                <h2>Meet the Team</h2>
                <div className="team">
                    <div className="team-member">
                        <img src="/images/manager.jpg" alt="CEO" />
                        <h3>Jane Doe</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div className="team-member">
                        <img src="/images/chieff.jpg" alt="Head Chef" />
                        <h3>John Smith</h3>
                        <p>Head Chef</p>
                    </div>
                    <div className="team-member">
                        <img src="/images/chief.jpg" alt="CTO" />
                        <h3>Emily Brown</h3>
                        <p>Chief Technology Officer</p>
                    </div>
                </div>
            </div>

            <p>
                At Foodie's Paradise, we’re committed to making every meal memorable. Thank you for being a part of our journey!
            </p>
        </div>
    );
}

export default About;
