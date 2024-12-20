const CategoryButton = ({ category }) => (
    <button
      key={category}
      className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-[#2B7A78] to-[#3AAFA9] p-6 hover:shadow-xl transition-all"
    >
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
      <h3 className="relative text-xl font-semibold text-white">
        {category}
      </h3>
    </button>
  );
  
  export default CategoryButton;
  