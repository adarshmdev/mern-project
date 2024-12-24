// // TestimonialCarousel.tsx (Fixed version)
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useEffect, useCallback } from 'react';
// import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// interface Testimonial {
//   name: string;
//   role: string;
//   image: string;
//   content: string;
//   rating: number;
// }

// interface Props {
//   testimonials: Testimonial[];
// }

// const TestimonialCarousel: React.FC<Props> = ({ testimonials }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1
//     },
//     exit: (direction: number) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//     })
//   };

//   const navigate = useCallback((newDirection: number) => {
//     if (isAnimating) return;
    
//     setDirection(newDirection);
//     setIsAnimating(true);
    
//     if (newDirection > 0) {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     } else {
//       setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//     }
//   }, [isAnimating, testimonials.length]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       navigate(1);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [navigate]);

//   return (
//     <div className="py-32 bg-gradient-to-b from-[#2B7A78] to-[#236865] relative overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-white mb-4">What Our Users Say</h2>
//           <p className="text-xl text-white/80">Hear from students who found their perfect home</p>
//         </motion.div>

//         <div className="relative">
//           <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{
//                 x: { type: "spring", stiffness: 300, damping: 30 },
//                 opacity: { duration: 0.2 }
//               }}
//               className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
//             >
//               <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-center">
//                 {/* Profile Section */}
//                 <div className="text-center md:text-left">
//                   <div className="mb-6 relative inline-block">
//                     <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#2B7A78]/20">
//                       <img
//                         src={testimonials[currentIndex].image}
//                         alt={testimonials[currentIndex].name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-1">
//                     {testimonials[currentIndex].name}
//                   </h3>
//                   <p className="text-[#2B7A78] font-medium mb-4">
//                     {testimonials[currentIndex].role}
//                   </p>
//                   <div className="flex justify-center md:justify-start space-x-1">
//                     {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//                       <FaStar key={i} className="text-[#2B7A78]" />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div>
//                   <FaQuoteLeft className="text-4xl text-[#2B7A78] mb-6" />
//                   <p className="text-xl leading-relaxed text-gray-700 italic">
//                     "{testimonials[currentIndex].content}"
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation */}
//           <div className="absolute -bottom-6 right-12 flex space-x-4">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => navigate(-1)}
//               disabled={isAnimating}
//               className="bg-[#2B7A78] p-4 rounded-2xl text-white shadow-lg hover:bg-[#236865] transition-colors disabled:opacity-50"
//             >
//               <FaChevronLeft />
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => navigate(1)}
//               disabled={isAnimating}
//               className="bg-[#2B7A78] p-4 rounded-2xl text-white shadow-lg hover:bg-[#236865] transition-colors disabled:opacity-50"
//             >
//               <FaChevronRight />
//             </motion.button>
//           </div>
//         </div>

//         {/* Pagination dots */}
//         <div className="flex justify-center space-x-2 mt-12">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;

// TestimonialCarousel.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {Tooltip} from 'react-tooltip'; // Add this import


interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

interface Props {
  testimonials: Testimonial[];
}

const MAX_TEXT_LENGTH = 150; // Maximum characters to show

const truncateText = (text: string) => {
  if (text.length <= MAX_TEXT_LENGTH) return text;
  return text.substring(0, MAX_TEXT_LENGTH).trim() + '...';
};

const TestimonialCarousel: React.FC<Props> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      zIndex: 0
    })
  };

  const navigate = useCallback((newDirection: number) => {
    if (isAnimating) return;
    
    setDirection(newDirection);
    setIsAnimating(true);
    
    if (newDirection > 0) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  }, [isAnimating, testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      navigate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-[#2B7A78] to-[#236865] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What Our Users Say</h2>
          <p className="text-lg md:text-xl text-white/80">Hear from students who found their perfect home</p>
        </motion.div>

        <div className="relative h-[400px] sm:h-[350px] md:h-[300px] mb-20">
          <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl"
            >
              <div className="flex flex-col md:grid md:grid-cols-[1fr,2fr] gap-6 md:gap-8 h-full">
                {/* Profile Section */}
                <div className="text-center md:text-left">
                  <div className="mb-4 relative inline-block">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#2B7A78]/20 mx-auto md:mx-0">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-[#2B7A78] font-medium mb-3">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex justify-center md:justify-start space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-[#2B7A78] text-sm" />
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center">
                  <FaQuoteLeft className="text-2xl text-[#2B7A78] mb-4" />
                  <div 
                    className="text-base leading-relaxed text-gray-700 italic cursor-help"
                    data-tooltip-id={`tooltip-${currentIndex}`}
                    data-tooltip-content={testimonials[currentIndex].content.length > MAX_TEXT_LENGTH ? testimonials[currentIndex].content : ""}
                  >
                    "{truncateText(testimonials[currentIndex].content)}"
                  </div>
                  <Tooltip
                    id={`tooltip-${currentIndex}`}
                    place="bottom"
                    className="max-w-md bg-gray-900 p-4 rounded-xl shadow-xl z-50"
                    style={{
                      backgroundColor: '#1a1a1a',
                      color: '#fff',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      zIndex: 1000
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation - Moved outside and above the dots */}
        <div className="flex justify-center space-x-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            disabled={isAnimating}
            className="bg-[#2B7A78] p-3 rounded-xl text-white shadow-lg hover:bg-[#236865] transition-colors disabled:opacity-50"
          >
            <FaChevronLeft className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(1)}
            disabled={isAnimating}
            className="bg-[#2B7A78] p-3 rounded-xl text-white shadow-lg hover:bg-[#236865] transition-colors disabled:opacity-50"
          >
            <FaChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-4 md:w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;