// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
// import { RiHomeSmileLine } from 'react-icons/ri';

// const Login: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Add login logic here
//     setTimeout(() => setIsLoading(false), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#DEF2F1] via-white to-[#DEF2F1] flex items-center justify-center p-4">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute w-[500px] h-[500px] bg-[#2B7A78]/5 rounded-full -top-48 -left-48 blur-3xl animate-pulse"></div>
//         <div className="absolute w-[500px] h-[500px] bg-[#3AAFA9]/5 rounded-full -bottom-48 -right-48 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md relative z-10"
//       >
//         {/* Login Container */}
//         <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl">
//           {/* Logo & Header */}
//           <div className="px-8 pt-10 pb-8">
//             <div className="flex justify-center mb-6">
//               <div className="bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] p-3 rounded-2xl">
//                 <RiHomeSmileLine className="w-8 h-8 text-white" />
//               </div>
//             </div>
//             <motion.div
//               initial={{ scale: 0.95 }}
//               animate={{ scale: 1 }}
//               className="text-center"
//             >
//               <h1 className="text-3xl font-bold bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] bg-clip-text text-transparent">
//                 Welcome to HostelHub
//               </h1>
//               <p className="text-gray-600 mt-2">Sign in to continue</p>
//             </motion.div>
//           </div>

//           {/* Login Form */}
//           <form onSubmit={handleSubmit} className="px-8 pb-10 space-y-6">
//             {/* Email/Phone Field */}
//             <div className="space-y-2">
//               <label className="block text-gray-700 text-sm font-medium pl-1">
//                 Email or Phone
//               </label>
//               <div className="relative group">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <FaEnvelope className="h-5 w-5 text-[#2B7A78] group-hover:text-[#3AAFA9] transition-colors duration-200" />
//                 </div>
//                 <input
//                   type="text"
//                   className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-100 focus:border-[#2B7A78] focus:ring-4 focus:ring-[#2B7A78]/10 transition-all duration-200 outline-none bg-gray-50 focus:bg-white"
//                   placeholder="Enter your email or phone"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="space-y-2">
//               <label className="block text-gray-700 text-sm font-medium pl-1">
//                 Password
//               </label>
//               <div className="relative group">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <FaLock className="h-5 w-5 text-[#2B7A78] group-hover:text-[#3AAFA9] transition-colors duration-200" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="w-full pl-12 pr-12 py-3.5 rounded-xl border-2 border-gray-100 focus:border-[#2B7A78] focus:ring-4 focus:ring-[#2B7A78]/10 transition-all duration-200 outline-none bg-gray-50 focus:bg-white"
//                   placeholder="Enter your password"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#2B7A78] hover:text-[#3AAFA9] transition-colors duration-200"
//                 >
//                   {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
//                 </button>
//               </div>
//             </div>

//             {/* Forgot Password Link */}
//             <div className="flex items-center justify-end">
//               <Link
//                 to="/forgot-password"
//                 className="text-sm text-[#2B7A78] hover:text-[#3AAFA9] transition-colors duration-200 font-medium"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             {/* Submit Button */}
//             <motion.button
//               whileHover={{ scale: 1.01 }}
//               whileTap={{ scale: 0.99 }}
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 relative overflow-hidden group"
//             >
//               {isLoading ? (
//                 <div className="flex items-center justify-center">
//                   <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                 </div>
//               ) : (
//                 <span className="group-hover:scale-105 inline-block transition-transform duration-200">
//                   Sign In
//                 </span>
//               )}
//             </motion.button>

//             {/* Register Link */}
//             <div className="text-center pt-2">
//               <span className="text-gray-600">New to HostelHub? </span>
//               <Link
//                 to="/register"
//                 className="text-[#2B7A78] hover:text-[#3AAFA9] font-semibold transition-colors duration-200"
//               >
//                 Create Account
//               </Link>
//             </div>
//           </form>
//         </div>

//         {/* Trust Indicators */}
//         <div className="mt-8 text-center space-y-2">
//           <p className="text-gray-600 text-sm">
//             Trusted by 10,000+ students worldwide
//           </p>
//           <div className="flex justify-center space-x-2">
//             <span className="text-[#2B7A78] text-xs">🔒 Secure login</span>
//             <span className="text-gray-400">•</span>
//             <span className="text-[#2B7A78] text-xs">24/7 Support</span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;



// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
// import { RiHomeSmileLine } from 'react-icons/ri';

// const Login: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Add login logic here
//     setTimeout(() => setIsLoading(false), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#DEF2F1] via-white to-[#DEF2F1] flex">
//       {/* Left Section with Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
//         <img 
//           src="/hostel-image.jpg" // Replace with your actual image path
//           alt="Hostel Living"
//           className="object-cover w-full h-full"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#2B7A78]/80 to-transparent flex items-center justify-center">
//           <div className="text-white max-w-md px-8">
//             <h1 className="text-4xl font-bold mb-4">Experience Comfortable Living</h1>
//             <p className="text-lg">Join thousands of students in finding their perfect hostel accommodation</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Login Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute w-[400px] h-[400px] bg-[#2B7A78]/5 rounded-full -top-32 -right-32 blur-3xl animate-pulse"></div>
//           <div className="absolute w-[400px] h-[400px] bg-[#3AAFA9]/5 rounded-full -bottom-32 -left-32 blur-3xl animate-pulse delay-1000"></div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full max-w-md relative z-10"
//         >
//           {/* Logo & Welcome Text */}
//           <div className="text-center mb-8">
//             <div className="inline-block bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] p-3 rounded-2xl mb-6">
//               <RiHomeSmileLine className="w-8 h-8 text-white" />
//             </div>
//             <h2 className="text-3xl font-bold text-gray-800">Welcome Back!</h2>
//             <p className="text-gray-600 mt-2">Sign in to your HostelHub account</p>
//           </div>

//           {/* Social Login Buttons */}
//           <div className="flex gap-4 mb-8">
//             <button className="flex-1 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-[#2B7A78] transition-colors duration-200 flex items-center justify-center gap-2">
//               <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
//               Google
//             </button>
//             <button className="flex-1 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-[#2B7A78] transition-colors duration-200 flex items-center justify-center gap-2">
//               <img src="/facebook-icon.svg" alt="Facebook" className="w-5 h-5" />
//               Facebook
//             </button>
//           </div>

//           <div className="relative flex items-center gap-4 mb-8">
//             <div className="flex-1 border-t border-gray-200"></div>
//             <span className="text-gray-500 text-sm">or continue with</span>
//             <div className="flex-1 border-t border-gray-200"></div>
//           </div>

//           {/* Login Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <input
//                 type="text"
//                 className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#2B7A78] focus:ring-4 focus:ring-[#2B7A78]/10 transition-all duration-200 outline-none"
//                 placeholder="Email or Phone"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#2B7A78] focus:ring-4 focus:ring-[#2B7A78]/10 transition-all duration-200 outline-none"
//                   placeholder="Password"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#2B7A78]"
//                 >
//                   {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#2B7A78] focus:ring-[#2B7A78]" />
//                 <span className="text-sm text-gray-600">Remember me</span>
//               </label>
//               <Link to="/forgot-password" className="text-sm text-[#2B7A78] hover:text-[#3AAFA9]">
//                 Forgot Password?
//               </Link>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.01 }}
//               whileTap={{ scale: 0.99 }}
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200"
//             >
//               {isLoading ? (
//                 <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
//               ) : (
//                 "Sign In"
//               )}
//             </motion.button>

//             <p className="text-center text-gray-600">
//               Don't have an account?{" "}
//               <Link to="/register" className="text-[#2B7A78] hover:text-[#3AAFA9] font-medium">
//                 Sign Up
//               </Link>
//             </p>
//           </form>

//           {/* Trust Badges */}
//           <div className="mt-8 flex items-center justify-center gap-6">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-[#2B7A78]/10 flex items-center justify-center">
//                 🔒
//               </div>
//               <span className="text-sm text-gray-600">Secure Login</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-[#2B7A78]/10 flex items-center justify-center">
//                 ⚡
//               </div>
//               <span className="text-sm text-gray-600">24/7 Support</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaApple } from 'react-icons/fa';
// import { RiHomeSmileLine } from 'react-icons/ri';

// const Login: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [focusedInput, setFocusedInput] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setTimeout(() => setIsLoading(false), 2000);
//   };

//   return (
//     <div className="min-h-screen relative bg-gradient-to-br from-[#DEF2F1] via-white to-[#DEF2F1] flex">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 90, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute w-[800px] h-[800px] bg-gradient-to-r from-[#2B7A78]/10 to-[#3AAFA9]/10 rounded-full -top-1/4 -left-1/4 blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             rotate: [90, 0, 90],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute w-[600px] h-[600px] bg-gradient-to-l from-[#2B7A78]/10 to-[#3AAFA9]/10 rounded-full -bottom-1/4 -right-1/4 blur-3xl"
//         />
//       </div>

//       {/* Left Section */}
//       <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
//         <motion.div
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0"
//         >
//           <img 
//             src="/hostel-image.jpg"
//             alt="Hostel Living"
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#2B7A78]/90 to-transparent">
//             <div className="absolute inset-0 backdrop-blur-[2px]" />
//           </div>
//         </motion.div>

//         <motion.div 
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="relative z-10 p-12 flex flex-col justify-center"
//         >
//           <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
//             Find Your Perfect <br />
//             <span className="text-[#DEF2F1]">Student Home</span>
//           </h1>
//           <p className="text-white/90 text-lg max-w-md">
//             Join our community of 10,000+ students worldwide and discover your ideal accommodation
//           </p>

//           {/* Feature Badges */}
//           <div className="mt-12 space-y-4">
//             {['Verified Properties', 'Instant Booking', 'Student Community'].map((feature, index) => (
//               <motion.div
//                 initial={{ x: -30, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.8 + (index * 0.2) }}
//                 key={feature}
//                 className="flex items-center space-x-3"
//               >
//                 <div className="w-2 h-2 rounded-full bg-[#DEF2F1]" />
//                 <span className="text-white/90">{feature}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* Right Section - Login Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="w-full max-w-md"
//         >
//           <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
//             {/* Logo & Welcome */}
//             <motion.div
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               className="text-center mb-8"
//             >
//               <div className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] shadow-lg mb-6">
//                 <RiHomeSmileLine className="w-8 h-8 text-white" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
//               <p className="text-gray-600 mt-2">Your home away from home awaits</p>
//             </motion.div>

//             {/* Social Login */}
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {[
//                 { icon: <FaGoogle />, label: 'Google' },
//                 { icon: <FaApple />, label: 'Apple' }
//               ].map((provider) => (
//                 <motion.button
//                   key={provider.label}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/80 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
//                 >
//                   {provider.icon}
//                   <span>{provider.label}</span>
//                 </motion.button>
//               ))}
//             </div>

//             <div className="relative flex items-center gap-4 mb-8">
//               <div className="flex-1 border-t border-gray-200"></div>
//               <span className="text-gray-500 text-sm bg-white/50 px-3 rounded-full">or</span>
//               <div className="flex-1 border-t border-gray-200"></div>
//             </div>

//             {/* Login Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Email Input */}
//               <motion.div
//                 animate={focusedInput === 'email' ? { scale: 1.02 } : { scale: 1 }}
//                 className="relative"
//               >
//                 <input
//                   type="email"
//                   className="w-full px-5 py-4 rounded-xl bg-white/50 border-2 border-transparent focus:border-[#2B7A78] focus:bg-white transition-all duration-200 outline-none"
//                   placeholder="Email address"
//                   onFocus={() => setFocusedInput('email')}
//                   onBlur={() => setFocusedInput(null)}
//                 />
//                 <AnimatePresence>
//                   {focusedInput === 'email' && (
//                     <motion.span
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       className="absolute left-4 -top-2.5 text-xs text-[#2B7A78] bg-white px-2 rounded-full"
//                     >
//                       Email address
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </motion.div>

//               {/* Password Input */}
//               <motion.div
//                 animate={focusedInput === 'password' ? { scale: 1.02 } : { scale: 1 }}
//                 className="relative"
//               >
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="w-full px-5 py-4 rounded-xl bg-white/50 border-2 border-transparent focus:border-[#2B7A78] focus:bg-white transition-all duration-200 outline-none"
//                   placeholder="Password"
//                   onFocus={() => setFocusedInput('password')}
//                   onBlur={() => setFocusedInput(null)}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#2B7A78] transition-colors"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </motion.div>

//               {/* Remember & Forgot */}
//               <div className="flex items-center justify-between">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <div className="relative">
//                     <input type="checkbox" className="sr-only peer" />
//                     <div className="w-4 h-4 border-2 border-gray-300 rounded peer-checked:border-[#2B7A78] peer-checked:bg-[#2B7A78] transition-all" />
//                     <div className="absolute inset-0 hidden peer-checked:flex items-center justify-center text-white">
//                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                   </div>
//                   <span className="text-sm text-gray-600">Remember me</span>
//                 </label>
//                 <Link
//                   to="/forgot-password"
//                   className="text-sm text-[#2B7A78] hover:text-[#3AAFA9] transition-colors"
//                 >
//                   Forgot Password?
//                 </Link>
//               </div>

//               {/* Submit Button */}
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 className="w-full relative overflow-hidden group bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white py-4 rounded-xl font-medium shadow-lg"
//               >
//                 <AnimatePresence>
//                   {isLoading ? (
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="absolute inset-0 flex items-center justify-center bg-inherit"
//                     >
//                       <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     </motion.div>
//                   ) : (
//                     <motion.span
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="block"
//                     >
//                       Sign In
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </motion.button>
//             </form>

//             {/* Sign Up Link */}
//             <p className="mt-6 text-center text-gray-600">
//               New to HostelHub?{" "}
//               <Link
//                 to="/register"
//                 className="text-[#2B7A78] hover:text-[#3AAFA9] font-medium transition-colors"
//               >
//                 Create Account
//               </Link>
//             </p>
//           </div>

//           {/* Trust Badges */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//             className="mt-8 flex justify-center space-x-8"
//           >
//             {['Secure Platform', '24/7 Support', 'Instant Access'].map((badge, index) => (
//               <motion.div
//                 key={badge}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 1.2 + (index * 0.1) }}
//                 className="flex flex-col items-center"
//               >
//                 <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center mb-2">
//                   {index === 0 ? '🔒' : index === 1 ? '💬' : '⚡'}
//                 </div>
//                 <span className="text-xs text-gray-600">{badge}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Login;






import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaApple } from 'react-icons/fa';
import { RiHomeSmileLine } from 'react-icons/ri';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };
  
    return (
      <div className="min-h-screen flex bg-[#fafafa]">
        {/* Left Section - Simplified */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#2B7A78]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img 
              src="/hostel-image.jpg"
              alt="Hostel Living"
              className="object-cover w-full h-full opacity-20"
            />
          </motion.div>
  
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative z-10 p-16 flex flex-col justify-center"
          >
            <h1 className="text-6xl font-bold text-white mb-8">
              Find Your
              <br />
              <span className="text-[#DEF2F1]">Student Home</span>
            </h1>
            <p className="text-white/90 text-xl max-w-md leading-relaxed mb-12">
              Join our community of 10,000+ students worldwide and discover your ideal accommodation
            </p>
  
            <div className="space-y-6">
              {['Verified Properties', 'Instant Booking', 'Student Community'].map((feature, index) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + (index * 0.2) }}
                  key={feature}
                  className="flex items-center space-x-4"
                >
                  <div className="w-1 h-8 bg-[#DEF2F1]" />
                  <span className="text-white text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
  
        {/* Right Section - Keeping original design */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DEF2F1]/40 via-[#3AAFA9]/10 to-[#2B7A78]/5" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md relative z-10"
          >
      <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-lg border border-white/20">
              {/* Logo & Welcome */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-center mb-8"
              >
                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] shadow-lg mb-6">
                  <RiHomeSmileLine className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
                <p className="text-gray-600 mt-2">Your home away from home awaits</p>
              </motion.div>
  
              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <FaGoogle />, label: 'Google' },
                  { icon: <FaApple />, label: 'Apple' }
                ].map((provider) => (
                  <motion.button
                    key={provider.label}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/80 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    {provider.icon}
                    <span>{provider.label}</span>
                  </motion.button>
                ))}
              </div>
  
              <div className="relative flex items-center gap-4 mb-8">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="text-gray-500 text-sm bg-white/50 px-3 rounded-full">or</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>
  
              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <motion.div
                  animate={focusedInput === 'email' ? { scale: 1.02 } : { scale: 1 }}
                  className="relative"
                >
                  <input
                    type="email"
                    className="w-full px-5 py-4 rounded-xl bg-white/50 border-2 border-transparent focus:border-[#2B7A78] focus:bg-white transition-all duration-200 outline-none"
                    placeholder="Email address"
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                  />
                  <AnimatePresence>
                    {focusedInput === 'email' && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-4 -top-2.5 text-xs text-[#2B7A78] bg-white px-2 rounded-full"
                      >
                        Email address
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
  
                {/* Password Input */}
                <motion.div
                  animate={focusedInput === 'password' ? { scale: 1.02 } : { scale: 1 }}
                  className="relative"
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-5 py-4 rounded-xl bg-white/50 border-2 border-transparent focus:border-[#2B7A78] focus:bg-white transition-all duration-200 outline-none"
                    placeholder="Password"
                    onFocus={() => setFocusedInput('password')}
                    onBlur={() => setFocusedInput(null)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#2B7A78] transition-colors"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </motion.div>
  
                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-4 h-4 border-2 border-gray-300 rounded peer-checked:border-[#2B7A78] peer-checked:bg-[#2B7A78] transition-all" />
                      <div className="absolute inset-0 hidden peer-checked:flex items-center justify-center text-white">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#2B7A78] hover:text-[#3AAFA9] transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>
  
                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full relative overflow-hidden group bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white py-4 rounded-xl font-medium shadow-lg"
                >
                  <AnimatePresence>
                    {isLoading ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-inherit"
                      >
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </motion.div>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="block"
                      >
                        Sign In
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
  
              {/* Sign Up Link */}
              <p className="mt-6 text-center text-gray-600">
                New to HostelHub?{" "}
                <Link
                  to="/register"
                  className="text-[#2B7A78] hover:text-[#3AAFA9] font-medium transition-colors"
                >
                  Create Account
                </Link>
              </p>
            </div>
  
            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex justify-center space-x-8"
            >
              {['Secure Platform', '24/7 Support', 'Instant Access'].map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + (index * 0.1) }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 ? '🔒' : index === 1 ? '💬' : '⚡'}
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#2B7A78] transition-colors duration-300">
                    {badge}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default Login;