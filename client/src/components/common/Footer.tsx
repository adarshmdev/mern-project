// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

// interface FooterLink {
//   title: string;
//   path: string;
// }

// interface SocialLink {
//   icon: JSX.Element;
//   href: string;
//   label: string;
// }

// const Footer: React.FC = () => {
//   const footerLinks: FooterLink[] = [
//     { title: 'About', path: '/about' },
//     { title: 'Contact', path: '/contact' },
//     { title: 'Privacy Policy', path: '/privacy' },
//     { title: 'Terms', path: '/terms' },
//     { title: 'FAQ', path: '/faq' },
//   ];

//   const socialLinks: SocialLink[] = [
//     {
//       icon: <FaGithub className="w-5 h-5" />,
//       href: 'https://github.com',
//       label: 'GitHub',
//     },
//     {
//       icon: <FaTwitter className="w-5 h-5" />,
//       href: 'https://twitter.com',
//       label: 'Twitter',
//     },
//     {
//       icon: <FaLinkedin className="w-5 h-5" />,
//       href: 'https://linkedin.com',
//       label: 'LinkedIn',
//     },
//   ];

//   return (
//     <footer className="bg-gradient-to-b from-[#E8F6F5] to-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Brand Section */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-[#2B7A78]">HostelHub</h3>
//             <p className="text-sm text-gray-600 max-w-md">
//               Making hostel hunting easier and more convenient for students worldwide.
//               Find your perfect stay with us.
//             </p>

//             {/* Social Links */}
//             <div className="flex space-x-4 pt-4">
//               {socialLinks.map(({ icon, href, label }) => (
//                 <motion.a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-600 hover:text-[#2B7A78] transition-colors"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   aria-label={label}
//                 >
//                   {icon}
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-[#2B7A78]">Quick Links</h3>
//             <nav className="flex flex-col space-y-2">
//               {footerLinks.map(({ title, path }) => (
//                 <Link
//                   key={title}
//                   to={path}
//                   className="text-gray-600 hover:text-[#2B7A78] transition-colors text-sm"
//                 >
//                   {title}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-[#2B7A78]">Contact Us</h3>
//             <div className="space-y-2 text-sm text-gray-600">
//               <p>Email: contact@hostelhub.com</p>
//               <p>Phone: +1 (555) 123-4567</p>
//               <p>
//                 Address: 123 Student Street<br />
//                 University District<br />
//                 City, State 12345
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-200 py-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
//             <p>© {new Date().getFullYear()} HostelHub. All rights reserved.</p>
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//               className="text-[#2B7A78] hover:text-[#2B7A78]/80 transition-colors mt-4 sm:mt-0"
//             >
//               Back to top
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface FooterLink {
  title: string;
  path: string;
}

interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const footerLinks: FooterLink[] = [
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Privacy Policy', path: '/privacy' },
    { title: 'Terms', path: '/terms' },
    { title: 'FAQ', path: '/faq' },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      href: 'https://twitter.com',
      label: 'Twitter',
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="bg-[#DEF2F1] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-[#2B7A78] mb-4">HostelHub</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Making hostel hunting easier and more convenient for students worldwide.
              Find your perfect stay with us.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2B7A78] hover:text-[#3AAFA9] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#2B7A78] mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {footerLinks.map(({ title, path }) => (
                <Link
                  key={title}
                  to={path}
                  className="text-gray-600 hover:text-[#3AAFA9] transition-colors duration-300 text-sm"
                >
                  {title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-[#2B7A78] mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-center">
                <span>contact@hostelhub.com</span>
              </p>
              <p className="flex items-center">
                <span>+1 (555) 123-4567</span>
              </p>
              <address className="not-italic">
                123 Student Street<br />
                University District<br />
                City, State 12345
              </address>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-[#2B7A78] mb-4">Newsletter</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Stay updated with our latest offers and news</p>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2B7A78]"
                />
                <button className="bg-[#2B7A78] text-white px-4 py-2 rounded-lg hover:bg-[#3AAFA9] transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} HostelHub. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-[#2B7A78] hover:text-[#3AAFA9] transition-colors duration-300"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;