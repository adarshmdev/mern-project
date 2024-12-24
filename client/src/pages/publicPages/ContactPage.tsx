// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegPaperPlane, FaClock } from 'react-icons/fa';
// import Footer from '../../components/common/Footer';
// import DesktopNavbar from '../../components/Navbar/DesktopNavbar';
// import MobileNavbar from '../../components/Navbar/MobileNavbar';

// interface ContactFormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const ContactPage: React.FC = () => {
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const contactInfo = [
//     {
//       icon: <FaEnvelope className="w-7 h-7" />,
//       title: 'Email Us',
//       content: 'contact@hostelhub.com',
//       description: 'Well respond within 24 hours',
//       link: 'mailto:contact@hostelhub.com'
//     },
//     {
//       icon: <FaPhone className="w-7 h-7" />,
//       title: 'Call Us',
//       content: '+1 (555) 123-4567',
//       description: 'Mon-Fri from 8am to 6pm',
//       link: 'tel:+15551234567'
//     },
//     {
//       icon: <FaMapMarkerAlt className="w-7 h-7" />,
//       title: 'Visit Us',
//       content: '123 Student Street',
//       description: 'University District, CA 94105',
//       link: 'https://maps.google.com'
//     }
//   ];

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       <DesktopNavbar />
//       <MobileNavbar />
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute w-[600px] h-[600px] bg-[#2B7A78]/10 rounded-full -top-[300px] -right-[300px] blur-3xl"></div>
//         <div className="absolute w-[600px] h-[600px] bg-[#3AAFA9]/10 rounded-full -bottom-[300px] -left-[300px] blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] bg-clip-text text-transparent mb-6">
//             Get in Touch
//           </h1>
//           <p className="text-gray-600 text-lg md:text-xl">
//             Have questions about finding your perfect hostel? We're here to help you every step of the way.
//           </p>
//         </motion.div>

//         {/* Contact Cards */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//         >
//           {contactInfo.map((info, index) => (
//             <motion.a
//               key={index}
//               href={info.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group"
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="bg-white rounded-2xl shadow-xl p-8 h-full border border-[#2B7A78]/10 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
//                 <div className="relative z-10">
//                   <div className="bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
//                     {info.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-[#2B7A78] mb-2">{info.title}</h3>
//                   <p className="text-gray-800 font-medium mb-1">{info.content}</p>
//                   <p className="text-gray-500 text-sm">{info.description}</p>
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* Contact Form Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#2B7A78]/10 relative overflow-hidden"
//         >
//           <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2B7A78]/10 to-[#3AAFA9]/10 rounded-bl-full"></div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Left Column - Form Info */}
//             <div>
//               <h2 className="text-3xl font-bold text-[#2B7A78] mb-6">Send us a Message</h2>
//               <p className="text-gray-600 mb-8">
//                 Fill out the form and our team will get back to you within 24 hours.
//               </p>
//               <div className="space-y-6">
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 rounded-full bg-[#2B7A78]/10 flex items-center justify-center text-[#2B7A78]">
//                     <FaClock className="w-5 h-5" />
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
//                     <p className="text-gray-600">Monday - Friday, 8am - 6pm</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2B7A78] focus:border-transparent transition-all duration-300"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2B7A78] focus:border-transparent transition-all duration-300"
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2B7A78] focus:border-transparent transition-all duration-300"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows={6}
//                   className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2B7A78] focus:border-transparent transition-all duration-300"
//                   required
//                 />
//               </div>

//               <motion.button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2 group"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
//                 <FaRegPaperPlane className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               {submitStatus && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className={`p-4 rounded-xl ${
//                     submitStatus === 'success' 
//                       ? 'bg-green-50 text-green-700 border border-green-200' 
//                       : 'bg-red-50 text-red-700 border border-red-200'
//                   }`}
//                 >
//                   {submitStatus === 'success'
//                     ? 'Message sent successfully! Well get back to you soon.'
//                     : 'An error occurred. Please try again.'}
//                 </motion.div>
//               )}
//             </form>
//           </div>
//         </motion.div>
//       </div>
//         <Footer />
//     </div>
//   );
// };

// export default ContactPage;


// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegPaperPlane, FaClock, FaQuestion, FaUserPlus } from 'react-icons/fa';

// interface ContactFormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const ContactPage: React.FC = () => {
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
//   const [selectedOption, setSelectedOption] = useState<string>('general');

//   const contactTypes = [
//     {
//       id: 'general',
//       icon: <FaQuestion className="w-5 h-5" />,
//       title: 'General Inquiry'
//     },
//     {
//       id: 'support',
//       icon: <FaUserPlus className="w-5 h-5" />,
//       title: 'Booking Support'
//     },
//     {
//       id: 'partnership',
//       icon: <FaRegPaperPlane className="w-5 h-5" />,
//       title: 'Business Partnership'
//     }
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#fafafa]">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-b from-[#2B7A78] to-[#3AAFA9] text-white py-24 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-[#2B7A78]/50 to-transparent"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-3xl"
//           >
//             <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
//             <p className="text-xl text-white/90">
//               Need assistance with finding your perfect hostel? Our team is here to help you every step of the way.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Contact Information Cards */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="lg:col-span-1 space-y-6"
//           >
//             {/* Hours Card */}
//             <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-[#2B7A78]/10 rounded-xl flex items-center justify-center text-[#2B7A78]">
//                   <FaClock className="w-6 h-6" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
//                   <p className="text-gray-500">We're here to help</p>
//                 </div>
//               </div>
//               <div className="space-y-3">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">Monday - Friday</span>
//                   <span className="font-medium text-gray-900">8:00 AM - 6:00 PM</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">Saturday</span>
//                   <span className="font-medium text-gray-900">9:00 AM - 4:00 PM</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">Sunday</span>
//                   <span className="font-medium text-gray-900">Closed</span>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Methods */}
//             <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="w-10 h-10 bg-[#2B7A78]/10 rounded-lg flex items-center justify-center text-[#2B7A78]">
//                   <FaPhone className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Call Us</p>
//                   <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="w-10 h-10 bg-[#2B7A78]/10 rounded-lg flex items-center justify-center text-[#2B7A78]">
//                   <FaEnvelope className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Email Us</p>
//                   <p className="font-medium text-gray-900">contact@hostelhub.com</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="w-10 h-10 bg-[#2B7A78]/10 rounded-lg flex items-center justify-center text-[#2B7A78]">
//                   <FaMapMarkerAlt className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Visit Us</p>
//                   <p className="font-medium text-gray-900">123 Student Street</p>
//                   <p className="text-sm text-gray-500">University District, CA 94105</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="lg:col-span-2"
//           >
//             <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>

//               {/* Contact Type Selection */}
//               <div className="grid grid-cols-3 gap-4 mb-8">
//                 {contactTypes.map((type) => (
//                   <button
//                     key={type.id}
//                     onClick={() => setSelectedOption(type.id)}
//                     className={`p-4 rounded-xl flex flex-col items-center justify-center text-center transition-all ${
//                       selectedOption === type.id
//                         ? 'bg-[#2B7A78] text-white'
//                         : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
//                     }`}
//                   >
//                     {type.icon}
//                     <span className="mt-2 text-sm font-medium">{type.title}</span>
//                   </button>
//                 ))}
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#2B7A78] focus:border-transparent transition-all"
//                       placeholder="Your full name"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                     <input
//                       type="email"
//                       className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#2B7A78] focus:border-transparent transition-all"
//                       placeholder="your@email.com"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
//                   <input
//                     type="text"
//                     className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#2B7A78] focus:border-transparent transition-all"
//                     placeholder="How can we help?"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                   <textarea
//                     rows={6}
//                     className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#2B7A78] focus:border-transparent transition-all resize-none"
//                     placeholder="Tell us more about your inquiry..."
//                     required
//                   ></textarea>
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.01 }}
//                   whileTap={{ scale: 0.99 }}
//                   className="w-full bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white py-4 rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2"
//                   type="submit"
//                 >
//                   <span>Send Message</span>
//                   <FaRegPaperPlane className="w-4 h-4" />
//                 </motion.button>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;


import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const [selectedType, setSelectedType] = useState('general');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Effect */}
      <div className="relative h-[60vh] overflow-hidden bg-[#2B7A78]">
        <div className="absolute inset-0 bg-gradient-radial from-[#3AAFA9] to-[#2B7A78]">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(222, 242, 241, 0.1) 0%, transparent 25%)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-full flex flex-col justify-center items-center text-center"
          >
            <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              We're here to help you find your perfect hostel. Reach out to us for personalized assistance and expert guidance.
            </p>
          </motion.div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{
          clipPath: 'ellipse(70% 100% at 50% 100%)'
        }}></div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-40 relative z-10 pb-24">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-2xl p-12"
            style={{
              backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)'
            }}
          >
            {/* Contact Type Selector */}
            <div className="flex space-x-6 mb-12">
              {['general', 'support', 'business'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                    selectedType === type
                      ? 'bg-[#2B7A78] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 ml-4">Name</label>
                  <input
                    type="text"
                    className="w-full px-8 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2B7A78] transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 ml-4">Email</label>
                  <input
                    type="email"
                    className="w-full px-8 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2B7A78] transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 ml-4">Subject</label>
                <input
                  type="text"
                  className="w-full px-8 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2B7A78] transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 ml-4">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-8 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2B7A78] transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#2B7A78] to-[#3AAFA9] text-white py-5 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <FaRegPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-[#2B7A78] to-[#3AAFA9] rounded-[2.5rem] p-8 text-white shadow-2xl"
            >
              <h2 className="text-2xl font-semibold mb-8">Quick Contact</h2>
              <div className="space-y-6">
                {[
                  { icon: <FaPhone />, label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: <FaEnvelope />, label: 'Email', value: 'contact@hostelhub.com' },
                  { icon: <FaMapMarkerAlt />, label: 'Address', value: '123 Student Street, CA' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white/80">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Operating Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Operating Hours</h2>
              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-medium text-gray-900">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;