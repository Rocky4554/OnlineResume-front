// import React from 'react';
// import { motion } from 'framer-motion';
// import { Heart, ArrowUp } from 'lucide-react';

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   };

//   const quickLinks = [
//     { label: 'Home', id: 'home' },
//     { label: 'About', id: 'about' },
//     { label: 'Projects', id: 'projects' },
//     { label: 'Skills', id: 'skills' },
//     { label: 'Contact', id: 'contact' },
//   ];

//   return (
//     <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 py-12 relative">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-bold mb-4">John Doe</h3>
//               <p className="text-gray-400 mb-6 max-w-md">
//                 Full Stack Developer passionate about creating exceptional digital experiences 
//                 that combine beautiful design with powerful functionality.
//               </p>
//             </motion.div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 {quickLinks.map((link) => (
//                   <li key={link.id}>
//                     <button
//                       onClick={() => scrollToSection(link.id)}
//                       className="text-gray-400 hover:text-white transition-colors duration-300"
//                     >
//                       {link.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
//               <div className="space-y-2 text-gray-400">
//                 <p>hello@johndoe.dev</p>
//                 <p>+1 (555) 123-4567</p>
//                 <p>San Francisco, CA</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
//             >
//               © {new Date().getFullYear()} John Doe. Made with{' '}
//               <Heart className="h-4 w-4 mx-1 text-red-500" /> and lots of coffee.
//             </motion.p>

//             {/* Back to top button */}
//             <motion.button
//               whileHover={{ scale: 1.1, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={scrollToTop}
//               className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
//             >
//               <ArrowUp className="h-5 w-5" />
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

////////////


import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Phone, MapPin, Github, Linkedin, Twitter, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-black text-white relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-2xl opacity-60" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Brand Section */}
{/* ================= Brand Section (replace the existing one) ================= */}
<div className="lg:col-span-2">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center space-y-4"
  >
    {/* Name */}
    <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
      Raunak Kumar
    </h3>

    {/* Subtitle (centered with icon) */}
    <div className="flex items-center gap-2 justify-center text-gray-300">
      {/* <Code className="h-4 w-4 text-gray-400" /> */}
      <span className="text-base font-medium">Frontend Developer</span>
    </div>

    {/* Description (centered, larger max-width so it wraps nicely) */}
    <p className="text-gray-300 max-w-2xl leading-relaxed">
      Passionate Full Stack Developer creating exceptional digital experiences
      that combine beautiful design with powerful functionality. Turning ideas
      into reality, one line of code at a time.
    </p>

    {/* Social Links (centered) */}
    <div className="flex space-x-4 mt-2">
      <motion.a
        href="https://github.com/Rocky4554"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 bg-gray-800/50 hover:bg-blue-600/50 rounded-xl transition-all duration-300 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5 text-white" />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/raunak-kumar54/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 bg-gray-800/50 hover:bg-blue-600/50 rounded-xl transition-all duration-300 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5 text-white" />
      </motion.a>
    </div>
  </motion.div>
</div>


          {/* Enhanced Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300"></span>
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Get In Touch
              </h4>
              <div className="space-y-4">
                <motion.a
                  href="mailto:kumarraunak085@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
                >
                  <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-blue-600/20 transition-all duration-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm">kumarraunak085@gmail.com</span>
                </motion.a>
                
                <motion.a
                  href="tel:+918092345121"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
                >
                  <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-green-600/20 transition-all duration-300">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-sm">+91 8092345121</span>
                </motion.a>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 group"
                >
                  <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-purple-600/20 transition-all duration-300">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="text-sm">
                    <div>Noida, Uttar Pradesh</div>
                    <div className="text-gray-500">India</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center gap-1"
            >
              © {new Date().getFullYear()} Raunak Kumar. Made with{' '}
              <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> 
              and lots of{' '}
              <Coffee className="h-4 w-4 mx-1 text-amber-400" />
            </motion.p>

            {/* Enhanced back to top button */}
            <motion.button
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="group relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ArrowUp className="h-6 w-6 relative z-10 group-hover:animate-bounce" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;