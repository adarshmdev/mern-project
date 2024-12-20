import CategoryButton from './CategoryButton';

const Categories = () => (
  <div className="mb-16">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-bold text-gray-800">Popular Categories</h2>
      <a href="/categories" className="text-[#2B7A78] hover:text-[#3AAFA9] font-medium">
        View all
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {['Student Friendly', 'Near Universities', 'Budget Stays', 'Luxury Hostels'].map((category) => (
        <CategoryButton category={category} />
      ))}
    </div>
  </div>
);

export default Categories;
