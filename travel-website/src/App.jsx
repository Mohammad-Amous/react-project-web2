import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import RecentSearches from './components/RecentSearches';
import PrepareForTrip from './components/PrepareForTrip';
import PopularDestinations from './components/PopularDestinations.jsx';
import RecommendedHolidays from './components/RecommendedHolidays';
import PopularStays from './components/PopularStays';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <RecentSearches />
      <PrepareForTrip />        
      <PopularDestinations />
      <RecommendedHolidays />
      <PopularStays />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
