import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import FilterBar from './FilterBar';

const SearchBar = ({ searchLocation, setSearchLocation, filters, setFilters }) => (
  <div className="max-w-3xl mx-auto mb-14">
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
        <div className="flex gap-2">
          <FilterBar filters={filters} setFilters={setFilters} />
          <button className="bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] p-4 rounded-xl hover:shadow-lg transition-all">
            <FaSearch className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SearchBar;