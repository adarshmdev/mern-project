// import { motion } from 'framer-motion';
// import { FaSearch, FaStar, FaFilter } from 'react-icons/fa';
// import { RiHomeSmileLine } from 'react-icons/ri';
// import StatsSection from '../../components/common/StatsSection';
// import TestimonialCarousel from '../../components/common/TestimonialCarousel';

// const About: React.FC = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const features = [
//     {
//       icon: <FaSearch className="w-6 h-6" />,
//       title: "Smart Search",
//       description: "Advanced search algorithms help you find the perfect accommodation based on your preferences and needs."
//     },
//     {
//       icon: <FaFilter className="w-6 h-6" />,
//       title: "Powerful Filters",
//       description: "Customize your search with detailed filters for price, location, amenities, and more to find exactly what you're looking for."
//     },
//     {
//       icon: <FaStar className="w-6 h-6" />,
//       title: "Verified Reviews",
//       description: "Real reviews from verified students help you make informed decisions about your future home."
//     },
//     {
//       icon: <FaStar className="w-6 h-6" />,
//       title: "Safety First",
//       description: "All listings undergo thorough verification, and we implement strict safety measures to protect our community."
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "University Student",
//       image: "download.jpeg",
//       content: "Found my dream apartment within a week! The virtual tours saved me so much time.",
//       rating: 5
//     },
//     // Add more testimonials...
//   ];

//   return (
//     <div className="min-h-screen bg-[#fafafa]">
//       {/* Hero Section */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="relative bg-[#2B7A78] py-24"
//       >
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             animate={{
//               scale: [1, 1.1, 1],
//               rotate: [0, 5, 0],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//             className="absolute w-full h-full bg-[#236865] opacity-10"
//           />
//         </div>

//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-center relative z-10"
//           >
//             <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
//               <RiHomeSmileLine className="w-12 h-12 text-white" />
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//               Finding Your
//               <br />
//               <span className="text-[#DEF2F1]">Perfect Home</span>
//             </h1>
//             <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
//               We're revolutionizing the way students find their ideal accommodation, 
//               making it easier than ever to discover, compare, and secure your perfect living space.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-[#2B7A78] px-8 py-4 rounded-xl font-medium hover:bg-[#DEF2F1] transition-colors"
//             >
//               Get Started
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Stats Section */}
//       <StatsSection />


//       {/* Mission Section */}
// <motion.div
//   variants={containerVariants}
//   initial="hidden"
//   whileInView="visible"
//   className="py-32 relative overflow-hidden"
// >
//   {/* Background gradient */}
//   <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafa] to-[#e5f1f1]" />
  
//   {/* Decorative shapes */}
//   <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#2B7A78]/5 rounded-full blur-[80px] transform translate-x-1/2 -translate-y-1/2" />
//   <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#2B7A78]/5 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2" />

//   <div className="max-w-7xl mx-auto px-6 relative">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//       {/* Content Section */}
//       <motion.div 
//         variants={itemVariants}
//         className="relative z-10 lg:pr-8"
//       >
//         {/* Section Label */}
//         <motion.div 
//           whileHover={{ scale: 1.05 }}
//           className="inline-flex items-center space-x-2 bg-[#2B7A78]/10 rounded-full pl-1 pr-4 py-1 mb-6"
//         >
//           <span className="bg-[#2B7A78] text-white p-1 rounded-full">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           </span>
//           <span className="text-[#2B7A78] font-medium text-sm">Our Purpose & Vision</span>
//         </motion.div>

//         {/* Main Heading */}
//         <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
//           Revolutionizing
//           <span className="relative">
//             <span className="relative z-10 text-[#2B7A78]"> Student Living </span>
//             <svg className="absolute bottom-0 left-0 w-full h-3 text-[#2B7A78]/10" viewBox="0 0 100 12" preserveAspectRatio="none">
//               <path d="M0,0 Q50,12 100,0" fill="currentColor" />
//             </svg>
//           </span>
//           Experience
//         </h2>

//         {/* Description */}
//         <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl">
//           We're transforming student accommodation by creating a seamless, 
//           transparent, and secure platform that connects students with their 
//           perfect living spaces. Making housing search as simple as a few clicks.
//         </p>

//         {/* Feature Cards */}
//         <div className="space-y-6">
//           {/* Card 1 */}
//           <motion.div 
//             whileHover={{ translateX: 10 }}
//             className="group bg-white rounded-2xl p-6 shadow-lg shadow-[#2B7A78]/5 border border-gray-100 transform transition-all duration-300 hover:shadow-xl"
//           >
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2B7A78] to-[#2B7A78]/80 rounded-xl flex items-center justify-center transform transition-transform group-hover:rotate-6">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900">Trust & Security</h3>
//                 <p className="text-gray-600">Building a trusted ecosystem where students make confident housing decisions.</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div 
//             whileHover={{ translateX: 10 }}
//             className="group bg-white rounded-2xl p-6 shadow-lg shadow-[#2B7A78]/5 border border-gray-100 transform transition-all duration-300 hover:shadow-xl"
//           >
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2B7A78] to-[#2B7A78]/80 rounded-xl flex items-center justify-center transform transition-transform group-hover:rotate-6">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900">Smart Innovation</h3>
//                 <p className="text-gray-600">Leveraging cutting-edge technology to simplify your housing journey.</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div 
//             whileHover={{ translateX: 10 }}
//             className="group bg-white rounded-2xl p-6 shadow-lg shadow-[#2B7A78]/5 border border-gray-100 transform transition-all duration-300 hover:shadow-xl"
//           >
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2B7A78] to-[#2B7A78]/80 rounded-xl flex items-center justify-center transform transition-transform group-hover:rotate-6">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900">Community First</h3>
//                 <p className="text-gray-600">Fostering meaningful connections between students and quality providers.</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Illustration Section */}
//       <motion.div 
//         variants={itemVariants}
//         className="relative lg:h-[600px] flex items-center justify-center"
//       >
//         <div className="relative w-full max-w-[500px] mx-auto">
//           {/* Main illustration */}
//           <motion.div
//             animate={{
//               y: [-8, 8, -8],
//               rotate: [-1, 1, -1],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//             className="relative z-20"
//           >
//             <img
//               src="1734781655715.png"
//               alt="Student Housing Innovation"
//               className="w-full h-auto"
//             />
//           </motion.div>

//           {/* Glowing effect behind illustration */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#2B7A78]/20 to-transparent blur-3xl -z-10" />

//           {/* Floating elements */}
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.3, 0.6, 0.3],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//             className="absolute top-1/4 right-0 w-20 h-20 bg-[#2B7A78]/30 rounded-full blur-2xl"
//           />
//         </div>
//       </motion.div>
//     </div>
//   </div>
// </motion.div>

//       {/* Features Section */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="py-24 bg-[#fafafa]"
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             variants={itemVariants}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Why Choose Us
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We've built powerful features to make your housing search experience 
//               seamless and stress-free.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="flex items-start space-x-6">
//                   <div className="p-4 rounded-xl bg-[#2B7A78] text-white">
//                     {feature.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       <TestimonialCarousel testimonials={testimonials} />

//       {/* CTA Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="bg-[#2B7A78] py-24"
//       >
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Find Your Perfect Student Home?
//           </h2>
//           <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
//             Join thousands of students who have already found their ideal accommodation 
//             through our platform.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-white text-[#2B7A78] px-8 py-4 rounded-xl font-medium hover:bg-[#DEF2F1] transition-colors"
//           >
//             Start Your Search
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default About;


import { motion } from 'framer-motion';
import { FaSearch, FaStar, FaFilter, FaArrowRight } from 'react-icons/fa';
import { RiHomeSmileLine } from 'react-icons/ri';
import { IoStatsChartSharp } from 'react-icons/io5';
import StatsSection from '../../components/common/StatsSection';
import TestimonialCarousel from '../../components/common/TestimonialCarousel';
import DesktopNavbar from '../../components/Navbar/DesktopNavbar';
import MobileNavbar from '../../components/Navbar/MobileNavbar';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const features = [
    {
      icon: <FaSearch className="w-7 h-7" />,
      title: "Smart Search",
      description: "Our AI-powered search understands your preferences and finds accommodations that perfectly match your needs.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <FaFilter className="w-7 h-7" />,
      title: "Advanced Filters",
      description: "Customize your search with detailed filters for price, location, amenities, and more for precise results.",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: <FaStar className="w-7 h-7" />,
      title: "Verified Reviews",
      description: "Make confident decisions with authentic reviews from verified students who've lived in the properties.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <IoStatsChartSharp className="w-7 h-7" />,
      title: "Market Insights",
      description: "Access real-time market data and trends to make informed decisions about your housing choices.",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Desktop Navbar */}
      <DesktopNavbar />
      {/* Mobile Navbar */}
      <MobileNavbar />
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-br from-[#2B7A78] to-[#205f5d] py-32 overflow-hidden"
      >
        {/* Animated background patterns */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8"
            >
              <RiHomeSmileLine className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">Reinventing Student Housing</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Finding Your
              <span className="relative ml-4">
                <span className="relative z-10 text-[#DEF2F1]">Perfect Home</span>
                <svg className="absolute bottom-1 left-0 w-full h-3 text-[#DEF2F1]/20" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,0 Q50,12 100,0" fill="currentColor" />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
              We're revolutionizing the way students find their ideal accommodation, 
              making it easier than ever to discover, compare, and secure your perfect living space.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#2B7A78] px-8 py-4 rounded-xl font-medium hover:bg-[#DEF2F1] transition-colors w-full sm:w-auto"
              >
                Start Your Search
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center space-x-2 text-white px-8 py-4 rounded-xl font-medium border-2 border-white/20 hover:border-white/40 transition-colors w-full sm:w-auto"
              >
                <span>Learn More</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section with enhanced design */}
      <StatsSection />

      {/* Features Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-32"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Your Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience a seamless housing search with our innovative tools and features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-8 shadow-xl shadow-[#2B7A78]/5 border border-gray-100 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${feature.color}" />
                
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white transform transition-transform group-hover:rotate-6`}>
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
      </motion.section>

      {/* Testimonials Section */}
      <TestimonialCarousel testimonials={[
        {
          name: "Sarah Johnson",
          role: "Graduate Student",
          image: "download.jpeg",
          content: "Found my dream apartment within a week! The virtual tours saved me so much time and the verified reviews gave me confidence in my choice.",
          rating: 5
        },
        {
          name: "Michael Chen",
          role: "International Student",
          image: "download.jpeg",
          content: "As an international student, finding accommodation was daunting. This platform made everything simple and transparent.",
          rating: 5
        },
        {
          name: "Emma Thompson",
          role: "Undergraduate Student",
          image: "download.jpeg",
          content: "The detailed filters helped me find exactly what I was looking for within my budget. Highly recommended!",
          rating: 5
        }
      ]} />

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-[#2B7A78] to-[#205f5d] py-32 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Find Your Perfect
              <br />
              Student Home?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join thousands of students who have already found their ideal accommodation 
              through our platform. Start your journey today!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#2B7A78] px-8 py-4 rounded-xl font-medium hover:bg-[#DEF2F1] transition-colors w-full sm:w-auto"
              >
                Get Started Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center space-x-2 text-white px-8 py-4 rounded-xl font-medium border-2 border-white/20 hover:border-white/40 transition-colors w-full sm:w-auto"
              >
                <span>Schedule a Demo</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;