// src/components/PopularStays.jsx
import React from 'react';
import { FaStar, FaRegPlayCircle } from "react-icons/fa"; // استيراد أيقونة النجمة وأيقونة التشغيل الجديدة
import Matterhorn from '../assets/Matterhorn.png'; 
import Discovery from '../assets/DiscoveryShores.png';
import ArcticHut from '../assets/ArcticHut.png';
import LakeLouise from '../assets/LakeLouise.png';
import './PopularStays.css';

const PopularStays = () => {
  const stays = [
    { 
      type: 'Entire bungalow', 
      name: 'Matterhorn Suites', 
      price: '$575/night', 
      reviews: 60, 
      rating: 4.9, 
      image: Matterhorn 
    },
    { 
      type: '2-Story beachfront suite', 
      name: 'Discovery Shores', 
      price: '$360/night', 
      reviews: 116, 
      rating: 4.8, 
      image: Discovery 
    },
    { 
      type: 'Single deluxe hut', 
      name: 'Arctic Hut', 
      price: '$420/night', 
      reviews: 78, 
      rating: 4.7, 
      image: ArcticHut 
    },
    { 
      type: 'Deluxe King Room', 
      name: 'Lake Louise Inn', 
      price: '$244/night', 
      reviews: 63, 
      rating: 4.6, 
      image: LakeLouise 
    },
  ];

  return (
    <div className="popular-stays">
      <div className="header">
        <h2>Popular Stays</h2>
        <a href="#" className="view-all">View all stays →</a>
      </div>
      <div className="stays-grid">
        {stays.map((stay, index) => (
          <div key={index} className="stay-card">
            <img src={stay.image} alt={stay.name} />
            <div className="stay-info">
              <div className="stay-name-container">
                <h2>{stay.name}</h2>
                <FaRegPlayCircle color="#007bff" size={24} /> {/* إضافة أيقونة التشغيل الجديدة هنا */}
              </div>
              <h3>{stay.type}</h3>
              <p>{stay.price}</p>
              <p className="reviews">
                <FaStar color="gold" size={16} /> {/* إضافة أيقونة النجمة هنا */}
                <strong>{stay.rating}</strong> <span>({stay.reviews} reviews)</span>
              </p>
              <button className="details-button">MORE DETAILS</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularStays;
