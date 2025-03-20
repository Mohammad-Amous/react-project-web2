// src/components/PopularDestinations.jsx
import React from 'react';
import CardsContainer from '../assets/CardsContainer.png';
import './PopularDestinations.css';

const PopularDestinations = () => {
  return (
    <div className="popular-destinations">
      <div className="header">
        <div className="titles">
          <span className="plan-trip">Plan your next trip</span>
          <h2>Most Popular Destinations</h2>
        </div>
        <a href="#" className="view-all">View all destinations →</a>
      </div>
      <div className="destination-image">
        <img src={CardsContainer} alt="Popular Destinations" />
      </div>
    </div>
  );
};

export default PopularDestinations;