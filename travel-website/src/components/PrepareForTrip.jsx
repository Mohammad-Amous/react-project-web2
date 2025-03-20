import React from 'react';
import './PrepareForTrip.css';

const PrepareForTrip = () => {
  const categories = [
    { name: 'Hotel', image: '/hotel.jpg' },
    { name: 'Attractions', image: '/attraction.jpg' },
    { name: 'Eats', image: '/eats.jpg' },
    { name: 'Commute', image: '/commute.jpg' },
    { name: 'Taxi', image: '/taxi.jpg' },
    { name: 'Movies', image: '/movies.jpg' },
  ];

  return (
    <div className="prepare-for-trip">
      <h2 className="trip-title">PREPARE FOR YOUR TRIP</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrepareForTrip;