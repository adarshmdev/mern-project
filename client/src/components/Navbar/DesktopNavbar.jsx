import { FaBookmark, FaUser } from 'react-icons/fa';
import NavItem from './NavItem';

const DesktopNavbar = () => {
  return (
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
  );
};

export default DesktopNavbar;
