// FilterSection Component



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaStar, FaMapMarkerAlt, FaWifi, FaFilter, FaTimes, 
  FaDesktop, FaDumbbell, FaTv, FaSwimmer 
} from 'react-icons/fa';
import { IoBed, IoRestaurant, IoGrid, IoList } from 'react-icons/io5';


const FilterSection = ({ showFilters, setShowFilters, priceRange, setPriceRange }) => {
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    
    const amenitiesList = [
      { icon: <FaWifi />, label: 'WiFi' },
      { icon: <IoBed />, label: 'AC' },
      { icon: <IoRestaurant />, label: 'Kitchen' },
      { icon: <FaDesktop />, label: 'Workspace' },
      { icon: <FaDumbbell />, label: 'Gym' },
      { icon: <FaTv />, label: 'TV Room' },
      { icon: <FaTv />, label: 'Laundry' },
      { icon: <FaSwimmer />, label: 'Pool' }
    ];
  
    const propertyTypes = [
      { label: 'Hostel', count: 45 },
      { label: 'Student Housing', count: 32 },
      { label: 'Co-living Space', count: 28 },
      { label: 'Premium Dorms', count: 15 }
    ];
  
    return (
      <motion.aside 
        className={`lg:w-80 bg-white rounded-3xl shadow-xl overflow-hidden ${
          showFilters ? 'fixed inset-0 z-50 lg:relative' : 'hidden lg:block'
        }`}
      >
        <div className="h-full overflow-auto p-6 custom-scrollbar">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Filters</h3>
            <button 
              onClick={() => setShowFilters(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={24} />
            </button>
          </div>
  
          {/* Price Range Section */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Price Range</h4>
            <div className="px-2">
              <div className="flex justify-between mb-4">
                <div className="relative">
                  <span className="absolute text-sm text-gray-500 -top-6">Min</span>
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-24 p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2B7A78] focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <span className="absolute text-sm text-gray-500 -top-6">Max</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-24 p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2B7A78] focus:outline-none"
                  />
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2B7A78]"
              />
            </div>
          </div>
  
          {/* Property Type Section */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Property Type</h4>
            <div className="space-y-3">
              {propertyTypes.map(({ label, count }) => (
                <motion.label 
                  key={label} 
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#DEF2F1] transition-colors cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-[#2B7A78] rounded border-gray-300 focus:ring-[#2B7A78]"
                    />
                    <span className="ml-3 text-gray-700 group-hover:text-[#2B7A78]">{label}</span>
                  </div>
                  <span className="text-sm text-gray-500 group-hover:text-[#2B7A78]">{count}</span>
                </motion.label>
              ))}
            </div>
          </div>
  
          {/* Amenities Section */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Amenities</h4>
            <div className="grid grid-cols-2 gap-3">
              {amenitiesList.map(({ icon, label }) => (
                <motion.button
                  key={label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedAmenities(
                      selectedAmenities.includes(label)
                        ? selectedAmenities.filter(item => item !== label)
                        : [...selectedAmenities, label]
                    )
                  }}
                  className={`p-3 rounded-xl flex items-center gap-2 text-sm transition-all ${
                    selectedAmenities.includes(label)
                      ? 'bg-[#2B7A78] text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-[#DEF2F1] hover:text-[#2B7A78]'
                  }`}
                >
                  {icon}
                  {label}
                </motion.button>
              ))}
            </div>
          </div>
  
          {/* Rating Section */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Rating</h4>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <motion.button
                  key={rating}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#DEF2F1] transition-all"
                >
                  <div className="flex items-center">
                    {[...Array(rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ))}
                    {[...Array(5-rating)].map((_, i) => (
                      <FaStar key={i} className="text-gray-300 mr-1" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">&amp; up</span>
                </motion.button>
              ))}
            </div>
          </div>
  
          {/* Additional Filters */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">More Filters</h4>
            <div className="space-y-3">
              {['Instant Booking', 'Free Cancellation', 'Student Discount'].map((filter) => (
                <label key={filter} className="flex items-center justify-between p-3 rounded-xl hover:bg-[#DEF2F1] transition-colors cursor-pointer group">
                  <span className="text-gray-700 group-hover:text-[#2B7A78]">{filter}</span>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2B7A78]"></div>
                  </div>
                </label>
              ))}
            </div>
          </div>
  
          {/* Clear & Apply Buttons */}
          <div className="flex gap-4 sticky bottom-0 pt-4 mt-auto bg-white border-t border-gray-100">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-6 py-3 border border-[#2B7A78] text-[#2B7A78] rounded-xl hover:bg-[#DEF2F1] transition-colors"
            >
              Clear All
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white rounded-xl hover:shadow-lg transition-all"
            >
              Apply Filters
            </motion.button>
          </div>
        </div>
      </motion.aside>
    );
  };


export default FilterSection