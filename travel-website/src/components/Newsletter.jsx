import React from 'react';
import './Newsletter.css';
import SubscribeSection from '../assets/Subscribesection.png'; // تأكد من المسار الصحيح

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <img src={SubscribeSection} alt="Subscribe Background" className="background-image" />
      <div className="newsletter-content-wrapper">
        <div className="newsletter-header">
          <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
          <p className="updates">Get weekly updates</p>
        </div>
        <div className="newsletter-content">
          <p className="join-party">Fill in your details to join the party!</p>
          <form className="newsletter-form">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;