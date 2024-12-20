import HostelCard from './HostelCard';

const FeaturedHostels = ({ featuredHostels }) => (
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
);

export default FeaturedHostels;
