import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { RiHomeSmileLine } from 'react-icons/ri';
import { FaChevronDown } from 'react-icons/fa';


const Register: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    const [isRoleOpen, setIsRoleOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<string>('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };
  
    return (
      <div className="min-h-screen flex bg-[#fafafa]">
        {/* Left Section - Same as Login */}
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
  
        {/* Right Section - Registration Form */}
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
                <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                <p className="text-gray-600 mt-2">Join our community today</p>
              </motion.div>
  
              {/* Social Registration */}
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
  
              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name Input */}
                <motion.div
                  animate={focusedInput === 'name' ? { scale: 1.02 } : { scale: 1 }}
                  className="relative"
                >
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-xl bg-white/50 border-2 border-transparent focus:border-[#2B7A78] focus:bg-white transition-all duration-200 outline-none"
                    placeholder="Full Name"
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </motion.div>

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
                </motion.div>

                {/* Phone Number Input */}
<motion.div
  animate={focusedInput === 'phone' ? { scale: 1.02 } : { scale: 1 }}
  className="relative"
>
  <input
    type="tel"
    className="w-full px-5 py-4 rounded-xl bg-white/50 border-2 border-transparent focus:border-[#2B7A78] focus:bg-white transition-all duration-200 outline-none"
    placeholder="Phone Number"
    onFocus={() => setFocusedInput('phone')}
    onBlur={() => setFocusedInput(null)}
  />
</motion.div>

{/* User Role Dropdown */}
<div className="relative">
  <motion.div
    animate={isRoleOpen ? { scale: 1.02 } : { scale: 1 }}
    className="relative"
  >
    <button
      type="button"
      onClick={() => setIsRoleOpen(!isRoleOpen)}
      className="w-full px-5 py-4 rounded-xl bg-white/50 border-2 border-transparent hover:border-[#2B7A78] focus:border-[#2B7A78] focus:bg-white transition-all duration-200 outline-none text-left flex items-center justify-between"
    >
      <span className={selectedRole ? "text-gray-800" : "text-gray-400"}>
        {selectedRole || "Select Role"}
      </span>
      <motion.div
        animate={{ rotate: isRoleOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <FaChevronDown className="text-gray-500" />
      </motion.div>
    </button>
  </motion.div>

  <AnimatePresence>
    {isRoleOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
      >
        {["Student", "Hostel Owner"].map((role) => (
          <motion.button
            key={role}
            type="button"
            whileHover={{ backgroundColor: "rgba(43, 122, 120, 0.05)" }}
            onClick={() => {
              setSelectedRole(role);
              setIsRoleOpen(false);
            }}
            className={`w-full px-5 py-3 text-left transition-colors duration-200
              ${selectedRole === role ? "text-[#2B7A78] bg-[#DEF2F1]/20" : "text-gray-600"}
              hover:text-[#2B7A78] flex items-center justify-between`}
          >
            {role}
            {selectedRole === role && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-2 h-2 rounded-full bg-[#2B7A78]"
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>

{/* Optional: Click outside to close dropdown */}
{isRoleOpen && (
  <div
    className="fixed inset-0 z-40"
    onClick={() => setIsRoleOpen(false)}
  />
)}

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
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </motion.div>

                {/* Confirm Password Input */}
                <motion.div
                  animate={focusedInput === 'confirmPassword' ? { scale: 1.02 } : { scale: 1 }}
                  className="relative"
                >
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full px-5 py-4 rounded-xl bg-white/50 border-2 border-transparent focus:border-[#2B7A78] focus:bg-white transition-all duration-200 outline-none"
                    placeholder="Confirm Password"
                    onFocus={() => setFocusedInput('confirmPassword')}
                    onBlur={() => setFocusedInput(null)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#2B7A78] transition-colors"
                  >
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </motion.div>

                {/* Terms & Conditions */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 rounded border-gray-300 text-[#2B7A78] focus:ring-[#2B7A78]"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link to="/terms" className="text-[#2B7A78] hover:text-[#3AAFA9]">
                      Terms & Conditions
                    </Link>
                  </label>
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
                        Create Account
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>

              {/* Login Link */}
              <p className="mt-6 text-center text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#2B7A78] hover:text-[#3AAFA9] font-medium transition-colors"
                >
                  Sign In
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

export default Register;