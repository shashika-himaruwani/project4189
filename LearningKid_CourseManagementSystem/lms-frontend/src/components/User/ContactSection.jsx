import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="section contact" data-section="section6" id="section6">
      <div className="container">
        <div className="section-heading">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us through any of the following methods. We'd love to hear from you!</p>
        </div>
        <div className="contact-details">
          <div className="details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>Email: <a href="mailto:contact@example.com">sendhimaruwani@gmail.com</a></p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>Phone: +123 456 7890</p>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <p>LinkedIn: <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">linkedin.com/in/example</a></p>
            </div>
            <div className="contact-item">
              <i className="fab fa-facebook"></i>
              <p>Facebook: <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">facebook.com/example</a></p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" className="form-control" placeholder="Your Name" required />
          <input type="email" className="form-control" placeholder="Your Email" required />
          <textarea className="form-control" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="button">Send Message</button>
        </form>

        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.932679654592!2d80.66198771603286!3d6.278498595439424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f5c28e6c0f%3A0x9bada23c8d6d0d84!2sWeeraketiya%20Elenine!5e0!3m2!1sen!2slk!4v1694287394717!5m2!1sen!2slk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Weeraketiya Elenine Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
