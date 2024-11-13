import React from 'react';

function Contact() {
    return (
        <div className="contact">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>
                    Have questions, feedback, or just want to say hello? We’d love to hear from you!
                </p>
            </div>

            <div className="contact-container">
                {/* Contact Form */}
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn-submit">Submit</button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="contact-map">
                    <h2>Find Us Here</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18..."
                        width="100%"
                        height="200"
                        style={{ border: 0, borderRadius: '5px' }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Maps"
                    ></iframe>
                    <p>Map Placeholder</p>
                </div>
                <p>123 Food Street, Flavor Town</p>
            </div>
        </div>

    );
}

export default Contact;
