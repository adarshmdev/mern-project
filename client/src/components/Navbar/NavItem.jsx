const NavItem = ({ icon: Icon, text, active }) => (
    <a href="#" 
       className={`flex flex-col items-center ${
         active ? 'text-[#2B7A78]' : 'text-gray-400'
       } hover:text-[#2B7A78] transition-colors`}>
      <Icon className="text-2xl mb-1" />
      <span className="text-xs font-medium">{text}</span>
    </a>
  );
  
  export default NavItem;
  