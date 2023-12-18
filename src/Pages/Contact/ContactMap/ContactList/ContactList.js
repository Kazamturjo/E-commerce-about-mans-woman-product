import React from 'react'

import './ContactList.css'

const ContactList = () => {
    return (
        <div className="contact-container">
          <h1 className="contact-heading"> Contact Us</h1>
          <div className="map-container">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.425087435653!2d90.48980177533204!3d23.624942978756224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b1c026bee733%3A0xafaba7c7ea331ce4!2sTraideas!5e0!3m2!1sen!2sbd!4v1702540433845!5m2!1sen!2sbd" 
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-frame"
            ></iframe>
          </div>
          <div className="form-container">
            <form
              action="https://formspree.io/f/xzblzzgb"
              method="post"
              className="input-form"
            >
              <input
                className="input-field"
                name="Name"
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                autoComplete="off"
              />
              <input
                className="input-field"
                name="Email"
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                autoComplete="off"
              />
              <textarea
                name="Message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your message"
                required
                autoComplete="off"
              ></textarea>
              <button className="input-field-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    };

export default ContactList