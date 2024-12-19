import React, { useState } from 'react';
import { FaSearch, FaUser, FaMapMarkerAlt, FaStar, FaHeart, FaCompass, FaBookmark, FaHome, FaFilter } from 'react-icons/fa';

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
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      amenities: ['WiFi', 'AC', 'Kitchen']
    },
    // Add more hostels
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F6F5] to-white">
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed w-full backdrop-blur-md bg-white/80 z-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-16">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-transparent bg-clip-text">
                HostelHub
              </div>
              <div className="flex space-x-8">
                {['Explore', 'About', 'Contact'].map((item) => (
                  <a key={item} href={`/${item.toLowerCase()}`} 
                     className="text-gray-700 hover:text-[#2B7A78] transition-colors font-medium">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="p-2 hover:bg-[#E8F6F5] rounded-full transition-colors">
                <FaBookmark className="text-xl text-[#2B7A78]" />
              </button>
              <a href="/login" 
                 className="bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all font-medium">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 backdrop-blur-md bg-white/90 border-t border-gray-100 z-50">
        <div className="flex justify-around items-center h-20 px-2 max-w-md mx-auto">
          {[
            { icon: FaHome, text: 'Home', active: true },
            { icon: FaCompass, text: 'Explore' },
            { icon: FaBookmark, text: 'Saved' },
            { icon: FaUser, text: 'Profile' }
          ].map((item) => (
            <NavItem key={item.text} {...item} />
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 md:pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Find Your Perfect <span className="text-[#2B7A78]">Stay</span>
          </h1>
          <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto">
            Discover comfortable and affordable accommodations worldwide
          </p>

          {/* Search Section */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center flex-grow bg-gray-50 rounded-xl p-4">
                  <FaMapMarkerAlt className="text-[#2B7A78] text-xl mr-3" />
                  <input
                    type="text"
                    placeholder="Where would you like to stay?"
                    className="w-full bg-transparent focus:outline-none text-gray-700 text-lg"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                </div>
                <button className="bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] p-4 rounded-xl hover:shadow-lg transition-all">
                  <FaSearch className="text-white text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Popular Categories</h2>
            <a href="/categories" className="text-[#2B7A78] hover:text-[#3AAFA9] font-medium">
              View all
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Student Friendly', 'Near Universities', 'Budget Stays', 'Luxury Hostels'].map((category) => (
              <button
                key={category}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-[#2B7A78] to-[#3AAFA9] p-6 hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <h3 className="relative text-xl font-semibold text-white">
                  {category}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Hostels */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Hostels</h2>
            <a href="/featured" className="text-[#2B7A78] hover:text-[#3AAFA9] font-medium">
              View all
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHostels.map((hostel) => (
              <HostelCard key={hostel.id} hostel={hostel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon: Icon, text, active }) => (
  <a href="#" 
     className={`flex flex-col items-center ${
       active ? 'text-[#2B7A78]' : 'text-gray-400'
     } hover:text-[#2B7A78] transition-colors`}>
    <Icon className="text-2xl mb-1" />
    <span className="text-xs font-medium">{text}</span>
  </a>
);

const HostelCard = ({ hostel }) => (
  <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
    <div className="relative">
      <img
        src={hostel.image}
        alt={hostel.name}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <button className="absolute top-4 right-4 bg-white/90 p-3 rounded-full hover:bg-white transition-colors">
        <FaHeart className="text-[#2B7A78]" />
      </button>
      <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-full">
        <div className="flex items-center">
          <FaStar className="text-[#2B7A78] mr-1" />
          <span className="font-semibold text-gray-800">{hostel.rating}</span>
          <span className="text-gray-500 text-sm ml-1">({hostel.reviews})</span>
        </div>
      </div>
    </div>

    <div className="p-6">
      <h3 className="font-bold text-gray-800 text-xl mb-2">{hostel.name}</h3>
      <div className="flex items-center text-gray-600 mb-4">
        <FaMapMarkerAlt className="mr-2" />
        <span>{hostel.location}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {hostel.amenities.map((amenity) => (
          <span key={amenity} 
                className="bg-[#E8F6F5] text-[#2B7A78] text-sm px-4 py-1.5 rounded-full font-medium">
            {amenity}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[#2B7A78] font-bold text-2xl">{hostel.price}</span>
          <span className="text-gray-500 text-sm">/night</span>
        </div>
        <button className="bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-medium">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

export default HostelFinderHomePage;