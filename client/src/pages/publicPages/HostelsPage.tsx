// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaStar, FaMapMarkerAlt, FaWifi, FaUserFriends, FaFilter, FaTimes, FaThLarge, FaThList } from 'react-icons/fa';
// import { IoBed, IoRestaurant } from 'react-icons/io5';
// import DesktopNavbar from '../../components/Navbar/DesktopNavbar';
// import MobileNavbar from '../../components/Navbar/MobileNavbar';
// import SearchBar from '../../components/SearchSection/SearchBar';
// import Footer from '../../components/common/Footer';

// const SearchResultsPage = () => {
//   const [searchLocation, setSearchLocation] = useState('');
//   const [showFilters, setShowFilters] = useState(false);
//   const [viewMode, setViewMode] = useState('grid');
//   const [selectedAmenities, setSelectedAmenities] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 1000]);

//   const searchResults = [
//     {
//       id: 1,
//       name: 'Urban Nest Deluxe Hostel',
//       location: 'Silicon Valley, CA',
//       price: 45,
//       rating: 4.8,
//       reviews: 328,
//       image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5',
//       amenities: ['WiFi', 'AC', 'Kitchen', 'Lounge', 'Workspace'],
//       tags: ['Trending', 'Student Friendly'],
//       distance: '0.8 miles from city center'
//     },
    
//     // Add more results...
//   ];

//   const FilterButton = ({ label, active, onClick }) => (
//     <motion.button
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       onClick={onClick}
//       className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//         active 
//           ? 'bg-[#2B7A78] text-white shadow-lg' 
//           : 'bg-white text-gray-600 hover:bg-[#DEF2F1] border border-gray-200'
//       }`}
//     >
//       {label}
//     </motion.button>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#E8F6F5] via-white to-[#F8FFFE]">
//       <DesktopNavbar />
//       <MobileNavbar />

//       <main className="pt-32 md:pt-40 pb-24 px-4 md:px-8 max-w-8xl mx-auto">
//         {/* Enhanced Search Section */}
//         <div className="max-w-7xl mx-auto mb-12">
//           <SearchBar 
//             searchLocation={searchLocation}
//             setSearchLocation={setSearchLocation}
//           />
          
//           {/* Quick Filters */}
//           <div className="mt-6 flex flex-wrap gap-3">
//             <FilterButton label="Under $30/night" active={true} />
//             <FilterButton label="Top Rated" active={false} />
//             <FilterButton label="Student Special" active={false} />
//             <FilterButton label="Near Universities" active={false} />
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Enhanced Filters Sidebar */}
//           <motion.aside 
//             className={`lg:w-80 bg-white rounded-3xl shadow-xl overflow-hidden ${
//               showFilters ? 'fixed inset-0 z-50 lg:relative' : 'hidden lg:block'
//             }`}
//           >
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-2xl font-bold text-gray-800">Filters</h3>
//                 <button 
//                   onClick={() => setShowFilters(false)}
//                   className="lg:hidden text-gray-500 hover:text-gray-700"
//                 >
//                   <FaTimes size={24} />
//                 </button>
//               </div>

//               {/* Price Range */}
//               <div className="mb-8">
//                 <h4 className="text-lg font-semibold text-gray-700 mb-4">Price Range</h4>
//                 <div className="px-2">
//                   <input
//                     type="range"
//                     min="0"
//                     max="1000"
//                     step="10"
//                     className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2B7A78]"
//                   />
//                   <div className="flex justify-between mt-2">
//                     <span className="text-sm text-gray-600">${priceRange[0]}</span>
//                     <span className="text-sm text-gray-600">${priceRange[1]}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Property Type */}
//               <div className="mb-8">
//                 <h4 className="text-lg font-semibold text-gray-700 mb-4">Property Type</h4>
//                 <div className="space-y-3">
//                   {['Hostel', 'Student Housing', 'Co-living Space'].map((type) => (
//                     <label key={type} className="flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox h-5 w-5 text-[#2B7A78] rounded border-gray-300 focus:ring-[#2B7A78]"
//                       />
//                       <span className="ml-3 text-gray-700">{type}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Amenities */}
//               <div>
//                 <h4 className="text-lg font-semibold text-gray-700 mb-4">Amenities</h4>
//                 <div className="grid grid-cols-2 gap-3">
//                   {['WiFi', 'Kitchen', 'Laundry', 'AC', 'Workspace', 'Gym'].map((amenity) => (
//                     <motion.button
//                       key={amenity}
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className={`p-3 rounded-xl flex items-center gap-2 text-sm ${
//                         selectedAmenities.includes(amenity)
//                           ? 'bg-[#2B7A78] text-white'
//                           : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
//                       }`}
//                     >
//                       <FaWifi className="text-lg" />
//                       {amenity}
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.aside>

//           {/* Results Section */}
//           <div className="flex-1">
//             <div className="flex justify-between items-center mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   32 Hostels Found
//                 </h2>
//                 <p className="text-gray-600">in Silicon Valley, CA</p>
//               </div>

//               <div className="flex items-center gap-4">
//                 <button
//                   onClick={() => setShowFilters(true)}
//                   className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md"
//                 >
//                   <FaFilter />
//                   Filters
//                 </button>

//                 <div className="hidden md:flex items-center gap-2 bg-white rounded-full p-1 shadow-md">
//                   <button
//                     onClick={() => setViewMode('grid')}
//                     className={`p-2 rounded-full ${
//                       viewMode === 'grid' ? 'bg-[#2B7A78] text-white' : 'text-gray-600'
//                     }`}
//                   >
//                     <FaThLarge />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('list')}
//                     className={`p-2 rounded-full ${
//                       viewMode === 'list' ? 'bg-[#2B7A78] text-white' : 'text-gray-600'
//                     }`}
//                   >
//                     <FaThList />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Results Grid */}
//             <div className={`grid ${
//               viewMode === 'grid' 
//                 ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
//                 : 'grid-cols-1'
//             } gap-6`}>
//               {searchResults.map((hostel) => (
//                 <motion.div
//                   key={hostel.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="relative">
//                     <img
//                       src={hostel.image}
//                       alt={hostel.name}
//                       className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="absolute top-4 left-4 flex gap-2">
//                       {hostel.tags.map((tag) => (
//                         <span key={tag} className="px-3 py-1 bg-[#2B7A78] text-white text-sm font-medium rounded-full">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-2">
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-1">{hostel.name}</h3>
//                         <div className="flex items-center text-gray-600 text-sm">
//                           <FaMapMarkerAlt className="text-[#2B7A78] mr-2" />
//                           {hostel.location}
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-2xl font-bold text-[#2B7A78]">${hostel.price}</div>
//                         <div className="text-sm text-gray-500">per night</div>
//                       </div>
//                     </div>

//                     <div className="flex items-center mb-4">
//                       <div className="flex items-center">
//                         <FaStar className="text-yellow-400" />
//                         <span className="ml-1 font-medium">{hostel.rating}</span>
//                       </div>
//                       <span className="mx-2 text-gray-300">•</span>
//                       <span className="text-gray-600 text-sm">{hostel.reviews} reviews</span>
//                       <span className="mx-2 text-gray-300">•</span>
//                       <span className="text-gray-600 text-sm">{hostel.distance}</span>
//                     </div>

//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {hostel.amenities.map((amenity) => (
//                         <span key={amenity} className="px-3 py-1 bg-[#DEF2F1] text-[#2B7A78] rounded-full text-sm">
//                           {amenity}
//                         </span>
//                       ))}
//                     </div>

//                     <button className="w-full bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white py-3 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5">
//                       View Details
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default SearchResultsPage;



// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaStar, FaMapMarkerAlt, FaWifi, FaUserFriends, FaFilter, FaTimes, FaThLarge, FaThList } from 'react-icons/fa';
// import { IoBed, IoRestaurant } from 'react-icons/io5';
// import DesktopNavbar from '../../components/Navbar/DesktopNavbar';
// import MobileNavbar from '../../components/Navbar/MobileNavbar';
// import SearchBar from '../../components/SearchSection/SearchBar';
// import Footer from '../../components/common/Footer';

// const SearchResultsPage = () => {
//   const [searchLocation, setSearchLocation] = useState('');
//   const [showFilters, setShowFilters] = useState(false);
//   const [viewMode, setViewMode] = useState('grid');
//   const [selectedAmenities, setSelectedAmenities] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 1000]);
//   const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);

//   const searchResults = [
//     {
//       id: 1,
//       name: 'Urban Nest Deluxe Hostel',
//       location: 'Silicon Valley, CA',
//       price: 45,
//       rating: 4.8,
//       reviews: 328,
//       image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5',
//       amenities: ['WiFi', 'AC', 'Kitchen', 'Lounge', 'Workspace'],
//       tags: ['Trending', 'Student Friendly'],
//       distance: '0.8 miles from city center'
//     },
//     // Add more results...
//   ];

//   const togglePropertyType = (type) => {
//     setSelectedPropertyTypes(prev => 
//       prev.includes(type) 
//         ? prev.filter(t => t !== type)
//         : [...prev, type]
//     );
//   };

//   const toggleAmenity = (amenity) => {
//     setSelectedAmenities(prev =>
//       prev.includes(amenity)
//         ? prev.filter(a => a !== amenity)
//         : [...prev, amenity]
//     );
//   };

//   const FilterButton = ({ label, active, onClick }) => (
//     <motion.button
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       onClick={onClick}
//       className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//         active 
//           ? 'bg-[#2B7A78] text-white shadow-lg' 
//           : 'bg-white text-gray-600 hover:bg-[#DEF2F1] border border-gray-200'
//       }`}
//     >
//       {label}
//     </motion.button>
//   );

//   const FiltersOverlay = () => (
//     <AnimatePresence>
//       {showFilters && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 overflow-auto"
//           onClick={(e) => {
//             if (e.target === e.currentTarget) setShowFilters(false);
//           }}
//         >
//           <motion.div
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'tween' }}
//             className="ml-auto h-full w-full md:max-w-xl bg-white shadow-2xl overflow-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-8">
//               <div className="flex justify-between items-center mb-8">
//                 <h3 className="text-2xl font-bold text-gray-800">Filters</h3>
//                 <button 
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setShowFilters(false);
//                   }}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <FaTimes size={24} />
//                 </button>
//               </div>
  
//               {/* Price Range */}
//               <div className="mb-10">
//                 <h4 className="text-lg font-semibold text-gray-700 mb-4">Price Range</h4>
//                 <div className="px-2">
//                   <input
//                     type="range"
//                     min="0"
//                     max="1000"
//                     step="10"
//                     className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2B7A78]"
//                     onChange={(e) => {
//                       e.stopPropagation();
//                       setPriceRange([0, e.target.value]);
//                     }}
//                   />
//                   <div className="flex justify-between mt-3">
//                     <span className="text-sm text-gray-600">${priceRange[0]}</span>
//                     <span className="text-sm text-gray-600">${priceRange[1]}</span>
//                   </div>
//                 </div>
//               </div>
  
//               {/* Property Type */}
//               <div className="mb-10">
//                 <h4 className="text-lg font-semibold text-gray-700 mb-4">Property Type</h4>
//                 <div className="space-y-4">
//                   {['Hostel', 'Student Housing', 'Co-living Space'].map((type) => (
//                     <label 
//                       key={type} 
//                       className="flex items-center cursor-pointer group"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       <input
//                         type="checkbox"
//                         checked={selectedPropertyTypes.includes(type)}
//                         onChange={(e) => {
//                           e.stopPropagation();
//                           togglePropertyType(type);
//                         }}
//                         className="hidden"
//                       />
//                       <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
//                         selectedPropertyTypes.includes(type)
//                           ? 'bg-[#2B7A78] border-[#2B7A78]'
//                           : 'border-gray-300 group-hover:border-[#2B7A78]'
//                       }`}>
//                         {selectedPropertyTypes.includes(type) && (
//                           <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                           </svg>
//                         )}
//                       </div>
//                       <span className="ml-3 text-gray-700">{type}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
  
//               {/* Amenities */}
//               <div>
//                 <h4 className="text-lg font-semibold text-gray-700 mb-4">Amenities</h4>
//                 <div className="grid grid-cols-2 gap-3">
//                   {['WiFi', 'Kitchen', 'Laundry', 'AC', 'Workspace', 'Gym'].map((amenity) => (
//                     <motion.button
//                       key={amenity}
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleAmenity(amenity);
//                       }}
//                       className={`p-4 rounded-xl flex items-center gap-2 text-sm transition-all ${
//                         selectedAmenities.includes(amenity)
//                           ? 'bg-[#2B7A78] text-white shadow-lg'
//                           : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
//                       }`}
//                     >
//                       <FaWifi className="text-lg" />
//                       {amenity}
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>
  
//               {/* Apply Filters Button */}
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setShowFilters(false);
//                 }}
//                 className="w-full mt-10 bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
//               >
//                 Apply Filters
//               </motion.button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#E8F6F5] via-white to-[#F8FFFE]">
//       <DesktopNavbar />
//       <MobileNavbar />

//       <main className="pt-32 md:pt-40 pb-24 px-4 md:px-8 max-w-8xl mx-auto">
//         {/* Enhanced Search Section */}
//         <div className="max-w-7xl mx-auto mb-12">
//           <SearchBar 
//             searchLocation={searchLocation}
//             setSearchLocation={setSearchLocation}
//           />
          
//           {/* Quick Filters */}
//           <div className="mt-6 flex flex-wrap gap-3">
//             <FilterButton label="Under $30/night" active={true} />
//             <FilterButton label="Top Rated" active={false} />
//             <FilterButton label="Student Special" active={false} />
//             <FilterButton label="Near Universities" active={false} />
//           </div>
//         </div>

//         <div className="flex flex-col gap-8">
//           {/* Results Section */}
//           <div className="flex-1">
//             <div className="flex justify-between items-center mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   32 Hostels Found
//                 </h2>
//                 <p className="text-gray-600">in Silicon Valley, CA</p>
//               </div>

//               <div className="flex items-center gap-4">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setShowFilters(true)}
//                   className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
//                 >
//                   <FaFilter className="text-[#2B7A78]" />
//                   <span className="text-gray-700">Filters</span>
//                 </motion.button>

//                 <div className="hidden md:flex items-center gap-2 bg-white rounded-full p-1 shadow-md">
//                   <button
//                     onClick={() => setViewMode('grid')}
//                     className={`p-2 rounded-full transition-colors ${
//                       viewMode === 'grid' ? 'bg-[#2B7A78] text-white' : 'text-gray-600'
//                     }`}
//                   >
//                     <FaThLarge />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('list')}
//                     className={`p-2 rounded-full transition-colors ${
//                       viewMode === 'list' ? 'bg-[#2B7A78] text-white' : 'text-gray-600'
//                     }`}
//                   >
//                     <FaThList />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Results Grid */}
//             <div className={`grid ${
//               viewMode === 'grid' 
//                 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
//                 : 'grid-cols-1 gap-6'
//             }`}>
//               {searchResults.map((hostel) => (
//                 <motion.div
//                   key={hostel.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="relative">
//                     <img
//                       src={hostel.image}
//                       alt={hostel.name}
//                       className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="absolute top-4 left-4 flex gap-2">
//                       {hostel.tags.map((tag) => (
//                         <span key={tag} className="px-3 py-1 bg-[#2B7A78] text-white text-sm font-medium rounded-full shadow-md">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-3">
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-2">{hostel.name}</h3>
//                         <div className="flex items-center text-gray-600 text-sm">
//                           <FaMapMarkerAlt className="text-[#2B7A78] mr-2" />
//                           {hostel.location}
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-2xl font-bold text-[#2B7A78]">${hostel.price}</div>
//                         <div className="text-sm text-gray-500">per night</div>
//                       </div>
//                     </div>

//                     <div className="flex items-center mb-4">
//                       <div className="flex items-center">
//                         <FaStar className="text-yellow-400" />
//                         <span className="ml-1 font-medium">{hostel.rating}</span>
//                       </div>
//                       <span className="mx-2 text-gray-300">•</span>
//                       <span className="text-gray-600 text-sm">{hostel.reviews} reviews</span>
//                       <span className="mx-2 text-gray-300">•</span>
//                       <span className="text-gray-600 text-sm">{hostel.distance}</span>
//                     </div>

//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {hostel.amenities.map((amenity) => (
//                         <span key={amenity} className="px-3 py-1 bg-[#DEF2F1] text-[#2B7A78] rounded-full text-sm">
//                           {amenity}
//                         </span>
//                       ))}
//                     </div>

//                     <motion.button 
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="w-full bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
//                     >
//                       View Details
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Filters Overlay */}
//       <FiltersOverlay />

//       <Footer />
//     </div>
//   );
// };

// export default SearchResultsPage;





import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaStar,
  FaMapMarkerAlt,
  FaWifi,
  FaFilter,
  FaThLarge,
  FaThList,
} from 'react-icons/fa';
import DesktopNavbar from '../../components/Navbar/DesktopNavbar';
import MobileNavbar from '../../components/Navbar/MobileNavbar';
import SearchBar from '../../components/SearchSection/SearchBar';
import Footer from '../../components/common/Footer';
import FiltersOverlay from '../../components/SearchSection/FiltersOverlay';
import { label } from 'framer-motion/client';



const SearchResultsPage = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const searchResults = [
    {
      id: 1,
      name: 'Urban Nest Deluxe Hostel',
      location: 'Silicon Valley, CA',
      price: 45,
      rating: 4.8,
      reviews: 328,
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5',
      amenities: ['WiFi', 'AC', 'Kitchen', 'Lounge', 'Workspace'],
      tags: ['Trending', 'Student Friendly'],
      distance: '0.8 miles from city center',
    },
  ];

  // Corrected version
const toggleFilter = (filter: string) => {
  setSelectedFilters(prev => 
    prev.includes(filter) 
      ? prev.filter(f => f !== filter) 
      : [...prev, filter]
  );
};

  const togglePropertyType = (type) => {
    setSelectedPropertyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const FilterButton = ({ label, active, onClick } : {
    label: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        active
          ? 'bg-[#2B7A78] text-white shadow-lg'
          : 'bg-white text-gray-600 hover:bg-[#DEF2F1] border border-gray-200'
      }`}
    >
      {label}
    </motion.button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F6F5] via-white to-[#F8FFFE]">
      <DesktopNavbar />
      <MobileNavbar />

      <main className="pt-32 md:pt-40 pb-24 px-4 md:px-8 max-w-8xl mx-auto">
        <div className="max-w-7xl mx-auto mb-12">
          <SearchBar
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <FilterButton label="Under $30/night" active={selectedFilters.includes('Under $30/night')} onClick={() => toggleFilter('Under $30/night')} />
            <FilterButton label="Top Rated" active={selectedFilters.includes('Top Rated')} onClick={() => toggleFilter('Top Rated')} />
            <FilterButton label="Student Special" active={selectedFilters.includes('Student Special')} onClick={() => toggleFilter('Student Special')} />
            <FilterButton label="Near Universities" active={selectedFilters.includes('Near Universities')} onClick={() => toggleFilter('Near Universities')} />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  32 Hostels Found
                </h2>
                <p className="text-gray-600">in Silicon Valley, CA</p>
              </div>
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowFilters(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <FaFilter className="text-[#2B7A78]" />
                  <span className="text-gray-700">Filters</span>
                </motion.button>
                <div className="hidden md:flex items-center gap-2 bg-white rounded-full p-1 shadow-md">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-full transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-[#2B7A78] text-white'
                        : 'text-gray-600'
                    }`}
                  >
                    <FaThLarge />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-full transition-colors ${
                      viewMode === 'list'
                        ? 'bg-[#2B7A78] text-white'
                        : 'text-gray-600'
                    }`}
                  >
                    <FaThList />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`grid ${
                viewMode === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'grid-cols-1 gap-6'
              }`}
            >
              {searchResults.map((hostel) => (
                <motion.div
                  key={hostel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={hostel.image}
                      alt={hostel.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {hostel.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#2B7A78] text-white text-sm font-medium rounded-full shadow-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {hostel.name}
                        </h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <FaMapMarkerAlt className="text-[#2B7A78] mr-2" />
                          {hostel.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#2B7A78]">
                          ${hostel.price}
                        </div>
                        <div className="text-sm text-gray-500">per night</div>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400" />
                        <span className="ml-1 font-medium">{hostel.rating}</span>
                      </div>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-gray-600 text-sm">{hostel.reviews} reviews</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-gray-600 text-sm">{hostel.distance}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {hostel.amenities.map((amenity) => (
                        <span key={amenity} className="px-3 py-1 bg-[#DEF2F1] text-[#2B7A78] rounded-full text-sm">
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Filters Overlay */}
      <FiltersOverlay
  showFilters={showFilters}
  setShowFilters={setShowFilters}
  selectedPropertyTypes={selectedPropertyTypes}
  togglePropertyType={togglePropertyType}
  selectedAmenities={selectedAmenities}
  toggleAmenity={toggleAmenity}
  priceRange={priceRange}
  setPriceRange={setPriceRange}
/>


      <Footer />
    </div>
  );
};

export default SearchResultsPage;