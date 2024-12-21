import { motion } from 'framer-motion';
import { FaSearch, FaStar, FaFilter } from 'react-icons/fa';
import { RiHomeSmileLine } from 'react-icons/ri';

const About: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: "Smart Search",
      description: "Advanced search algorithms help you find the perfect accommodation based on your preferences and needs."
    },
    {
      icon: <FaFilter className="w-6 h-6" />,
      title: "Powerful Filters",
      description: "Customize your search with detailed filters for price, location, amenities, and more to find exactly what you're looking for."
    },
    {
      icon: <FaStar className="w-6 h-6" />,
      title: "Verified Reviews",
      description: "Real reviews from verified students help you make informed decisions about your future home."
    },
    {
      icon: <FaStar className="w-6 h-6" />,
      title: "Safety First",
      description: "All listings undergo thorough verification, and we implement strict safety measures to protect our community."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-[#2B7A78] py-24"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-full h-full bg-[#236865] opacity-10"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
              <RiHomeSmileLine className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Finding Your
              <br />
              <span className="text-[#DEF2F1]">Perfect Home</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
              We're revolutionizing the way students find their ideal accommodation, 
              making it easier than ever to discover, compare, and secure your perfect living space.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#2B7A78] px-8 py-4 rounded-xl font-medium hover:bg-[#DEF2F1] transition-colors"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "10,000+", label: "Happy Students" },
              { number: "1,000+", label: "Verified Properties" },
              { number: "98%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-[#2B7A78] hover:text-white transition-all duration-300 group"
              >
                <div className="text-4xl font-bold mb-2 group-hover:text-[#DEF2F1]">
                  {stat.number}
                </div>
                <div className="text-gray-600 group-hover:text-white/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-[#fafafa]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've built powerful features to make your housing search experience 
              seamless and stress-free.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl bg-[#2B7A78] text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-[#2B7A78] py-24"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Student Home?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of students who have already found their ideal accommodation 
            through our platform.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#2B7A78] px-8 py-4 rounded-xl font-medium hover:bg-[#DEF2F1] transition-colors"
          >
            Start Your Search
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;