import React, { useState } from 'react';
import DesktopNavbar from '../components/Navbar/DesktopNavbar';
import MobileNavbar from '../components/Navbar/MobileNavbar';
import HeroSection from '../components/HeroSection/HeroSection';
import SearchBar from '../components/SearchSection/SearchBar';
import Categories from '../components/CategoriesSection/Categories';
import FeaturedHostels from '../components/FeaturedHostelsSection/FeaturedHostels';

const HostelFinderHomePage = () => {
  const [searchLocation, setSearchLocation] = useState('');

  const featuredHostels = [
    {
      id: 1,
      name: 'Urban Nest Hostel',
      location: 'Downtown Silicon Valley',
      price: '$25',
      rating: 4.8,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5',
      amenities: ['WiFi', 'AC', 'Kitchen']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F6F5] to-white">
      <DesktopNavbar />
      <MobileNavbar />
      <div className="pt-32 md:pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <HeroSection />
        <SearchBar searchLocation={searchLocation} setSearchLocation={setSearchLocation} />
        <Categories />
        <FeaturedHostels featuredHostels={featuredHostels} />
      </div>
    </div>
  );
};

export default HostelFinderHomePage;
