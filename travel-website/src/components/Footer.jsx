import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <h1>FickleFlight</h1>
          <p>
            Fickle Flight is your one-stop travel portal. We offer hassle-free flight and hotel bookings. We also have all your flight needs in your online shop.
          </p>
          <div className="icons">
            <FaFacebook className="icon" />
            <ImInstagram className="icon" />
            <AiFillTwitterCircle className="icon" />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Support</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>About Us</td>
              <td>Account</td>
              <td>Covid Advisory</td>
            </tr>
            <tr>
              <td>News</td>
              <td>Support Center</td>
              <td>Airline Fees</td>
            </tr>
            <tr>
              <td>Careers</td>
              <td>FAQ</td>
              <td>Tips</td>
            </tr>
            <tr>
              <td>How we work</td>
              <td>Accessibility</td>
              <td>Quarantine Rules</td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
};

export default Footer;