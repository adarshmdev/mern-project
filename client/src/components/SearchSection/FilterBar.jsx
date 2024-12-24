// import { useState } from 'react';
// import { FaFilter } from 'react-icons/fa';

// const FilterBar = ({ filters, setFilters }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const priceRanges = [
//     { min: 0, max: 25, label: '$0-$25' },
//     { min: 26, max: 50, label: '$26-$50' },
//     { min: 51, max: 100, label: '$51-$100' },
//     { min: 101, max: Infinity, label: '$100+' }
//   ];

//   const amenities = [
//     'WiFi',
//     'Kitchen',
//     'AC',
//     'Laundry',
//     'Lockers',
//     'Common Room'
//   ];

//   return (
//     <div className="max-w-3xl mx-auto mb-8">
//       <div className="bg-white rounded-2xl shadow-xl p-2">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#2B7A78] transition-colors"
//         >
//           <FaFilter className="text-[#2B7A78]" />
//           <span>Filters</span>
//         </button>

//         {isOpen && (
//           <div className="p-4 border-t">
//             {/* Price Range */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-3 text-gray-700">Price Range</h3>
//               <div className="grid grid-cols-2 gap-2">
//                 {priceRanges.map((range) => (
//                   <button
//                     key={range.label}
//                     className={`p-2 rounded-xl border transition-all ${
//                       filters.priceRange === range.label
//                         ? 'bg-[#2B7A78] text-white border-[#2B7A78]'
//                         : 'border-gray-200 hover:border-[#2B7A78]'
//                     }`}
//                     onClick={() => setFilters({ ...filters, priceRange: range.label })}
//                   >
//                     {range.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Gender Type */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-3 text-gray-700">Room Type</h3>
//               <div className="flex gap-2">
//                 {['Mixed', 'Female Only', 'Male Only'].map((type) => (
//                   <button
//                     key={type}
//                     className={`p-2 rounded-xl border transition-all ${
//                       filters.genderType === type
//                         ? 'bg-[#2B7A78] text-white border-[#2B7A78]'
//                         : 'border-gray-200 hover:border-[#2B7A78]'
//                     }`}
//                     onClick={() => setFilters({ ...filters, genderType: type })}
//                   >
//                     {type}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Amenities */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-3 text-gray-700">Amenities</h3>
//               <div className="grid grid-cols-3 gap-2">
//                 {amenities.map((amenity) => (
//                   <button
//                     key={amenity}
//                     className={`p-2 rounded-xl border transition-all ${
//                       filters.amenities?.includes(amenity)
//                         ? 'bg-[#2B7A78] text-white border-[#2B7A78]'
//                         : 'border-gray-200 hover:border-[#2B7A78]'
//                     }`}
//                     onClick={() => {
//                       const newAmenities = filters.amenities?.includes(amenity)
//                         ? filters.amenities.filter((a) => a !== amenity)
//                         : [...(filters.amenities || []), amenity];
//                       setFilters({ ...filters, amenities: newAmenities });
//                     }}
//                   >
//                     {amenity}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Clear Filters */}
//             <button
//               className="w-full bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white py-2 rounded-xl hover:shadow-lg transition-all"
//               onClick={() => setFilters({})}
//             >
//               Clear All Filters
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterBar;


// import { useState } from 'react';
// import { FaFilter } from 'react-icons/fa';

// const FilterBar = ({ filters, setFilters }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const priceRanges = ['$0-$25', '$26-$50', '$51-$100', '$100+'];
//   const roomTypes = ['Mixed', 'Female Only', 'Male Only'];
//   const amenities = ['WiFi', 'Kitchen', 'AC', 'Laundry', 'Lockers', 'Common Room'];

//   return (
//     <div className="relative">
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] p-4 rounded-xl hover:shadow-lg transition-all"
//       >
//         <FaFilter className="text-white text-xl" />
//       </button>

//       {isOpen && (
//         <>
//           <div 
//             className="fixed inset-0 z-40" 
//             onClick={() => setIsOpen(false)} 
//           />
//           <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl z-50 p-4">
//             {/* Price Range */}
//             <div className="mb-4">
//               <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
//               <div className="grid grid-cols-2 gap-2">
//                 {priceRanges.map((range) => (
//                   <button
//                     key={range}
//                     className={`px-3 py-2 text-sm rounded-lg transition-all ${
//                       filters.priceRange === range
//                         ? 'bg-[#2B7A78] text-white'
//                         : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
//                     }`}
//                     onClick={() => setFilters({ ...filters, priceRange: range })}
//                   >
//                     {range}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Room Type */}
//             <div className="mb-4">
//               <h3 className="text-sm font-medium text-gray-700 mb-2">Room Type</h3>
//               <div className="flex flex-wrap gap-2">
//                 {roomTypes.map((type) => (
//                   <button
//                     key={type}
//                     className={`px-3 py-2 text-sm rounded-lg transition-all ${
//                       filters.genderType === type
//                         ? 'bg-[#2B7A78] text-white'
//                         : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
//                     }`}
//                     onClick={() => setFilters({ ...filters, genderType: type })}
//                   >
//                     {type}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Amenities */}
//             <div className="mb-4">
//               <h3 className="text-sm font-medium text-gray-700 mb-2">Amenities</h3>
//               <div className="grid grid-cols-2 gap-2">
//                 {amenities.map((amenity) => (
//                   <button
//                     key={amenity}
//                     className={`px-3 py-2 text-sm rounded-lg transition-all ${
//                       filters.amenities?.includes(amenity)
//                         ? 'bg-[#2B7A78] text-white'
//                         : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
//                     }`}
//                     onClick={() => {
//                       const newAmenities = filters.amenities?.includes(amenity)
//                         ? filters.amenities.filter((a) => a !== amenity)
//                         : [...(filters.amenities || []), amenity];
//                       setFilters({ ...filters, amenities: newAmenities });
//                     }}
//                   >
//                     {amenity}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="flex gap-2">
//               <button
//                 className="flex-1 py-2 text-sm rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
//                 onClick={() => setFilters({ priceRange: '', genderType: '', amenities: [] })}
//               >
//                 Clear
//               </button>
//               <button
//                 className="flex-1 py-2 text-sm rounded-lg bg-[#2B7A78] text-white hover:bg-[#236664] transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Apply
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default FilterBar;





// import { useState } from 'react';
// import { FaFilter } from 'react-icons/fa';

// const FilterBar = ({ filters, setFilters }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const priceRanges = ['$0-$25', '$26-$50', '$51-$100', '$100+'];
//   const roomTypes = ['Mixed', 'Female Only', 'Male Only'];
//   const amenities = ['WiFi', 'Kitchen', 'AC', 'Laundry', 'Lockers', 'Common Room'];

//   return (
//     <div className="relative">
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] p-4 rounded-xl hover:shadow-lg transition-all"
//       >
//         <FaFilter className="text-white text-xl" />
//       </button>

//       {isOpen && (
//         <>
//           {/* Backdrop with blur */}
//           <div 
//             className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20 animate-fade-in" 
//             onClick={() => setIsOpen(false)} 
//           />
          
//           {/* Filter Modal with glass effect */}
//           <div className="fixed top-24 right-1/2 translate-x-1/2 md:right-4 md:translate-x-0 w-[90%] max-w-md z-50 animate-slide-up">
//             <div className="backdrop-blur-md bg-white/90 p-4 rounded-xl shadow-xl">
//               <div className="flex flex-wrap gap-4">
//                 {/* Price Range */}
//                 <div className="flex-1 min-w-[200px]">
//                   <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
//                   <div className="grid grid-cols-2 gap-2">
//                     {priceRanges.map((range) => (
//                       <button
//                         key={range}
//                         className={`px-3 py-2 text-sm rounded-lg transition-all ${
//                           filters.priceRange === range
//                             ? 'bg-[#2B7A78] text-white shadow-lg'
//                             : 'bg-white/50 hover:bg-white/80 text-gray-700 backdrop-blur-sm'
//                         }`}
//                         onClick={() => setFilters({ ...filters, priceRange: range })}
//                       >
//                         {range}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Room Type */}
//                 <div className="flex-1 min-w-[200px]">
//                   <h3 className="text-sm font-medium text-gray-700 mb-2">Room Type</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {roomTypes.map((type) => (
//                       <button
//                         key={type}
//                         className={`px-3 py-2 text-sm rounded-lg transition-all ${
//                           filters.genderType === type
//                             ? 'bg-[#2B7A78] text-white shadow-lg'
//                             : 'bg-white/50 hover:bg-white/80 text-gray-700 backdrop-blur-sm'
//                         }`}
//                         onClick={() => setFilters({ ...filters, genderType: type })}
//                       >
//                         {type}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Amenities */}
//                 <div className="w-full">
//                   <h3 className="text-sm font-medium text-gray-700 mb-2">Amenities</h3>
//                   <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
//                     {amenities.map((amenity) => (
//                       <button
//                         key={amenity}
//                         className={`px-3 py-2 text-sm rounded-lg transition-all ${
//                           filters.amenities?.includes(amenity)
//                             ? 'bg-[#2B7A78] text-white shadow-lg'
//                             : 'bg-white/50 hover:bg-white/80 text-gray-700 backdrop-blur-sm'
//                         }`}
//                         onClick={() => {
//                           const newAmenities = filters.amenities?.includes(amenity)
//                             ? filters.amenities.filter((a) => a !== amenity)
//                             : [...(filters.amenities || []), amenity];
//                           setFilters({ ...filters, amenities: newAmenities });
//                         }}
//                       >
//                         {amenity}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="flex gap-2 mt-4">
//                 <button
//                   className="flex-1 py-2 text-sm rounded-lg bg-white/50 text-gray-700 hover:bg-white/80 transition-all backdrop-blur-sm"
//                   onClick={() => setFilters({ priceRange: '', genderType: '', amenities: [] })}
//                 >
//                   Clear
//                 </button>
//                 <button
//                   className="flex-1 py-2 text-sm rounded-lg bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white hover:shadow-lg transition-all"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Apply
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default FilterBar;


import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterBar = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const priceRanges = ['$0-$25', '$26-$50', '$51-$100', '$100+'];
  const roomTypes = ['Mixed', 'Female Only', 'Male Only'];
  const amenities = ['WiFi', 'Kitchen', 'AC', 'Laundry', 'Lockers', 'Common Room'];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] p-4 rounded-xl hover:shadow-lg transition-all"
      >
        <FaFilter className="text-white text-xl" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <div 
            className="fixed inset-0 z-[60] backdrop-blur-sm bg-black/20 transition-opacity duration-200" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Filter Modal */}
          <div 
            className="fixed left-1/2 -translate-x-1/2 top-[80px] z-[70] w-[calc(100%-32px)] 
                       md:w-[600px] md:left-auto md:right-0 md:-translate-x-0 md:mr-4
                       transition-all duration-300 transform"
          >
            <div className="backdrop-blur-md bg-white/90 rounded-xl shadow-xl overflow-hidden">
              {/* Content Container */}
              <div className="p-4 max-h-[calc(100vh-120px)] overflow-y-auto">
                <div className="space-y-4">
                  {/* Price Range */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range}
                          className={`px-3 py-2 text-sm rounded-lg transition-all ${
                            filters.priceRange === range
                              ? 'bg-[#2B7A78] text-white shadow-lg'
                              : 'bg-white/50 hover:bg-white/80 text-gray-700 backdrop-blur-sm'
                          }`}
                          onClick={() => setFilters({ ...filters, priceRange: range })}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Room Type */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Room Type</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {roomTypes.map((type) => (
                        <button
                          key={type}
                          className={`px-3 py-2 text-sm rounded-lg transition-all ${
                            filters.genderType === type
                              ? 'bg-[#2B7A78] text-white shadow-lg'
                              : 'bg-white/50 hover:bg-white/80 text-gray-700 backdrop-blur-sm'
                          }`}
                          onClick={() => setFilters({ ...filters, genderType: type })}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Amenities</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {amenities.map((amenity) => (
                        <button
                          key={amenity}
                          className={`px-3 py-2 text-sm rounded-lg transition-all ${
                            filters.amenities?.includes(amenity)
                              ? 'bg-[#2B7A78] text-white shadow-lg'
                              : 'bg-white/50 hover:bg-white/80 text-gray-700 backdrop-blur-sm'
                          }`}
                          onClick={() => {
                            const newAmenities = filters.amenities?.includes(amenity)
                              ? filters.amenities.filter((a) => a !== amenity)
                              : [...(filters.amenities || []), amenity];
                            setFilters({ ...filters, amenities: newAmenities });
                          }}
                        >
                          {amenity}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions - Fixed at bottom */}
              <div className="p-4 bg-gray-50/80 backdrop-blur-sm border-t border-gray-200">
                <div className="flex gap-2">
                  <button
                    className="flex-1 py-2 text-sm rounded-lg bg-white/50 text-gray-700 hover:bg-white/80 transition-all backdrop-blur-sm"
                    onClick={() => setFilters({ priceRange: '', genderType: '', amenities: [] })}
                  >
                    Clear
                  </button>
                  <button
                    className="flex-1 py-2 text-sm rounded-lg bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white hover:shadow-lg transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterBar;