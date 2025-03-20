// src/components/RecommendedHolidays.jsx
import React from 'react';
import PalawanImage from '../assets/PalawanImage.png';
import BeachImage from '../assets/beach.png';
import BoracayImage from '../assets/BoracayImage.png';
import SwitzerlandImage from '../assets/SwitzerlandImage.png';
import './RecommendedHolidays.css';

const RecommendedHolidays = () => {
  const holidays = [
    { 
      name: 'Bali', 
      duration: '4D3N', 
      price: '$899', 
      image: BeachImage 
    },
    { 
      name: 'Swiss', 
      duration: '6D5N', 
      price: '$900', 
      image: SwitzerlandImage 
    },
    { 
      name: 'Boracay', 
      duration: '5D4N', 
      price: '$699', 
      image: BoracayImage 
    },
    { 
      name: 'Palawan', 
      duration: '4D3N', 
      price: '$789', 
      image: PalawanImage 
    },
  ];

  return (
    <div className="recommended-holidays">
      <div className="header">
        <h2>Recommended Holidays</h2>
        <a href="#" className="view-all">View all holidays →</a>
      </div>
      <div className="holidays-grid">
        {holidays.map((holiday, index) => (
          <div key={index} className="holiday-card">
            <img src={holiday.image} alt={holiday.name} />
            <div className="holiday-info">
              <h2>{holiday.name}</h2>
              <p>{holiday.duration}</p>
              <p className="price"><strong>{holiday.price}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedHolidays;