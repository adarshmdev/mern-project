
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    FaStar,
    FaMapMarkerAlt,
    FaWifi,
    FaFilter,
    FaThLarge,
    FaThList,
  } from 'react-icons/fa';

const FiltersOverlay = ({
    showFilters,
    setShowFilters,
    selectedPropertyTypes,
    togglePropertyType,
    selectedAmenities,
    toggleAmenity,
    priceRange,
    setPriceRange,
  }) => {
    const handleContentClick = (e) => {
      e.stopPropagation();
    };
  
    return (
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 overflow-auto"
            onClick={() => setShowFilters(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="ml-auto h-full w-full md:max-w-xl bg-white shadow-2xl overflow-auto"
              onClick={handleContentClick}
            >
              <div className="p-8">
                <div className="mb-10">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Property Type</h4>
                  <div className="space-y-4">
                    {['Hostel', 'Student Housing', 'Co-living Space'].map((type) => (
                      <label key={type} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedPropertyTypes.includes(type)}
                          onChange={() => togglePropertyType(type)}
                          className="hidden"
                        />
                        <div
                          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                            selectedPropertyTypes.includes(type)
                              ? 'bg-[#2B7A78] border-[#2B7A78]'
                              : 'border-gray-300 group-hover:border-[#2B7A78]'
                          }`}
                        >
                          {selectedPropertyTypes.includes(type) && (
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="ml-3 text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Amenities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['WiFi', 'Kitchen', 'Laundry', 'AC', 'Workspace', 'Gym'].map((amenity) => (
                      <motion.button
                        key={amenity}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleAmenity(amenity)}
                        className={`p-4 rounded-xl flex items-center gap-2 text-sm transition-all ${
                          selectedAmenities.includes(amenity)
                            ? 'bg-[#2B7A78] text-white shadow-lg'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <FaWifi className="text-lg" />
                        {amenity}
                      </motion.button>
                    ))}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowFilters(false)}
                  className="w-full mt-10 bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Apply Filters
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  export default FiltersOverlay;