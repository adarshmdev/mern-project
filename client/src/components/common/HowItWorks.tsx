// import { motion } from 'framer-motion';
// import { FaSearch, FaClipboardCheck, FaHome } from 'react-icons/fa';

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: <FaSearch size={40} className="text-[#2B7A78]" />,
//       title: 'Search Hostels',
//       description: 'Find the perfect hostel in your desired location.',
//     },
//     {
//       icon: <FaClipboardCheck size={40} className="text-[#2B7A78]" />,
//       title: 'Compare and Book',
//       description: 'Review amenities, prices, and ratings before booking.',
//     },
//     {
//       icon: <FaHome size={40} className="text-[#2B7A78]" />,
//       title: 'Move In',
//       description: 'Enjoy your stay with comfort and convenience.',
//     },
//   ];

//   return (
//     <div className="py-16 bg-gradient-to-b from-white to-[#E8F6F5]">
//       <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
//         How It Works
//       </h2>
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="mb-4">{step.icon}</div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
//             <p className="text-gray-600">{step.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;


import { motion } from 'framer-motion';
import { FaSearch, FaClipboardCheck, FaHome } from 'react-icons/fa';

interface Step {
  icon: JSX.Element;
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      icon: <FaSearch size={24} />,
      title: 'Search Hostels',
      description: 'Find your perfect hostel easily with smart filters and AI-powered recommendations.',
    },
    {
      icon: <FaClipboardCheck size={24} />,
      title: 'Compare & Book',
      description: 'Compare amenities, prices, and secure your stay with instant booking confirmation.',
    },
    {
      icon: <FaHome size={24} />,
      title: 'Move In',
      description: 'Experience seamless check-in and enjoy your comfortable new home.',
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#DEF2F1] to-white py-16 md:py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-[#2B7A78]/5 rounded-full -top-48 -left-48 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-[#3AAFA9]/5 rounded-full -bottom-48 -right-48 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B7A78] mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Experience the future of hostel booking with our seamless three-step process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative px-4 md:px-0"
            >
              <div className="relative group">
                {/* Card */}
                <div className="bg-white backdrop-blur-lg bg-opacity-80 p-6 md:p-8 rounded-2xl hover:shadow-xl transition-all duration-500 border border-[#2B7A78]/10 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 right-2 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-[#2B7A78] text-white rounded-full flex items-center justify-center font-bold shadow-lg text-sm md:text-base">
                    {index + 1}
                  </div>

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-gradient-to-br from-[#2B7A78] to-[#3AAFA9] p-3 md:p-4 rounded-xl inline-block text-white mb-4 md:mb-6 shadow-lg"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-semibold text-[#2B7A78] mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <button className="bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white px-6 md:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base">
            Start Your Search
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;