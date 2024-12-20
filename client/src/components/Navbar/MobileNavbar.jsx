import { FaHome, FaCompass, FaBookmark, FaUser } from 'react-icons/fa';
import NavItem from './NavItem';

const MobileNavbar = () => {
  return (
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
  );
};

export default MobileNavbar;
