import React from 'react';
import './RecentSearches.css';
import { FaPlane, FaLongArrowAltRight, FaLongArrowAltLeft, FaCalendarAlt } from 'react-icons/fa'; // تم إضافة FaCalendarAlt

const RecentSearches = () => {
  const searches = [
    { from: 'SIN', to: 'LAX', date: '7 Sep 2021' },
    { from: 'MY', to: 'DUB', date: '9 Sep 2021' },
  ];

  return (
    <div className="recent-searches">
      <h2>Recent Searches</h2>
      <div className="searches-list">
        {searches.map((search, index) => (
          <div key={index} className="search-item">
            <div className="route-container">
              <div className="from-location">{search.from}</div>
              <div className="arrow-plane">
                <FaLongArrowAltRight className="arrow-icon" /> {/* سهم إلى اليمين */}
                <FaPlane className="plane-icon" /> {/* أيقونة الطائرة */}
                <FaLongArrowAltLeft className="arrow-icon" /> {/* سهم إلى اليسار */}
              </div>
              <div className="to-location">{search.to}</div>
            </div>
            <div className="search-date">
              <FaCalendarAlt className="calendar-icon" />
              <p className="date"><strong>Depart on:</strong> {search.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;