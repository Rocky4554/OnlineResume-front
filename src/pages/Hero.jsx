// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { ChevronDown, Download, Mail } from 'lucide-react';

// // const Hero = () => {
// //   const scrollToSection = (sectionId) => {
// //     document.getElementById(sectionId)?.scrollIntoView({
// //       behavior: 'smooth',
// //       block: 'start',
// //     });
// //   };

// //   return (
// //     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
// //       {/* Background gradient */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />

// //       {/* Animated background elements */}
// //       <div className="absolute inset-0">
// //         <motion.div
// //           animate={{
// //             x: [0, 100, 0],
// //             y: [0, -100, 0],
// //           }}
// //           transition={{
// //             duration: 20,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //           className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/20 rounded-full blur-3xl"
// //         />
// //         <motion.div
// //           animate={{
// //             x: [0, -100, 0],
// //             y: [0, 100, 0],
// //           }}
// //           transition={{
// //             duration: 25,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl"
// //         />
// //       </div>

// //       <div className="container mx-auto px-6 text-center relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 100 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.2, duration: 0.8 }}
// //             className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4"
// //           >
// //             Hello, I'm
// //           </motion.p>

// //           <motion.h1
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.4, duration: 0.8 }}
// //             className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
// //           >
// //             John Doe
// //           </motion.h1>

// //           <motion.p
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.6, duration: 0.8 }}
// //             className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 font-light mb-8"
// //           >
// //             Full Stack Developer
// //           </motion.p>

// //           <motion.p
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.8, duration: 0.8 }}
// //             className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
// //           >
// //             I create exceptional digital experiences that combine beautiful design
// //             with powerful functionality
// //           </motion.p>

// //           <motion.div
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 1, duration: 0.8 }}
// //             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
// //           >
// //             <motion.button
// //               whileHover={{ scale: 1.05, y: -2 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => scrollToSection('projects')}
// //               className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
// //             >
// //               <span>View My Work</span>
// //               <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
// //             </motion.button>

// //             <motion.button
// //               whileHover={{ scale: 1.05, y: -2 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => scrollToSection('contact')}
// //               className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
// //             >
// //               <Mail className="h-5 w-5" />
// //               <span>Contact Me</span>
// //             </motion.button>
// //           </motion.div>
// //         </motion.div>
// //       </div>

// //       {/* Scroll indicator */}
// //       <motion.div
// //         animate={{ y: [0, 10, 0] }}
// //         transition={{ duration: 2, repeat: Infinity }}
// //         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
// //       >
// //         <ChevronDown className="h-8 w-8 text-gray-400 dark:text-gray-600" />
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default Hero;

// ////////////////

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { ChevronDown, Mail } from 'lucide-react';
// // import { useTheme } from "../hooks/useTheme"; // Adjust path based on your project structure
// // import DotGrid from './DotGrid'; // Adjust path if necessary

// // const Hero = () => {
// //   const { isDark } = useTheme();

// //   const scrollToSection = (sectionId) => {
// //     document.getElementById(sectionId)?.scrollIntoView({
// //       behavior: 'smooth',
// //       block: 'start',
// //     });
// //   };

// //   return (
// //     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
// //       {/* Background gradient */}
// //       {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" /> */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:bg-black" />
// //       {/* DotGrid Background (only in dark mode) */}
// //       {isDark && (
// //         <div className="absolute inset-0 z-0">
// //           <DotGrid
// //             dotSize={7}
// //             gap={15}
// //             baseColor="#5227FF"
// //             activeColor="#5227FF"
// //             proximity={120}
// //             shockRadius={250}
// //             shockStrength={5}
// //             resistance={750}
// //             returnDuration={1.5}
// //           />
// //         </div>
// //       )}

// //       {/* Animated background elements */}
// //       <div className="absolute inset-0">
// //         <motion.div
// //           animate={{
// //             x: [0, 100, 0],
// //             y: [0, -100, 0],
// //           }}
// //           transition={{
// //             duration: 20,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //           className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/20 rounded-full blur-3xl"
// //         />
// //         <motion.div
// //           animate={{
// //             x: [0, -100, 0],
// //             y: [0, 100, 0],
// //           }}
// //           transition={{
// //             duration: 25,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl"
// //         />
// //       </div>

// //       <div className="container mx-auto px-6 text-center relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 100 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.2, duration: 0.8 }}
// //             className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4"
// //           >
// //             Hello, I'm
// //           </motion.p>

// //           <motion.h1
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.4, duration: 0.8 }}
// //             className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
// //           >
// //             John Doe
// //           </motion.h1>

// //           <motion.p
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.6, duration: 0.8 }}
// //             className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 font-light mb-8"
// //           >
// //             Full Stack Developer
// //           </motion.p>

// //           <motion.p
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.8, duration: 0.8 }}
// //             className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
// //           >
// //             I create exceptional digital experiences that combine beautiful design
// //             with powerful functionality
// //           </motion.p>

// //           <motion.div
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 1, duration: 0.8 }}
// //             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
// //           >
// //             <motion.button
// //               whileHover={{ scale: 1.05, y: -2 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => scrollToSection('projects')}
// //               className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
// //             >
// //               <span>View My Work</span>
// //               <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
// //             </motion.button>

// //             <motion.button
// //               whileHover={{ scale: 1.05, y: -2 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => scrollToSection('contact')}
// //               className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
// //             >
// //               <Mail className="h-5 w-5" />
// //               <span>Contact Me</span>
// //             </motion.button>
// //           </motion.div>
// //         </motion.div>
// //       </div>

// //       {/* Scroll indicator */}
// //       <motion.div
// //         animate={{ y: [0, 10, 0] }}
// //         transition={{ duration: 2, repeat: Infinity }}
// //         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
// //       >
// //         <ChevronDown className="h-8 w-8 text-gray-400 dark:text-gray-600" />
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default Hero;

// //////////////
// // import React from "react";
// // import { motion } from "framer-motion";
// // import { ChevronDown, Mail } from "lucide-react";
// // import { useTheme } from "../hooks/useTheme"; // Adjust path based on your project structure
// // import DotGrid from "./DotGrid"; // Adjust path if necessary
// // import SplashCursor from "./SplashCursor";
// // import LetterGlitch from "./LetterGlitch";

// // const Hero = () => {
// //   const { isDark } = useTheme();

// //   const scrollToSection = (sectionId) => {
// //     document.getElementById(sectionId)?.scrollIntoView({
// //       behavior: "smooth",
// //       block: "start",
// //     });
// //   };

// //   return (
// //     <section
// //       id="home"
// //       className="min-h-screen flex items-center justify-center relative overflow-hidden"
// //     >
// //       {/* <SplashCursor /> */}
// //       {/* Background - Light mode gradient, Dark mode black */}
// //       {isDark ? (
// //         <div className="absolute inset-0 bg-black" />
// //       ) : (
// //         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
// //       )}

// //       {/* DotGrid Background (only in dark mode) */}
// //       {isDark && (
// //         <div className="absolute inset-0 z-0">
// //           <DotGrid
// //             dotSize={5}
// //             gap={15}
// //             baseColor=" #0B0A12"
// //             activeColor="#5227FF"
// //             proximity={120}
// //             shockRadius={250}
// //             shockStrength={5}
// //             resistance={750}
// //             returnDuration={1.5}
// //           />
// //         </div>
// //         // <div className="absolute inset-0 z-0">
// //         //   <LetterGlitch
// //         //     glitchSpeed={50}
// //         //     centerVignette={true}
// //         //     outerVignette={false}
// //         //     smooth={true}
// //         //   />
// //         // </div>
// //       )}

// //       {/* Animated background elements */}
// //       <div className="absolute inset-0">
// //         <motion.div
// //           animate={{
// //             x: [0, 100, 0],
// //             y: [0, -100, 0],
// //           }}
// //           transition={{
// //             duration: 20,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //           className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/20 rounded-full blur-3xl"
// //         />
// //         <motion.div
// //           animate={{
// //             x: [0, -100, 0],
// //             y: [0, 100, 0],
// //           }}
// //           transition={{
// //             duration: 25,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl"
// //         />
// //       </div>

// //       <div className="container mx-auto px-6 text-center relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 100 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.2, duration: 0.8 }}
// //             className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4"
// //           >
// //             {/* Hello, I'm */}
// //           </motion.p>

// //           <motion.h1
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.4, duration: 0.8 }}
// //             className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
// //           >
// //             Building bridges between <br></br>design and code.
// //           </motion.h1>

// //            <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.2, duration: 0.8 }}
// //             className="text-lg md:text-xl text-blue-600 dark:text-white font-medium mb-4"
// //           >
// //             Hello, I'm
// //           </motion.p>

// //           <motion.p
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.6, duration: 0.8 }}
// //             className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 font-light mb-8"
// //           >
// //             Full Stack Developer
// //           </motion.p>

// //           <motion.p
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.8, duration: 0.8 }}
// //             className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
// //           >
// //             I create exceptional digital experiences that combine beautiful
// //             design with powerful functionality
// //           </motion.p>

// //           <motion.div
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 1, duration: 0.8 }}
// //             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
// //           >
// //             <motion.button
// //               whileHover={{ scale: 1.05, y: -2 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => scrollToSection("projects")}
// //               className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
// //             >
// //               <span>View My Work</span>
// //               <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
// //             </motion.button>

// //             <motion.button
// //               whileHover={{ scale: 1.05, y: -2 }}
// //               whileTap={{ scale: 0.95 }}
// //               onClick={() => scrollToSection("contact")}
// //               className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
// //             >
// //               <Mail className="h-5 w-5" />
// //               <span>Contact Me</span>
// //             </motion.button>
// //           </motion.div>
// //         </motion.div>
// //       </div>

// //       {/* Scroll indicator */}
// //       <motion.div
// //         animate={{ y: [0, 10, 0] }}
// //         transition={{ duration: 2, repeat: Infinity }}
// //         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
// //       >
// //         <ChevronDown className="h-8 w-8 text-gray-400 dark:text-gray-600" />
// //       </motion.div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronDown, Mail } from 'lucide-react';
// import { useTheme } from "../hooks/useTheme"; // Adjust path based on your project structure
// import DotGrid from './DotGrid'; // Adjust path if necessary

// const Hero = () => {
//   const { isDark } = useTheme();

//   // Add this temporarily right after const { isDark } = useTheme();
// console.log('Current isDark:', isDark);
// console.log('Document has dark class:', document.documentElement.classList.contains('dark'));

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background - Light mode gradient, Dark mode black */}
//       {isDark ? (
//         <div className="absolute inset-0 bg-black" />
//       ) : (
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
//       )}

//       {/* DotGrid Background (only in dark mode) */}
//       {isDark && (
//         <div className="absolute inset-0 z-0">
//           <DotGrid
//             dotSize={7}
//             gap={15}
//             baseColor="#FFFFFF"
//             activeColor="#FFFFFF"
//             proximity={120}
//             shockRadius={250}
//             shockStrength={5}
//             resistance={750}
//             returnDuration={1.5}
//           />
//         </div>
//       )}

//       {/* Animated background elements */}
//       <div className="absolute inset-0">
//         <motion.div
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -100, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/20 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             x: [0, -100, 0],
//             y: [0, 100, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="container mx-auto px-6 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4"
//           >
//             Hello, I'm
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
//           >
//             John Doe
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 font-light mb-8"
//           >
//             Full Stack Developer
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
//           >
//             I create exceptional digital experiences that combine beautiful design
//             with powerful functionality
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.8 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => scrollToSection('projects')}
//               className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
//             >
//               <span>View My Work</span>
//               <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => scrollToSection('contact')}
//               className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
//             >
//               <Mail className="h-5 w-5" />
//               <span>Contact Me</span>
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <ChevronDown className="h-8 w-8 text-gray-400 dark:text-gray-600" />
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
/////

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { useTheme } from "../hooks/useTheme"; // Adjust path based on your project structure
import DotGrid from "../components/DotGrid"; // Adjust path if necessary
import { FileText } from "lucide-react";
import AnimatedTitle from "../components/AnimatedTitle";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import { RainbowButton } from "../components/ui/rainbow-button";
import { MorphingText } from "@/components/ui/morphing-text";
import { Github, Linkedin} from 'lucide-react';

import SplitText from "../components/SplitText";

const Hero = () => {
  const { isDark } = useTheme();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden relative"
    >
      {/* Background - Light mode gradient, Dark mode black */}
      {isDark ? (
        <div className="absolute inset-0 bg-black" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      )}

      {/* DotGrid Background (only in dark mode) */}
      {isDark && (
        <div className="absolute inset-0 z-0 ">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor=" #0B0A12"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-6xl lg:text-10xl font-bold text-gray-900 dark:text-white mb-6 m-4"
          >
            Building bridges between <br></br>design and code.
          </motion.h1> */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-mono text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-2 my-1 mt-6"
          >
            {/* Hello, I'm */}
          </motion.p>

          {/* <SplitText
            text="RAUNAK KUMAR"
            className="text-5xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          /> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            
          </motion.div> */}

          <AnimatedTitle />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-1 "
          >
            <MorphingText texts={["Frontend Developer", "Problem Solver"]} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-5 max-w-2xl mx-auto"
          >
            I create exceptional digital experiences that combine beautiful
            design with powerful functionality
          </motion.p>

          {/* Read About Me */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            onClick={() => scrollToSection("about")}
            className="flex justify-center mb-4"
          >
            <RainbowButton>Read About Me</RainbowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* View My Work Button */}
            {/* <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </motion.button> */}

            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              onClick={() => scrollToSection("projects")}
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
            >
              <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              <span>View My Work</span>
            </HoverBorderGradient>

            {/* Contact Me Button */}
            {/* <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Me</span>
            </motion.button> */}

            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              onClick={() => scrollToSection("contact")}
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Me</span>
            </HoverBorderGradient>

            {/* <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/Raunak_Kumar_Resume.pdf" // put resume in /public folder
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-950 text-gray-700 dark:text-gray-300 
             hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 
             rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>Download Resume</span>
            </motion.a> */}

            {/* Download Resume Button*/}
            <InteractiveHoverButton
              onClick={() => {
                try {
                  window.open("/RAUNAK_KUMAR_RESUME.pdf", "_blank");
                } catch (error) {
                  console.error("Could not open resume:", error);
                  // Fallback to download
                  const link = document.createElement("a");
                  link.href = "/Raunak_Kumar_Resume.pdf";
                  link.download = "Raunak_Kumar_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }
              }}
            >
              <span>View Resume</span>
            </InteractiveHoverButton>

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

            {/* <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Raunak_Kumar_Resume.pdf"; // Make sure this file is in /public
                link.download = "Raunak_Kumar_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-950 
             text-gray-700 dark:text-gray-300 
             hover:border-blue-600 dark:hover:border-blue-400 
             hover:text-blue-600 dark:hover:text-blue-400 
             rounded-xl font-medium transition-all duration-300 
             flex items-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>Download Resume</span>
            </motion.button> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-gray-400 dark:text-gray-600" />
      </motion.div>
    </section>
  );
};

export default Hero;

////////
// import React from "react";
// import { motion } from "framer-motion";
// import { ChevronDown, Mail, FileText } from "lucide-react";
// import { useTheme } from "../hooks/useTheme";
// import AnimatedTitle from "../components/AnimatedTitle";
// import Galaxy from "../components/Galaxy"; // ✅ ensure path is correct

// const Hero = () => {
//   const { isDark } = useTheme();

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   // ✅ Resume download function
//   const handleDownloadResume = () => {
//     const link = document.createElement("a");
//     link.href = "/Raunak_Kumar_Resume.pdf"; // place resume in /public folder
//     link.download = "Raunak_Kumar_Resume.pdf";
//     link.click();
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Background - Light/Dark */}
//       {isDark ? (
//         <div className="absolute inset-0 bg-black" />
//       ) : (
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
//       )}

//       {/* ✅ Galaxy background, tracks mouse */}
//       <div className="absolute inset-0 pointer-events-none">
//         <Galaxy />
//       </div>

//       {/* Floating blur blobs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/20 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl"
//         />
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-6 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="font-mono text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4"
//           >
//             Hello, I'm
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             <AnimatedTitle />
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="font-serif font-bold text-xl md:text-4xl text-gray-700 dark:text-blue-400 mb-8 py-1"
//           >
//             Frontend Developer
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
//           >
//             I create exceptional digital experiences that combine beautiful
//             design with powerful functionality
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.8 }}
//             className="flex flex-wrap justify-center gap-4 items-center"
//           >
//             {/* View My Work */}
//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => scrollToSection("projects")}
//               className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
//             >
//               <span>View My Work</span>
//               <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
//             </motion.button>

//             {/* Contact Me */}
//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => scrollToSection("contact")}
//               className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
//             >
//               <Mail className="h-5 w-5" />
//               <span>Contact Me</span>
//             </motion.button>

//             {/* Download Resume */}
//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleDownloadResume}
//               className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-950 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2"
//             >
//               <FileText className="h-5 w-5" />
//               <span>Download Resume</span>
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <ChevronDown className="h-8 w-8 text-gray-400 dark:text-gray-600" />
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
