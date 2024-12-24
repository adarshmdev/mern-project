import { FaHeart, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

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

export default HostelCard;
