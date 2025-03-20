import React from 'react';
import './SearchBar.css'; 
import Background from '../assets/Background.png'; 

const SearchBar = () => {
  return (
    <div className="search-bar-container" style={{ Background: `url(${Background})` }}>
      <div className="search-content">
        <h1>Let's explore & travel the world</h1>
        <p>Find the best destinations and the most popular stays!</p>
        <div className="search-flights-container">
          <div className="search-header">
            <h2>SEARCH FLIGHTS</h2>
            <div className="search-options">
              <div className="option">
                <input type="radio" id="return" name="status" value="return" defaultChecked />
                <label htmlFor="return">Return</label>
              </div>
              <div className="option">
                <input type="radio" id="one-way" name="status" value="one-way" />
                <label htmlFor="one-way">One-way</label>
              </div>
            </div>
          </div>
          <div className="search-bar">
            <div className="search-section">
              <label htmlFor="departure">Departure</label>
              <input type="text" id="departure" placeholder="Singapore (SIN)" />
            </div>
            <div className="search-section">
              <label htmlFor="arrival">Arrival</label>
              <input type="text" id="arrival" placeholder="Los Angeles (LA)" />
            </div>
            <div className="search-section">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" defaultValue="2022-06-01" />
            </div>
            <button className="search-button">Search Flights</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;