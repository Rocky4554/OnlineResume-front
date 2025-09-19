// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Smartphone, Globe, ShoppingCart } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
//       image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "Node.js", "MongoDB", "Stripe"],
//       github: "#",
//       demo: "#",
//       icon: <ShoppingCart className="h-6 w-6" />
//     },
//     {
//       title: "Task Management App",
//       description: "A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.",
//       image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
//       github: "#",
//       demo: "#",
//       icon: <Smartphone className="h-6 w-6" />
//     },
//     {
//       title: "Weather Dashboard",
//       description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather data visualization.",
//       image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "TypeScript", "Weather API", "Chart.js"],
//       github: "#",
//       demo: "#",
//       icon: <Globe className="h-6 w-6" />
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             A showcase of my recent work and personal projects
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//               className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//             >
//               {/* Project Image */}
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {project.icon}
//                 </div>
//               </div>

//               {/* Project Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Project Links */}
//                 <div className="flex space-x-4">
//                   <motion.a
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     href={project.github}
//                     className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
//                   >
//                     <Github className="h-4 w-4" />
//                     <span>Code</span>
//                   </motion.a>
//                   <motion.a
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     href={project.demo}
//                     className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
//                   >
//                     <ExternalLink className="h-4 w-4" />
//                     <span>Demo</span>
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

//////////////

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Smartphone, Globe, ShoppingCart, LayoutGrid, ArrowRightLeft } from 'lucide-react';

// const Projects = () => {
//   const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'carousel'

//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
//       image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "Node.js", "MongoDB", "Stripe"],
//       github: "#",
//       demo: "#",
//       icon: <ShoppingCart className="h-6 w-6" />
//     },
//     {
//       title: "Task Management App",
//       description: "A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.",
//       image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
//       github: "#",
//       demo: "#",
//       icon: <Smartphone className="h-6 w-6" />
//     },
//     {
//       title: "Weather Dashboard",
//       description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather data visualization.",
//       image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "TypeScript", "Weather API", "Chart.js"],
//       github: "#",
//       demo: "#",
//       icon: <Globe className="h-6 w-6" />
//     },
//     {
//       title: "Mobile Banking App",
//       description: "A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
//       image: "https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React Native", "Node.js", "PostgreSQL", "JWT"],
//       github: "#",
//       demo: "#",
//       icon: <Smartphone className="h-6 w-6" />
//     },
//     {
//       title: "AI Content Generator",
//       description: "An intelligent content generation platform powered by machine learning algorithms for creating marketing copy and blog posts.",
//       image: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["Python", "TensorFlow", "React", "FastAPI"],
//       github: "#",
//       demo: "#",
//       icon: <Globe className="h-6 w-6" />
//     }
//   ];

//   const GridView = () => (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {projects.slice(0, 3).map((project, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: index * 0.2 }}
//           viewport={{ once: true }}
//           whileHover={{ y: -10 }}
//           className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//         >
//           {/* Project Image */}
//           <div className="relative overflow-hidden">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               {project.icon}
//             </div>
//           </div>

//           {/* Project Content */}
//           <div className="p-6">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//               {project.title}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
//               {project.description}
//             </p>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {project.tech.map((tech, techIndex) => (
//                 <span
//                   key={techIndex}
//                   className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Project Links */}
//             <div className="flex space-x-4">
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={project.github}
//                 className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
//               >
//                 <Github className="h-4 w-4" />
//                 <span>Code</span>
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={project.demo}
//                 className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
//               >
//                 <ExternalLink className="h-4 w-4" />
//                 <span>Demo</span>
//               </motion.a>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );

//   const CarouselView = () => (
//     <div className="relative">
//       <div className="flex justify-center items-center h-[500px] gap-2 overflow-hidden">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="project-card group relative h-full rounded-xl cursor-pointer overflow-hidden shadow-2xl"
//             style={{
//               backgroundImage: `url(${project.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//             {/* Content */}
//             <div className="project-content absolute inset-0 flex flex-col justify-end p-6 text-white">
//               {/* Icon */}
//               <div className="mb-4 p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg w-fit transition-all duration-300 group-hover:bg-opacity-30">
//                 {project.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
//                 {project.title}
//               </h3>

//               {/* Expandable Content */}
//               <div className="project-details">
//                 <p className="text-sm text-gray-200 mb-4 leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.slice(0, 3).map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-2 py-1 text-xs bg-blue-600 bg-opacity-70 text-white rounded-full backdrop-blur-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                   {project.tech.length > 3 && (
//                     <span className="px-2 py-1 text-xs bg-gray-600 bg-opacity-70 text-white rounded-full backdrop-blur-sm">
//                       +{project.tech.length - 3}
//                     </span>
//                   )}
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex space-x-3">
//                   <a
//                     href={project.github}
//                     className="flex items-center space-x-2 px-3 py-2 bg-gray-800 bg-opacity-70 text-white rounded-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 text-sm backdrop-blur-sm"
//                   >
//                     <Github className="h-4 w-4" />
//                     <span>Code</span>
//                   </a>
//                   <a
//                     href={project.demo}
//                     className="flex items-center space-x-2 px-3 py-2 bg-blue-600 bg-opacity-70 text-white rounded-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 text-sm backdrop-blur-sm"
//                   >
//                     <ExternalLink className="h-4 w-4" />
//                     <span>Demo</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-6">
//         <p className="text-gray-600 dark:text-gray-400 text-sm">
//           Hover over the cards to explore each project in detail
//         </p>
//       </div>
//     </div>
//   );

//   return (
//     <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
//             A showcase of my recent work and personal projects
//           </p>

//           {/* View Mode Toggle */}
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <button
//               onClick={() => setViewMode('grid')}
//               className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
//                 viewMode === 'grid'
//                   ? 'bg-blue-600 text-white shadow-lg'
//                   : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
//               }`}
//             >
//               <LayoutGrid className="h-4 w-4" />
//               <span>Grid View</span>
//             </button>
//             <button
//               onClick={() => setViewMode('carousel')}
//               className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
//                 viewMode === 'carousel'
//                   ? 'bg-blue-600 text-white shadow-lg'
//                   : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
//               }`}
//             >
//               <ArrowRightLeft className="h-4 w-4" />
//               <span>Carousel View</span>
//             </button>
//           </div>
//         </motion.div>

//         {/* Animated view transition */}
//         <motion.div
//           key={viewMode}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {viewMode === 'grid' ? <GridView /> : <CarouselView />}
//         </motion.div>
//       </div>

//       {/* Carousel-specific styles */}
//       {viewMode === 'carousel' && (
//         <style jsx>{`
//           .project-card {
//             flex: 0 0 120px;
//             transition: all 0.4s ease-out;
//             box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//             will-change: flex-basis, transform;
//           }

//           .project-card:hover {
//             flex: 0 0 320px;
//             transform: translateY(-15px);
//             box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4);
//           }

//           .project-content {
//             background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(255, 255, 255, 0) 100%);
//             transition: all 0.3s ease-out;
//           }

//           .project-details {
//             opacity: 0;
//             transform: translateY(20px);
//             visibility: hidden;
//             transition: opacity 0.3s ease-out 0.1s, transform 0.3s ease-out 0.1s, visibility 0.3s ease-out 0.1s;
//             will-change: opacity, transform;
//           }

//           .project-card:hover .project-details {
//             opacity: 1;
//             transform: translateY(0px);
//             visibility: visible;
//           }

//           .project-card img {
//             transition: transform 0.4s ease-out;
//           }

//           .project-card:hover img {
//             transform: scale(1.05);
//           }

//           @media (max-width: 768px) {
//             .project-card {
//               flex: 0 0 80px;
//             }

//             .project-card:hover {
//               flex: 0 0 220px;
//               transform: translateY(-10px);
//             }
//           }
//         `}</style>
//       )}
//     </section>
//   );
// };

// export default Projects;

//////////

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Smartphone, Globe, ShoppingCart, LayoutGrid, ArrowRightLeft } from 'lucide-react';

// const Projects = () => {
//   const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'carousel'

//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
//       image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "Node.js", "MongoDB", "Stripe"],
//       github: "#",
//       demo: "#",
//       icon: <ShoppingCart className="h-6 w-6" />
//     },
//     {
//       title: "Task Management App",
//       description: "A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.",
//       image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
//       github: "#",
//       demo: "#",
//       icon: <Smartphone className="h-6 w-6" />
//     },
//     {
//       title: "Weather Dashboard",
//       description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather data visualization.",
//       image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "TypeScript", "Weather API", "Chart.js"],
//       github: "#",
//       demo: "#",
//       icon: <Globe className="h-6 w-6" />
//     },
//     {
//       title: "Mobile Banking App",
//       description: "A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
//       image: "https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React Native", "Node.js", "PostgreSQL", "JWT"],
//       github: "#",
//       demo: "#",
//       icon: <Smartphone className="h-6 w-6" />
//     },
//     {
//       title: "AI Content Generator",
//       description: "An intelligent content generation platform powered by machine learning algorithms for creating marketing copy and blog posts.",
//       image: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["Python", "TensorFlow", "React", "FastAPI"],
//       github: "#",
//       demo: "#",
//       icon: <Globe className="h-6 w-6" />
//     }
//   ];

//   // ---------- GRID VIEW ----------
//   const GridView = () => (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {projects.slice(0, 3).map((project, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: index * 0.2 }}
//           viewport={{ once: true }}
//           whileHover={{ y: -10 }}
//           className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//         >
//           {/* Project Image */}
//           <div className="relative overflow-hidden">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               {project.icon}
//             </div>
//           </div>

//           {/* Project Content */}
//           <div className="p-6">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//               {project.title}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
//               {project.description}
//             </p>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {project.tech.map((tech, techIndex) => (
//                 <span
//                   key={techIndex}
//                   className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Project Links */}
//             <div className="flex space-x-4">
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={project.github}
//                 className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
//               >
//                 <Github className="h-4 w-4" />
//                 <span>Code</span>
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={project.demo}
//                 className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
//               >
//                 <ExternalLink className="h-4 w-4" />
//                 <span>Demo</span>
//               </motion.a>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );

//   // ---------- CAROUSEL VIEW ----------
//   const CarouselView = () => (
//     <div className="relative">
//       <div className="flex justify-center items-center h-[500px] gap-2 overflow-hidden">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="project-card group relative h-full rounded-xl cursor-pointer overflow-hidden shadow-2xl"
//           >
//             {/* Background Image */}
//             <img
//               src={project.image}
//               alt={project.title}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//             {/* Content */}
//             <div className="project-content absolute inset-0 flex flex-col justify-end p-6 text-white">
//               {/* Icon */}
//               <div className="mb-4 p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg w-fit transition-all duration-300 group-hover:bg-opacity-30">
//                 {project.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
//                 {project.title}
//               </h3>

//               {/* Expandable Content */}
//               <div className="project-details">
//                 <p className="text-sm text-gray-200 mb-4 leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.slice(0, 3).map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-2 py-1 text-xs bg-blue-600 bg-opacity-70 text-white rounded-full backdrop-blur-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                   {project.tech.length > 3 && (
//                     <span className="px-2 py-1 text-xs bg-gray-600 bg-opacity-70 text-white rounded-full backdrop-blur-sm">
//                       +{project.tech.length - 3}
//                     </span>
//                   )}
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex space-x-3">
//                   <a
//                     href={project.github}
//                     className="flex items-center space-x-2 px-3 py-2 bg-gray-800 bg-opacity-70 text-white rounded-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 text-sm backdrop-blur-sm"
//                   >
//                     <Github className="h-4 w-4" />
//                     <span>Code</span>
//                   </a>
//                   <a
//                     href={project.demo}
//                     className="flex items-center space-x-2 px-3 py-2 bg-blue-600 bg-opacity-70 text-white rounded-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 text-sm backdrop-blur-sm"
//                   >
//                     <ExternalLink className="h-4 w-4" />
//                     <span>Demo</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-6">
//         <p className="text-gray-600 dark:text-gray-400 text-sm">
//           Hover over the cards to explore each project in detail
//         </p>
//       </div>

//       {/* Carousel-specific styles */}
//       <style jsx>{`
//         .project-card {
//           flex: 0 0 120px;
//           transition: all 0.4s ease-out;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//           will-change: flex-basis, transform;
//         }

//         .project-card:hover {
//           flex: 0 0 320px;
//           transform: translateY(-15px);
//           box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4);
//         }

//         .project-content {
//           background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(255, 255, 255, 0) 100%);
//           transition: all 0.3s ease-out;
//         }

//         .project-details {
//           opacity: 0;
//           transform: translateY(20px);
//           visibility: hidden;
//           transition: opacity 0.3s ease-out 0.1s, transform 0.3s ease-out 0.1s, visibility 0.3s ease-out 0.1s;
//           will-change: opacity, transform;
//         }

//         .project-card:hover .project-details {
//           opacity: 1;
//           transform: translateY(0px);
//           visibility: visible;
//         }

//         @media (max-width: 768px) {
//           .project-card {
//             flex: 0 0 80px;
//           }

//           .project-card:hover {
//             flex: 0 0 220px;
//             transform: translateY(-10px);
//           }
//         }
//       `}</style>
//     </div>
//   );

//   return (
//     <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
//             A showcase of my recent work and personal projects
//           </p>

//           {/* View Mode Toggle */}
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <button
//               onClick={() => setViewMode('grid')}
//               className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
//                 viewMode === 'grid'
//                   ? 'bg-blue-600 text-white shadow-lg'
//                   : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
//               }`}
//             >
//               <LayoutGrid className="h-4 w-4" />
//               <span>Grid View</span>
//             </button>
//             <button
//               onClick={() => setViewMode('carousel')}
//               className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
//                 viewMode === 'carousel'
//                   ? 'bg-blue-600 text-white shadow-lg'
//                   : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
//               }`}
//             >
//               <ArrowRightLeft className="h-4 w-4" />
//               <span>Carousel View</span>
//             </button>
//           </div>
//         </motion.div>

//         {/* Animated view transition */}
//         <motion.div
//           key={viewMode}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {viewMode === 'grid' ? <GridView /> : <CarouselView />}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

/// deepseek

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Smartphone, Globe, ShoppingCart, LayoutGrid, ArrowRightLeft, ChevronLeft, ChevronRight } from 'lucide-react';

// const Projects = () => {
//   const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'carousel'
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
//       image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "Node.js", "MongoDB", "Stripe"],
//       github: "#",
//       demo: "#",
//       icon: <ShoppingCart className="h-6 w-6" />
//     },
//     {
//       title: "Task Management App",
//       description: "A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.",
//       image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
//       github: "#",
//       demo: "#",
//       icon: <Smartphone className="h-6 w-6" />
//     },
//     {
//       title: "Weather Dashboard",
//       description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather data visualization.",
//       image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "TypeScript", "Weather API", "Chart.js"],
//       github: "#",
//       demo: "#",
//       icon: <Globe className="h-6 w-6" />
//     },
//     {
//       title: "Mobile Banking App",
//       description: "A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
//       image: "https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React Native", "Node.js", "PostgreSQL", "JWT"],
//       github: "#",
//       demo: "#",
//       icon: <Smartphone className="h-6 w-6" />
//     },
//     {
//       title: "AI Content Generator",
//       description: "An intelligent content generation platform powered by machine learning algorithms for creating marketing copy and blog posts.",
//       image: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["Python", "TensorFlow", "React", "FastAPI"],
//       github: "#",
//       demo: "#",
//       icon: <Globe className="h-6 w-6" />
//     }
//   ];

//   // Carousel navigation functions
//   const nextProject = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === projects.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevProject = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? projects.length - 1 : prevIndex - 1
//     );
//   };

//   // ---------- GRID VIEW ----------
//   const GridView = () => (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {projects.slice(0, 3).map((project, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: index * 0.2 }}
//           viewport={{ once: true }}
//           whileHover={{ y: -10 }}
//           className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//         >
//           {/* Project Image */}
//           <div className="relative overflow-hidden">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               {project.icon}
//             </div>
//           </div>

//           {/* Project Content */}
//           <div className="p-6">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//               {project.title}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
//               {project.description}
//             </p>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {project.tech.map((tech, techIndex) => (
//                 <span
//                   key={techIndex}
//                   className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Project Links */}
//             <div className="flex space-x-4">
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={project.github}
//                 className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
//               >
//                 <Github className="h-4 w-4" />
//                 <span>Code</span>
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={project.demo}
//                 className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
//               >
//                 <ExternalLink className="h-4 w-4" />
//                 <span>Demo</span>
//               </motion.a>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );

//   // ---------- CAROUSEL VIEW ----------
//   const CarouselView = () => {
//     const project = projects[currentIndex];

//     return (
//       <div className="relative">
//         <div className="flex justify-center items-center h-[500px] overflow-hidden">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.5 }}
//             className="w-full max-w-4xl h-full rounded-2xl overflow-hidden shadow-2xl"
//           >
//             {/* Background Image */}
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-full object-cover"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//             {/* Content */}
//             <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
//               {/* Icon */}
//               <div className="mb-4 p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg w-fit">
//                 {project.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-2xl font-bold mb-3">
//                 {project.title}
//               </h3>

//               {/* Description */}
//               <p className="text-lg text-gray-200 mb-5 leading-relaxed max-w-2xl">
//                 {project.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech, techIndex) => (
//                   <span
//                     key={techIndex}
//                     className="px-3 py-1 text-sm bg-blue-600 bg-opacity-70 text-white rounded-full backdrop-blur-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="flex space-x-4">
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={project.github}
//                   className="flex items-center space-x-2 px-4 py-2 bg-gray-800 bg-opacity-70 text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 backdrop-blur-sm"
//                 >
//                   <Github className="h-4 w-4" />
//                   <span>Code</span>
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={project.demo}
//                   className="flex items-center space-x-2 px-4 py-2 bg-blue-600 bg-opacity-70 text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 backdrop-blur-sm"
//                 >
//                   <ExternalLink className="h-4 w-4" />
//                   <span>Demo</span>
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevProject}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </button>
//         <button
//           onClick={nextProject}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </button>

//         {/* Indicators */}
//         <div className="flex justify-center mt-6 space-x-2">
//           {projects.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex
//                   ? 'bg-blue-600 scale-125'
//                   : 'bg-gray-400 hover:bg-gray-300'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
//             A showcase of my recent work and personal projects
//           </p>

//           {/* View Mode Toggle */}
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <button
//               onClick={() => setViewMode('grid')}
//               className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
//                 viewMode === 'grid'
//                   ? 'bg-blue-600 text-white shadow-lg'
//                   : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
//               }`}
//             >
//               <LayoutGrid className="h-4 w-4" />
//               <span>Grid View</span>
//             </button>
//             <button
//               onClick={() => setViewMode('carousel')}
//               className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
//                 viewMode === 'carousel'
//                   ? 'bg-blue-600 text-white shadow-lg'
//                   : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
//               }`}
//             >
//               <ArrowRightLeft className="h-4 w-4" />
//               <span>Carousel View</span>
//             </button>
//           </div>
//         </motion.div>

//         {/* Animated view transition */}
//         <motion.div
//           key={viewMode}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {viewMode === 'grid' ? <GridView /> : <CarouselView />}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

////////////////////////

// import React from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Github, Smartphone, Globe, ShoppingCart } from "lucide-react";

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description:
//       "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
//     image:
//       "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     github: "#",
//     demo: "#",
//     icon: <ShoppingCart className="h-6 w-6" />,
//   },
//   {
//     title: "Task Management App",
//     description:
//       "A collaborative task management app with real-time updates and project tracking.",
//     image:
//       "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
//     github: "#",
//     demo: "#",
//     icon: <Smartphone className="h-6 w-6" />,
//   },
//   {
//     title: "Weather Dashboard",
//     description:
//       "A beautiful weather dashboard with forecasts, interactive maps, and charts.",
//     image:
//       "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tech: ["React", "TypeScript", "Weather API", "Chart.js"],
//     github: "#",
//     demo: "#",
//     icon: <Globe className="h-6 w-6" />,
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             A showcase of my recent work and personal projects
//           </p>
//         </motion.div>

//         {/* 3D Carousel */}
//         <div className="relative w-full flex justify-center items-center overflow-hidden">
//           <motion.div
//             className="flex space-x-6"
//             drag="x"
//             dragConstraints={{ left: -900, right: 0 }}
//           >
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//                 className="relative w-[300px] flex-shrink-0 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer group"
//               >
//                 {/* Project Image */}
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
//                   <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white">
//                     {project.icon}
//                   </div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Links */}
//                   <div className="flex space-x-4">
//                     <a
//                       href={project.github}
//                       className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
//                     >
//                       <Github className="h-4 w-4" />
//                       <span>Code</span>
//                     </a>
//                     <a
//                       href={project.demo}
//                       className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
//                     >
//                       <ExternalLink className="h-4 w-4" />
//                       <span>Demo</span>
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

/////////////////////////

// Projects.jsx
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Demo items (replace images/text with your projects)
// const projects = [
//   {
//     id: 1,
//     title: "Bunker",
//     subtitle: "Balthazar",
//     time: "4:05",
//     image:
//       "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?auto=format&fit=crop&w=882&q=80",
//   },
//   {
//     id: 2,
//     title: "Words Remain",
//     subtitle: "Moderator",
//     time: "4:05",
//     image:
//       "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&w=1234&q=80",
//   },
//   {
//     id: 3,
//     title: "Falling Out",
//     subtitle: "Otzeki",
//     time: "4:05",
//     image:
//       "https://images.unsplash.com/photo-1533461502717-83546f485d24?auto=format&fit=crop&w=900&q=60",
//   },
// ];

// const Projects = () => {
//   const [selected, setSelected] = useState(1);

//   // index of selected card
//   const selectedIndex = projects.findIndex((p) => p.id === selected);

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500 p-6">
//       <div className="w-full max-w-4xl flex flex-col items-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
//           Featured Projects
//         </h2>

//         {/* Carousel area */}
//         <div className="relative w-full h-[420px] flex items-center justify-center mb-8">
//           {projects.map((project, index) => {
//             // compute shortest offset (works for 3+ items)
//             let offset = index - selectedIndex;
//             const half = Math.floor(projects.length / 2);
//             if (offset > half) offset -= projects.length;
//             if (offset < -half) offset += projects.length;

//             // spacing / position
//             const x = offset * 260; // adjust spacing if needed
//             const isCenter = offset === 0;

//             return (
//               <motion.button
//                 key={project.id}
//                 onClick={() => setSelected(project.id)}
//                 aria-pressed={isCenter}
//                 className="absolute w-3/5 h-full rounded-xl overflow-hidden shadow-2xl focus:outline-none"
//                 initial={false}
//                 animate={{
//                   x,
//                   scale: isCenter ? 1 : 0.82,
//                   opacity: isCenter ? 1 : 0.45,
//                   filter: isCenter ? "brightness(100%)" : "brightness(80%)",
//                 }}
//                 transition={{ type: "spring", stiffness: 220, damping: 24 }}
//                 style={{ zIndex: 50 - Math.abs(offset) }}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* subtle top-right badge (optional) */}
//                 <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white pointer-events-none">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-4 h-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 </div>
//               </motion.button>
//             );
//           })}
//         </div>

//         {/* Player info card */}
//         <div className="bg-white rounded-lg p-4 w-80 shadow-lg">
//           <div className="flex items-center space-x-3 mb-3">
//             <div className="p-2 bg-blue-100 rounded-full">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="#2992dc"
//                 className="w-5 h-5"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
//               </svg>
//             </div>

//             <div className="overflow-hidden h-10 relative flex-1">
//               <AnimatePresence mode="wait">
//                 {projects
//                   .filter((p) => p.id === selected)
//                   .map((p) => (
//                     <motion.div
//                       key={p.id}
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       exit={{ y: -20, opacity: 0 }}
//                       transition={{ duration: 0.35 }}
//                       className="absolute left-0"
//                     >
//                       <p className="text-sm font-semibold text-gray-800">{p.title}</p>
//                       <div className="flex justify-between text-xs text-gray-500">
//                         <span>{p.subtitle}</span>
//                         <span>{p.time}</span>
//                       </div>
//                     </motion.div>
//                   ))}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Progress bar */}
//           <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//             <motion.div
//               className="h-full bg-blue-500"
//               initial={{ width: "0%" }}
//               animate={{ width: "60%" }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

/////////////////////////

// Projects.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// // Demo projects (replace with your actual projects)
// const projects = [
//   {
//     id: 1,
//     title: "Portfolio Website",
//     subtitle: "React + Tailwind",
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/portfolio",
//     image:
//       "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?auto=format&fit=crop&w=882&q=80",
//   },
//   {
//     id: 2,
//     title: "E-Commerce App",
//     subtitle: "MERN Stack",
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/ecommerce",
//     image:
//       "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&w=1234&q=80",
//   },
//   {
//     id: 3,
//     title: "Chat Application",
//     subtitle: "Socket.io + Node",
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/chatapp",
//     image:
//       "https://images.unsplash.com/photo-1533461502717-83546f485d24?auto=format&fit=crop&w=900&q=60",
//   },
// ];

// const Projects = () => {
//   const [selected, setSelected] = useState(1);
//   const selectedIndex = projects.findIndex((p) => p.id === selected);

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500 p-6">
//       <div className="w-full max-w-5xl flex flex-col items-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
//           My Projects
//         </h2>

//         {/* Carousel */}
//         <div className="relative w-full h-[450px] flex items-center justify-center">
//           {projects.map((project, index) => {
//             // Compute offset for carousel
//             let offset = index - selectedIndex;
//             const half = Math.floor(projects.length / 2);
//             if (offset > half) offset -= projects.length;
//             if (offset < -half) offset += projects.length;

//             const x = offset * 280; // spacing
//             const isCenter = offset === 0;

//             return (
//               <motion.div
//                 key={project.id}
//                 onClick={() => setSelected(project.id)}
//                 className="absolute w-3/5 h-full rounded-xl overflow-hidden shadow-2xl cursor-pointer"
//                 initial={false}
//                 animate={{
//                   x,
//                   scale: isCenter ? 1 : 0.82,
//                   opacity: isCenter ? 1 : 0.45,
//                   filter: isCenter ? "brightness(100%)" : "brightness(80%)",
//                 }}
//                 transition={{ type: "spring", stiffness: 220, damping: 24 }}
//                 style={{ zIndex: 50 - Math.abs(offset) }}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Overlay details only on center card */}
//                 {isCenter && (
//                   <motion.div
//                     className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
//                     <p className="text-sm mb-4">{project.subtitle}</p>

//                     <div className="flex gap-4">
//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow text-sm font-medium"
//                       >
//                         Live Demo
//                       </a>
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg shadow text-sm font-medium"
//                       >
//                         GitHub
//                       </a>
//                     </div>
//                   </motion.div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

/////////////////////

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Github, ExternalLink } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     title: "Portfolio Website",
//     subtitle: "React + Tailwind",
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/portfolio",
//     image:
//       "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?auto=format&fit=crop&w=882&q=80",
//   },
//   {
//     id: 2,
//     title: "E-Commerce App",
//     subtitle: "MERN Stack",
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/ecommerce",
//     image:
//       "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&w=1234&q=80",
//   },
//   {
//     id: 3,
//     title: "Chat Application",
//     subtitle: "Socket.io + Node",
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/chatapp",
//     image:
//       "https://images.unsplash.com/photo-1533461502717-83546f485d24?auto=format&fit=crop&w=900&q=60",
//   },
// ];

// const Projects = () => {
//   const [selected, setSelected] = useState(1);
//   const selectedIndex = projects.findIndex((p) => p.id === selected);

//    // 🔄 Auto-scroll every 2s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSelected((prev) => {
//         const currentIndex = projects.findIndex((p) => p.id === prev);
//         const nextIndex = (currentIndex + 1) % projects.length;
//         return projects[nextIndex].id;
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="projects"
//       className="relative z-0 pt-24 pb-20 bg-gray-50 dark:bg-gray-900 flex flex-col items-center"
//     >
//       <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
//         My Projects
//       </h2>

//       <div className="relative w-full max-w-5xl h-[480px] flex items-center justify-center">
//         {projects.map((project, index) => {
//           let offset = index - selectedIndex;
//           const half = Math.floor(projects.length / 2);
//           if (offset > half) offset -= projects.length;
//           if (offset < -half) offset += projects.length;

//           const x = offset * 300; // distance between cards
//           const isCenter = offset === 0;

//           return (
//             <motion.div
//               key={project.id}
//               onClick={() => setSelected(project.id)}
//               className={`absolute w-3/5 h-full rounded-xl overflow-hidden shadow-2xl cursor-pointer ${
//                 isCenter ? "z-20" : "z-10"
//               }`}
//               initial={false}
//               animate={{
//                 x,
//                 scale: isCenter ? 1 : 0.8,
//                 opacity: isCenter ? 1 : 0.4,
//               }}
//               transition={{ duration: 0.5 }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover"
//               />

//               {/* Overlay with project details (lowered) */}
//               <div className="absolute bottom-6 left-0 right-0 text-center text-white bg-black/50 py-4 px-6 rounded-t-xl">
//                 <h3 className="text-xl font-bold">{project.title}</h3>
//                 <p className="text-sm mb-2">{project.subtitle}</p>
//                 <div className="flex justify-center space-x-4">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-md hover:bg-gray-700"
//                   >
//                     <Github className="h-4 w-4" /> Code
//                   </a>
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-500"
//                   >
//                     <ExternalLink className="h-4 w-4" /> Live
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// carousal one //////
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Github, ExternalLink } from "lucide-react";

// // Demo projects (replace with your actual projects)
// const projects = [
//   {
//     id: 1,
//     title: "Portfolio Website",
//     subtitle: "React + Tailwind",
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/portfolio",
//     image:
//       "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?auto=format&fit=crop&w=882&q=80",
//   },
//   {
//     id: 2,
//     title: "E-Commerce App",
//     subtitle: "MERN Stack",
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/ecommerce",
//     image:
//       "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&w=1234&q=80",
//   },
//   {
//     id: 3,
//     title: "Chat Application",
//     subtitle: "Socket.io + Node",
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/chatapp",
//     image:
//       "https://images.unsplash.com/photo-1533461502717-83546f485d24?auto=format&fit=crop&w=900&q=60",
//   },
// ];

// const Projects = () => {
//   const [selected, setSelected] = useState(1);
//   const selectedIndex = projects.findIndex((p) => p.id === selected);

//   // 🔄 Auto-scroll every 4s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSelected((prev) => {
//         const currentIndex = projects.findIndex((p) => p.id === prev);
//         const nextIndex = (currentIndex + 1) % projects.length;
//         return projects[nextIndex].id;
//       });
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500 p-6"
//     >
//       <div className="w-full max-w-5xl flex flex-col items-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
//           My Projects
//         </h2>

//         {/* Carousel */}
//         <div className="relative w-full h-[450px] flex items-center justify-center">
//           {projects.map((project, index) => {
//             let offset = index - selectedIndex;
//             const half = Math.floor(projects.length / 2);
//             if (offset > half) offset -= projects.length;
//             if (offset < -half) offset += projects.length;

//             const x = offset * 280; // spacing
//             const isCenter = offset === 0;

//             return (
//               <motion.div
//                 key={project.id}
//                 onClick={() => setSelected(project.id)}
//                 className="absolute w-3/5 h-full rounded-xl overflow-hidden shadow-2xl cursor-pointer"
//                 initial={false}
//                 animate={{
//                   x,
//                   scale: isCenter ? 1 : 0.82,
//                   opacity: isCenter ? 1 : 0.45,
//                   filter: isCenter ? "brightness(100%)" : "brightness(80%)",
//                 }}
//                 transition={{ type: "spring", stiffness: 220, damping: 24 }}
//                 style={{ zIndex: 50 - Math.abs(offset) }}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Overlay details only on center card */}
//                 {isCenter && (
//                   <motion.div
//                     className="absolute inset-0 bg-black/50 flex flex-col items-center justify-end text-center text-white p-6"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
//                     <p className="text-sm mb-4">{project.subtitle}</p>

//                     <div className="flex gap-4 mb-2">
//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow text-sm font-medium"
//                       >
//                         <ExternalLink className="h-4 w-4" />
//                         Live Demo
//                       </a>
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg shadow text-sm font-medium"
//                       >
//                         <Github className="h-4 w-4" />
//                         GitHub
//                       </a>
//                     </div>
//                   </motion.div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

////////////////////

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Github, ExternalLink } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     title: "Portfolio Website",
//     subtitle: "React + Tailwind",
//     description:
//       "A modern portfolio website to showcase skills and projects with animations and responsive design.",
//     features: [
//       "Responsive design",
//       "Dark/Light theme toggle",
//       "Projects showcase section",
//     ],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/portfolio",
//     image:
//       "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?auto=format&fit=crop&w=882&q=80",
//     tech: ["React", "TailwindCSS"],
//   },
//   {
//     id: 2,
//     title: "E-Commerce App",
//     subtitle: "MERN Stack",
//     description:
//       "A complete e-commerce solution with cart, checkout, and payment gateway integration.",
//     features: [
//       "User authentication & authorization",
//       "Cart & checkout system",
//       "Stripe integration",
//     ],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/ecommerce",
//     image:
//       "https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&w=1234&q=80",
//     tech: ["MongoDB", "Express", "React", "Node.js"],
//   },
//   {
//     id: 3,
//     title: "Chat Application",
//     subtitle: "Socket.io + Node",
//     description:
//       "A real-time chat application supporting multiple rooms and instant messaging.",
//     features: [
//       "Real-time messaging with Socket.io",
//       "Multiple chat rooms",
//       "User presence tracking",
//     ],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/chatapp",
//     image:
//       "https://images.unsplash.com/photo-1533461502717-83546f485d24?auto=format&fit=crop&w=900&q=60",
//     tech: ["Socket.io", "Node.js", "Express"],
//   },
// ];

// const Projects = () => {
//   const [active, setActive] = useState(0);

//   const handleNext = () =>
//     setActive((prev) => (prev + 1) % projects.length);
//   const handlePrev = () =>
//     setActive((prev) => (prev - 1 + projects.length) % projects.length);

//   // 🔄 Auto-scroll every 5s
//   useEffect(() => {
//     const interval = setInterval(handleNext, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="projects"
//       className="relative z-0 pt-24 pb-20 bg-gray-50 dark:bg-gray-900 flex flex-col items-center"
//     >
//       <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
//         My Projects
//       </h2>

//       <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 max-w-6xl px-6">
//         {/* LEFT IMAGE */}
//         <div className="relative h-80 w-full">
//           <AnimatePresence>
//             {projects.map((project, index) =>
//               index === active ? (
//                 <motion.img
//                   key={project.id}
//                   src={project.image}
//                   alt={project.title}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className="absolute inset-0 h-full w-full rounded-xl object-cover shadow-xl"
//                 />
//               ) : null
//             )}
//           </AnimatePresence>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="flex flex-col justify-between">
//           <motion.div
//             key={active}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//               {projects[active].title}
//             </h3>
//             <p className="text-sm text-gray-600 dark:text-gray-400">
//               {projects[active].subtitle}
//             </p>
//             <p className="mt-4 text-gray-700 dark:text-gray-300">
//               {projects[active].description}
//             </p>

//             {/* Tech stack */}
//             <div className="mt-4 flex flex-wrap gap-2">
//               {projects[active].tech.map((t, i) => (
//                 <span
//                   key={i}
//                   className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>

//             {/* Features */}
//             <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-400 text-sm space-y-1">
//               {projects[active].features.map((f, i) => (
//                 <li key={i}>{f}</li>
//               ))}
//             </ul>

//             {/* Links */}
//             <div className="mt-6 flex gap-4">
//               <a
//                 href={projects[active].github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
//               >
//                 <Github className="h-5 w-5" /> Code
//               </a>
//               <a
//                 href={projects[active].live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
//               >
//                 <ExternalLink className="h-5 w-5" /> Live
//               </a>
//             </div>
//           </motion.div>

//           {/* Navigation Arrows */}
//           <div className="flex gap-4 mt-8">
//             <button
//               onClick={handlePrev}
//               className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800"
//             >
//               ←
//             </button>
//             <button
//               onClick={handleNext}
//               className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800"
//             >
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

//////////

// import { AnimatedProjects } from "../components/ui/animated-testimonials";
// // import { projects } from "@/data/projects";

// const projects = [
//   {
//     name: "English Expressway",
//     description:
//       "An online platform to join courses and buy ebooks to learn English, featuring role-based authentication and payment integration.",
//     features: [
//       "Role-based authentication using NextAuth.js and JWT",
//       "Integrated Razorpay for payment transactions",
//       "Responsive landing page with course listings",
//       "User dashboard for enrolled courses",
//       "Admin dashboard for content management",
//     ],
//     tech: ["Next.js", "NextAuth.js", "Tailwind CSS", "MongoDB", "Razorpay"],
//     image: "/projects/english-expressway.png", // replace with your image
//     github: "https://github.com/yourusername/english-expressway",
//     live: "https://english-expressway.vercel.app",
//   },
//   {
//     name: "FoodieHub",
//     description:
//       "A modern food delivery app where users can browse restaurants, add meals to cart, and pay online.",
//     features: [
//       "Restaurant & menu browsing",
//       "Cart & order management",
//       "Stripe integration for payments",
//       "Order tracking system",
//     ],
//     tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
//     image: "/projects/foodiehub.png",
//     github: "https://github.com/yourusername/foodiehub",
//     live: "https://foodiehub.vercel.app",
//   },
// ];

// export default function ProjectsShowcase() {
//   return <AnimatedProjects projects={projects} autoplay={true} />;
// }

//////////

//// main ///
// import React from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Github, Smartphone, Globe, ShoppingCart } from "lucide-react";
// // If you installed Aceternity UI via npm, adjust path to match your setup
// import AnimatedProjectsShowcase from "@/components/ui/animated-testimonials.tsx";

// const Projects = () => {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description:
//         "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
//       image:
//         "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "Node.js", "MongoDB", "Stripe"],
//       github: "#",
//       demo: "#",
//       icon: <ShoppingCart className="h-6 w-6" />,
//     },
//     {
//       title: "Task Management App",
//       description:
//         "A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.",
//       image:
//         "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
//       github: "#",
//       demo: "#",
//       icon: <Smartphone className="h-6 w-6" />,
//     },
//     {
//       title: "Weather Dashboard",
//       description:
//         "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather data visualization.",
//       image:
//         "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//       tech: ["React", "TypeScript", "Weather API", "Chart.js"],
//       github: "#",
//       demo: "#",
//       icon: <Globe className="h-6 w-6" />,
//     },
//   ];

//   // Transform projects into testimonial-style data
//   const testimonialProjects = projects.map((p) => ({
//     quote: p.description,
//     name: p.title,
//     designation: p.tech.join(" • "),
//     src: p.image,
//   }));

//   return (
//     <>
//       {/* Original Projects Grid */}
//       <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//               Featured Projects
//             </h2>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//               A showcase of my recent work and personal projects
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//               >
//                 {/* Project Image */}
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     {project.icon}
//                   </div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Project Links */}
//                   <div className="flex space-x-4">
//                     <motion.a
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       href={project.github}
//                       className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
//                     >
//                       <Github className="h-4 w-4" />
//                       <span>Code</span>
//                     </motion.a>
//                     <motion.a
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       href={project.demo}
//                       className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
//                     >
//                       <ExternalLink className="h-4 w-4" />
//                       <span>Demo</span>
//                     </motion.a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Animated Testimonials Section */}
//       {/* <section className="py-20 bg-white dark:bg-gray-900">
//         <div className="container mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Projects in Spotlight
//             </h2>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
//               Explore my work in a more engaging, testimonial-style showcase.
//             </p>
//           </motion.div>

//           <AnimatedProjectsShowcase projects={projects} autoPlay={true} interval={5000} />
//         </div>
//       </section> */}
//     </>
//   );
// };

// export default Projects;

/////////////////
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Github, ExternalLink, ShoppingCart, Smartphone, Globe } from "lucide-react";

// // Enhanced projects with full details from your original component
// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     subtitle: "Full-Stack Solution",
//     description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/ecommerce",
//     image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <ShoppingCart className="h-6 w-6" />,
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     subtitle: "Collaborative Solution",
//     description: "A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.",
//     tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/taskapp",
//     image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <Smartphone className="h-6 w-6" />,
//   },
//   {
//     id: 3,
//     title: "Weather Dashboard",
//     subtitle: "Data Visualization",
//     description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather data visualization.",
//     tech: ["React", "TypeScript", "Weather API", "Chart.js"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/weather",
//     image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <Globe className="h-6 w-6" />,
//   },
// ];

// const Projects = () => {
//   const [selected, setSelected] = useState(1);
//   const [isHovered, setIsHovered] = useState(false);
//   const selectedIndex = projects.findIndex((p) => p.id === selected);
//   const selectedProject = projects[selectedIndex];

//   // Auto-scroll every 4s (only when not hovered)
//   useEffect(() => {
//     if (isHovered) return; // Stop auto-scroll when hovered

//     const interval = setInterval(() => {
//       setSelected((prev) => {
//         const currentIndex = projects.findIndex((p) => p.id === prev);
//         const nextIndex = (currentIndex + 1) % projects.length;
//         return projects[nextIndex].id;
//       });
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isHovered]);

//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center bg-white dark:bg-black"
//     >
//       <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12">
//         {/* Project Details Panel - Left Side */}
//         <motion.div
//           className="w-full lg:w-1/2 text-white"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left">
//             My Projects
//           </h2>

//           {selectedProject && (
//             <motion.div
//               key={selectedProject.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
//             >
//               {/* Project Icon and Title */}
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="p-2 bg-white/20 rounded-lg">
//                   {selectedProject.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
//                   <p className="text-white/80">{selectedProject.subtitle}</p>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-white/90 mb-6 leading-relaxed">
//                 {selectedProject.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="mb-6">
//                 <h4 className="text-sm font-semibold mb-3 text-white/80">Tech Stack</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedProject.tech.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 text-sm bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-4">
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={selectedProject.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg text-white font-medium transition-colors"
//                 >
//                   <ExternalLink className="h-4 w-4" />
//                   Live Demo
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={selectedProject.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-6 py-3 bg-gray-700/80 hover:bg-gray-600 rounded-lg shadow-lg text-white font-medium transition-colors backdrop-blur-sm"
//                 >
//                   <Github className="h-4 w-4" />
//                   GitHub
//                 </motion.a>
//               </div>
//             </motion.div>
//           )}
//         </motion.div>

//         {/* Carousel - Right Side */}
//         <div
//           className="w-full lg:w-1/2"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div className="relative w-full h-[500px] flex items-center justify-center">
//             {projects.map((project, index) => {
//               let offset = index - selectedIndex;
//               const half = Math.floor(projects.length / 2);
//               if (offset > half) offset -= projects.length;
//               if (offset < -half) offset += projects.length;

//               const x = offset * 200; // spacing
//               const isCenter = offset === 0;

//               return (
//                 <motion.div
//                   key={project.id}
//                   onClick={() => setSelected(project.id)}
//                   className="absolute w-4/5 h-4/5 rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
//                   initial={false}
//                   animate={{
//                     x,
//                     scale: isCenter ? 1 : 0.75,
//                     opacity: isCenter ? 1 : 0.4,
//                     filter: isCenter ? "brightness(100%)" : "brightness(70%)",
//                   }}
//                   transition={{ type: "spring", stiffness: 220, damping: 24 }}
//                   style={{ zIndex: 50 - Math.abs(offset) }}
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />

//                   {/* Subtle overlay on center card */}
//                   {isCenter && (
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-4"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                     >
//                       <div className="text-center text-white">
//                         <h4 className="text-lg font-semibold">{project.title}</h4>
//                         <p className="text-sm text-white/80">{project.subtitle}</p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Carousel Indicators */}
//           <div className="flex justify-center gap-2 mt-6">
//             {projects.map((project) => (
//               <button
//                 key={project.id}
//                 onClick={() => setSelected(project.id)}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   selected === project.id ? 'bg-white' : 'bg-white/30'
//                 }`}
//               />
//             ))}
//           </div>

//           {/* Hover Indicator */}
//           {isHovered && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center mt-4"
//             >
//               <p className="text-white/60 text-sm">Auto-scroll paused</p>
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

///
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Github, ExternalLink, ShoppingCart, Smartphone, Globe } from "lucide-react";

// // Enhanced projects with full details
// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     subtitle: "Full-Stack Solution",
//     description:
//       "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/ecommerce",
//     image:
//       "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <ShoppingCart className="h-6 w-6" />,
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     subtitle: "Collaborative Solution",
//     description:
//       "A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.",
//     tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/taskapp",
//     image:
//       "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <Smartphone className="h-6 w-6" />,
//   },
//   {
//     id: 3,
//     title: "Weather Dashboard",
//     subtitle: "Data Visualization",
//     description:
//       "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather data visualization.",
//     tech: ["React", "TypeScript", "Weather API", "Chart.js"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/weather",
//     image:
//       "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <Globe className="h-6 w-6" />,
//   },
// ];

// const Projects = () => {
//   const [selected, setSelected] = useState(1);
//   const [isHovered, setIsHovered] = useState(false);
//   const selectedIndex = projects.findIndex((p) => p.id === selected);
//   const selectedProject = projects[selectedIndex];

//   // Auto-scroll every 4s (only when not hovered)
//   useEffect(() => {
//     if (isHovered) return;
//     const interval = setInterval(() => {
//       setSelected((prev) => {
//         const currentIndex = projects.findIndex((p) => p.id === prev);
//         const nextIndex = (currentIndex + 1) % projects.length;
//         return projects[nextIndex].id;
//       });
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [isHovered]);

//   return (
//     <section
//       id="projects"
//       className="min-h-screen pt-24 flex items-center justify-center bg-white dark:bg-black"
//     >
//       <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-20">
//         {/* Carousel - LEFT side */}
//         <div
//           className="w-full lg:w-1/2 flex justify-center"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div className="relative w-full max-w-[500px] h-[450px] flex items-center justify-center">
//             {projects.map((project, index) => {
//               let offset = index - selectedIndex;
//               const half = Math.floor(projects.length / 2);
//               if (offset > half) offset -= projects.length;
//               if (offset < -half) offset += projects.length;

//               const x = offset * 220; // space between cards
//               const isCenter = offset === 0;

//               return (
//                 <motion.div
//                   key={project.id}
//                   onClick={() => setSelected(project.id)}
//                   className="absolute w-4/5 h-4/5 rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
//                   initial={false}
//                   animate={{
//                     x,
//                     scale: isCenter ? 1 : 0.75,
//                     opacity: isCenter ? 1 : 0.4,
//                     filter: isCenter ? "brightness(100%)" : "brightness(70%)",
//                   }}
//                   transition={{ type: "spring", stiffness: 220, damping: 24 }}
//                   style={{ zIndex: 50 - Math.abs(offset) }}
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />

//                   {/* Overlay for center card */}
//                   {isCenter && (
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-4"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                     >
//                       <div className="text-center text-white">
//                         <h4 className="text-lg font-semibold">
//                           {project.title}
//                         </h4>
//                         <p className="text-sm text-white/80">
//                           {project.subtitle}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Project Details - RIGHT side */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left text-black dark:text-white">
//             My Projects
//           </h2>

//           {selectedProject && (
//             <motion.div
//               key={selectedProject.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl
//                          border border-gray-300 dark:border-white/20
//                          text-black dark:text-white"
//             >
//               {/* Project Icon and Title */}
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="p-2 bg-gray-200 dark:bg-white/20 rounded-lg">
//                   {selectedProject.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
//                   <p className="text-gray-600 dark:text-white/80">
//                     {selectedProject.subtitle}
//                   </p>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-gray-700 dark:text-white/90 mb-6 leading-relaxed">
//                 {selectedProject.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="mb-6">
//                 <h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-white/80">
//                   Tech Stack
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedProject.tech.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 text-sm
//                                  bg-gray-100 dark:bg-white/20 backdrop-blur-sm
//                                  text-black dark:text-white
//                                  rounded-full border border-gray-300 dark:border-white/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-4">
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={selectedProject.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-6 py-3
//                              bg-gray-700/80 hover:bg-gray-600
//                              rounded-lg shadow-lg
//                              text-white font-medium transition-colors backdrop-blur-sm"
//                 >
//                   <ExternalLink className="h-4 w-4" />
//                   Live Demo
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={selectedProject.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-6 py-3
//                              bg-gray-700/80 hover:bg-gray-600
//                              rounded-lg shadow-lg
//                              text-white font-medium transition-colors backdrop-blur-sm"
//                 >
//                   <Github className="h-4 w-4" />
//                   GitHub
//                 </motion.a>
//               </div>
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };i

// export default Projects;

///// Heading set ///////////////////
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Github, ExternalLink, ShoppingCart, Smartphone, Globe } from "lucide-react";

// // Enhanced projects with full details
// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     subtitle: "Full-Stack Solution",
//     description:
//       "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/ecommerce",
//     image:
//       "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <ShoppingCart className="h-6 w-6" />,
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     subtitle: "Collaborative Solution",
//     description:
//       "A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.",
//     tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/taskapp",
//     image:
//       "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <Smartphone className="h-6 w-6" />,
//   },
//   {
//     id: 3,
//     title: "Weather Dashboard",
//     subtitle: "Data Visualization",
//     description:
//       "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather data visualization.",
//     tech: ["React", "TypeScript", "Weather API", "Chart.js"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/weather",
//     image:
//       "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <Globe className="h-6 w-6" />,
//   },
// ];

// const Projects = () => {
//   const [selected, setSelected] = useState(1);
//   const [isHovered, setIsHovered] = useState(false);
//   const selectedIndex = projects.findIndex((p) => p.id === selected);
//   const selectedProject = projects[selectedIndex];

//   // Auto-scroll every 4s (only when not hovered)
//   useEffect(() => {
//     if (isHovered) return;
//     const interval = setInterval(() => {
//       setSelected((prev) => {
//         const currentIndex = projects.findIndex((p) => p.id === prev);
//         const nextIndex = (currentIndex + 1) % projects.length;
//         return projects[nextIndex].id;
//       });
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [isHovered]);

//   return (
//     <section
//       id="projects"
//       className="min-h-screen pt-32 flex flex-col items-center justify-center bg-white dark:bg-black"
//     >
//       {/* Title at the top */}
//       <motion.h2
//         className="text-4xl md:text-5xl font-bold mb-16 text-center text-black dark:text-white"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//       >
//         My Projects
//       </motion.h2>

//       <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-20">
//         {/* Carousel - LEFT side */}
//         <div
//           className="w-full lg:w-1/2 flex justify-center"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div className="relative w-full max-w-[500px] h-[450px] flex items-center justify-center">
//             {projects.map((project, index) => {
//               let offset = index - selectedIndex;
//               const half = Math.floor(projects.length / 2);
//               if (offset > half) offset -= projects.length;
//               if (offset < -half) offset += projects.length;

//               const x = offset * 220; // space between cards
//               const isCenter = offset === 0;

//               return (
//                 <motion.div
//                   key={project.id}
//                   onClick={() => setSelected(project.id)}
//                   className="absolute w-4/5 h-4/5 rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
//                   initial={false}
//                   animate={{
//                     x,
//                     scale: isCenter ? 1 : 0.75,
//                     opacity: isCenter ? 1 : 0.4,
//                     filter: isCenter ? "brightness(100%)" : "brightness(70%)",
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 160, // reduced stiffness
//                     damping: 22,   // slightly higher damping
//                   }}
//                   style={{ zIndex: 10 - Math.abs(offset) }}
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
//                   />

//                   {/* Overlay for center card */}
//                   {isCenter && (
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-4"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.4, ease: "easeOut" }}
//                     >
//                       <div className="text-center text-white">
//                         <h4 className="text-lg font-semibold">
//                           {project.title}
//                         </h4>
//                         <p className="text-sm text-white/80">
//                           {project.subtitle}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Project Details - RIGHT side */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           {selectedProject && (
//             <motion.div
//               key={selectedProject.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl
//                          border border-gray-300 dark:border-white/20
//                          text-black dark:text-white"
//             >
//               {/* Project Icon and Title */}
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="p-2 bg-gray-200 dark:bg-white/20 rounded-lg">
//                   {selectedProject.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
//                   <p className="text-gray-600 dark:text-white/80">
//                     {selectedProject.subtitle}
//                   </p>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-gray-700 dark:text-white/90 mb-6 leading-relaxed">
//                 {selectedProject.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="mb-6">
//                 <h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-white/80">
//                   Tech Stack
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedProject.tech.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 text-sm
//                                  bg-gray-100 dark:bg-white/20 backdrop-blur-sm
//                                  text-black dark:text-white
//                                  rounded-full border border-gray-300 dark:border-white/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-4">
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={selectedProject.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-6 py-3
//                              bg-gray-700/80 hover:bg-gray-600
//                              rounded-lg shadow-lg
//                              text-white font-medium transition-colors backdrop-blur-sm"
//                 >
//                   <ExternalLink className="h-4 w-4" />
//                   Live Demo
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={selectedProject.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-6 py-3
//                              bg-gray-700/80 hover:bg-gray-600
//                              rounded-lg shadow-lg
//                              text-white font-medium transition-colors backdrop-blur-sm"
//                 >
//                   <Github className="h-4 w-4" />
//                   GitHub
//                 </motion.a>
//               </div>
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

//////////////////

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Github,
//   ExternalLink,
//   ShoppingCart,
//   Smartphone,
//   Globe,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// // Enhanced projects with full details
// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     subtitle: "Full-Stack Solution",
//     description:
//       "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/ecommerce",
//     image:
//       "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <ShoppingCart className="h-6 w-6" />,
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     subtitle: "Collaborative Solution",
//     description:
//       "A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.",
//     tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/taskapp",
//     image:
//       "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <Smartphone className="h-6 w-6" />,
//   },
//   {
//     id: 3,
//     title: "Weather Dashboard",
//     subtitle: "Data Visualization",
//     description:
//       "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather data visualization.",
//     tech: ["React", "TypeScript", "Weather API", "Chart.js"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/weather",
//     image:
//       "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <Globe className="h-6 w-6" />,
//   },
// ];

// const Projects = () => {
//   const [selected, setSelected] = useState(1);
//   const [isHovered, setIsHovered] = useState(false);
//   const selectedIndex = projects.findIndex((p) => p.id === selected);
//   const selectedProject = projects[selectedIndex];

//   // Auto-scroll every 4s (only when not hovered)
//   useEffect(() => {
//     if (isHovered) return;
//     const interval = setInterval(() => {
//       handleNext();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [isHovered]);

//   const handleNext = () => {
//     setSelected((prev) => {
//       const currentIndex = projects.findIndex((p) => p.id === prev);
//       const nextIndex = (currentIndex + 1) % projects.length;
//       return projects[nextIndex].id;
//     });
//   };

//   const handlePrev = () => {
//     setSelected((prev) => {
//       const currentIndex = projects.findIndex((p) => p.id === prev);
//       const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
//       return projects[prevIndex].id;
//     });
//   };

//   return (
//     <section
//       id="projects"
//       className="min-h-screen pt-32 flex flex-col items-center justify-center bg-white dark:bg-black"
//     >
//       {/* Title at the top */}
//       <motion.h2
//         className="text-4xl md:text-5xl font-bold mb-16 text-center text-black dark:text-white"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//       >
//         My Projects
//       </motion.h2>

//       <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-30">
//         {/* Carousel - LEFT side */}
//         <div
//           className="w-full lg:w-1/2 flex justify-center relative"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div className="relative w-full max-w-[500px] h-[450px] flex items-center justify-center">
//             {projects.map((project, index) => {
//               let offset = index - selectedIndex;
//               const half = Math.floor(projects.length / 2);
//               if (offset > half) offset -= projects.length;
//               if (offset < -half) offset += projects.length;

//               const x = offset * 220; // space between cards
//               const isCenter = offset === 0;

//               return (
//                 <motion.div
//                   key={project.id}
//                   onClick={() => setSelected(project.id)}
//                   className="absolute w-4/5 h-4/5 rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
//                   initial={false}
//                   animate={{
//                     x,
//                     scale: isCenter ? 1 : 0.75,
//                     opacity: isCenter ? 1 : 0.4,
//                     filter: isCenter ? "brightness(100%)" : "brightness(70%)",
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 160,
//                     damping: 22,
//                   }}
//                   style={{ zIndex: 10 - Math.abs(offset) }}
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
//                   />

//                   {/* Overlay for center card */}
//                   {isCenter && (
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-4"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.4, ease: "easeOut" }}
//                     >
//                       <div className="text-center text-white">
//                         <h4 className="text-lg font-semibold">
//                           {project.title}
//                         </h4>
//                         <p className="text-sm text-white/80">
//                           {project.subtitle}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               );
//             })}

//             {/* Navigation Buttons */}
//             {/* <div className="absolute bottom-4 flex gap-6">
//               <button
//                 onClick={handlePrev}
//                 className="p-3 bg-black/60 hover:bg-black/80 text-white rounded-full shadow-lg transition"
//               >
//                 <ChevronLeft className="h-5 w-5" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="p-3 bg-black/60 hover:bg-black/80 text-white rounded-full shadow-lg transition"
//               >
//                 <ChevronRight className="h-5 w-5" />
//               </button>
//             </div> */}

//             {/* Navigation buttons */}
//             <div className="flex justify-center gap-8 mt-10">
//               <button
//                 onClick={handlePrev}
//                 className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md
//               hover:scale-110 hover:shadow-lg transition flex items-center justify-center"
//               >
//                 <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md
//               hover:scale-110 hover:shadow-lg transition flex items-center justify-center"
//               >
//                 <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Project Details - RIGHT side */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           {selectedProject && (
//             <motion.div
//               key={selectedProject.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl
//                         border border-gray-300 dark:border-white/20
//                         text-black dark:text-white"
//             >
//               {/* Project Icon and Title */}
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="p-2 bg-gray-200 dark:bg-white/20 rounded-lg">
//                   {selectedProject.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">
//                     {selectedProject.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-white/80">
//                     {selectedProject.subtitle}
//                   </p>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-gray-700 dark:text-white/90 mb-6 leading-relaxed">
//                 {selectedProject.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="mb-6">
//                 <h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-white/80">
//                   Tech Stack
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedProject.tech.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 text-sm
//                                 bg-gray-100 dark:bg-white/20 backdrop-blur-sm
//                                 text-black dark:text-white
//                                 rounded-full border border-gray-300 dark:border-white/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-4">
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={selectedProject.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-6 py-3
//                             bg-gray-700/80 hover:bg-gray-600
//                             rounded-lg shadow-lg
//                             text-white font-medium transition-colors backdrop-blur-sm"
//                 >
//                   <ExternalLink className="h-4 w-4" />
//                   Live Demo
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={selectedProject.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-6 py-3
//                             bg-gray-700/80 hover:bg-gray-600
//                             rounded-lg shadow-lg
//                             text-white font-medium transition-colors backdrop-blur-sm"
//                 >
//                   <Github className="h-4 w-4" />
//                   GitHub
//                 </motion.a>
//               </div>
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

//// arrow buttons //////////////////

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Github, ExternalLink, ShoppingCart, Smartphone, Globe, ChevronLeft, ChevronRight } from "lucide-react";

// // Enhanced projects with full details
// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     subtitle: "Full-Stack Solution",
//     description:
//       "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/ecommerce",
//     image:
//       "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <ShoppingCart className="h-6 w-6" />,
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     subtitle: "Collaborative Solution",
//     description:
//       "A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.",
//     tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/taskapp",
//     image:
//       "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <Smartphone className="h-6 w-6" />,
//   },
//   {
//     id: 3,
//     title: "Weather Dashboard",
//     subtitle: "Data Visualization",
//     description:
//       "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather data visualization.",
//     tech: ["React", "TypeScript", "Weather API", "Chart.js"],
//     live: "https://your-live-demo.com",
//     github: "https://github.com/your-username/weather",
//     image:
//       "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//     icon: <Globe className="h-6 w-6" />,
//   },
// ];

// const Projects = () => {
//   const [selected, setSelected] = useState(1);
//   const [isHovered, setIsHovered] = useState(false);
//   const selectedIndex = projects.findIndex((p) => p.id === selected);
//   const selectedProject = projects[selectedIndex];

//   const handlePrevious = () => {
//     const currentIndex = projects.findIndex((p) => p.id === selected);
//     const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
//     setSelected(projects[prevIndex].id);
//   };

//   const handleNext = () => {
//     const currentIndex = projects.findIndex((p) => p.id === selected);
//     const nextIndex = (currentIndex + 1) % projects.length;
//     setSelected(projects[nextIndex].id);
//   };

//   // Auto-scroll every 4s (only when not hovered)
//   useEffect(() => {
//     if (isHovered) return;
//     const interval = setInterval(() => {
//       setSelected((prev) => {
//         const currentIndex = projects.findIndex((p) => p.id === prev);
//         const nextIndex = (currentIndex + 1) % projects.length;
//         return projects[nextIndex].id;
//       });
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [isHovered]);

//   return (
//     <section
//       id="projects"
//       className="min-h-screen pt-40 flex items-center justify-center bg-white dark:bg-black"
//     >
//       <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-20">
//         {/* Carousel - LEFT side */}
//         <div className="w-full lg:w-1/2 flex flex-col items-center">
//           <div
//             className="w-full flex justify-center"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <div className="relative w-full max-w-[500px] h-[450px] flex items-center justify-center">
//               {projects.map((project, index) => {
//                 let offset = index - selectedIndex;
//                 const half = Math.floor(projects.length / 2);
//                 if (offset > half) offset -= projects.length;
//                 if (offset < -half) offset += projects.length;

//                 const x = offset * 220; // space between cards
//                 const isCenter = offset === 0;

//                 return (
//                   <motion.div
//                     key={project.id}
//                     onClick={() => setSelected(project.id)}
//                     className="absolute w-4/5 h-4/5 rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
//                     initial={false}
//                     animate={{
//                       x,
//                       scale: isCenter ? 1 : 0.75,
//                       opacity: isCenter ? 1 : 0.4,
//                       filter: isCenter ? "brightness(100%)" : "brightness(70%)",
//                     }}
//                     transition={{ type: "spring", stiffness: 220, damping: 24 }}
//                     style={{ zIndex: 50 - Math.abs(offset) }}
//                   >
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />

//                     {/* Overlay for center card */}
//                     {isCenter && (
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-4"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                       >
//                         <div className="text-center text-white">
//                           <h4 className="text-lg font-semibold">
//                             {project.title}
//                           </h4>
//                           <p className="text-sm text-white/80">
//                             {project.subtitle}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Navigation Arrows below carousel */}
//           <div className="flex items-center justify-center gap-6 mt-6">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={handlePrevious}
//               className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700
//                          text-gray-700 dark:text-gray-300 transition-colors shadow-lg"
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={handleNext}
//               className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700
//                          text-gray-700 dark:text-gray-300 transition-colors shadow-lg"
//             >
//               <ChevronRight className="h-6 w-6" />
//             </motion.button>
//           </div>
//         </div>

//         {/* Project Details - RIGHT side */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left text-black dark:text-white">
//             My Projects
//           </h2>

//           {selectedProject && (
//             <motion.div
//               key={selectedProject.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl
//                          border border-gray-300 dark:border-white/20
//                          text-black dark:text-white"
//             >
//               {/* Project Icon and Title */}
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="p-2 bg-gray-200 dark:bg-white/20 rounded-lg">
//                   {selectedProject.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
//                   <p className="text-gray-600 dark:text-white/80">
//                     {selectedProject.subtitle}
//                   </p>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-gray-700 dark:text-white/90 mb-6 leading-relaxed">
//                 {selectedProject.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="mb-6">
//                 <h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-white/80">
//                   Tech Stack
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedProject.tech.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 text-sm
//                                  bg-gray-100 dark:bg-white/20 backdrop-blur-sm
//                                  text-black dark:text-white
//                                  rounded-full border border-gray-300 dark:border-white/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-4">
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={selectedProject.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-6 py-3
//                              bg-gray-700/80 hover:bg-gray-600
//                              rounded-lg shadow-lg
//                              text-white font-medium transition-colors backdrop-blur-sm"
//                 >
//                   <ExternalLink className="h-4 w-4" />
//                   Live Demo
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   href={selectedProject.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-6 py-3
//                              bg-gray-700/80 hover:bg-gray-600
//                              rounded-lg shadow-lg
//                              text-white font-medium transition-colors backdrop-blur-sm"
//                 >
//                   <Github className="h-4 w-4" />
//                   GitHub
//                 </motion.a>
//               </div>
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
///////////
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ShoppingCart,
  Smartphone,
  Globe,
  ChevronLeft,
  ChevronRight,
  Wallet ,
  Image ,
  MessageCircleMore ,
  TvMinimalPlay 
} from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";
import { CardSpotlight } from "@/components/ui/card-spotlight";

// Enhanced projects with full details and tech colors
const projects = [
  {
    id: 1,
    title: "CashClarity",
    subtitle: "Ai Finance Assistant",
    description:
      "An intelligent AI-powered finance tracking application that helps users manage their finances with smart insights and automation.",
    tech: [
      {
        name: "Next js",
        color: "hover:shadow-cyan-400/50 hover:text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        color: "hover:shadow-green-500/50 hover:text-green-500",
      },
      {
        name: "PostgreSQL",
        color: "hover:shadow-green-400/50 hover:text-green-400",
      },
      {
        name: "Stripe",
        color: "hover:shadow-purple-500/50 hover:text-purple-500",
      },
      {
        name: "Inngest  ",
        color: "hover:shadow-purple-500/50 hover:text-purple-500",
      },
      {
        name: "Clerk ",
        color: "hover:shadow-purple-500/50 hover:text-purple-500",
      },
      {
        name: "Prisma ",
        color: "hover:shadow-purple-500/50 hover:text-purple-500",
      },
    ],
    live: "https://cash-clarity-orpin.vercel.app/",
    github: "https://github.com/Rocky4554/CashClarity",
    image: "images/CashClarity.png",
    icon: <Wallet className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "PicHub",
    subtitle: "AI Image Generation App",
    description:
      "A fullstack AI-powered image generation platform that allows users to create, optimize, and manage images seamlessly.",
    tech: [
      { name: "React", color: "hover:shadow-cyan-400/50 hover:text-cyan-400" },
      {
        name: "Express.js",
        color: "hover:shadow-orange-400/50 hover:text-orange-400",
      },
      {
        name: "Tailwind CSS",
        color: "hover:shadow-sky-400/50 hover:text-sky-400",
      },
      {
        name: "Mongo DB",
        color: "hover:shadow-gray-400/50 hover:text-gray-400",
      },
      {
        name: "ImageKit",
        color: "hover:shadow-gray-400/50 hover:text-gray-400",
      },
      {
        name: "Gemini API",
        color: "hover:shadow-gray-400/50 hover:text-gray-400",
      },
      {
        name: "clerk",
        color: "hover:shadow-gray-400/50 hover:text-gray-400",
      },
    ],
    live: "https://pic-hub-jab2.vercel.app/",
    github: "https://github.com/Rocky4554/PicHub",
    image: "images/PicHub.png",
    icon: <Image className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Connectify",
    subtitle: "Real-time Messaging and Video App",
    description:
      "Instant chat with typing indicators and emoji reactions for dynamic conversations.1-on-1 and group video calls powered by Steam with screen sharing and recording capabilities.",
    tech: [
      { name: "React", color: "hover:shadow-cyan-400/50 hover:text-cyan-400" },
      {
        name: "Express.js",
        color: "hover:shadow-blue-400/50 hover:text-blue-400",
      },
       {
        name: "Mongo DB",
        color: "hover:shadow-yellow-400/50 hover:text-yellow-400",
      },
      {
        name: "Tailwind CSS",
        color: "hover:shadow-yellow-400/50 hover:text-yellow-400",
      },
      {
        name: "Steam API",
        color: "hover:shadow-pink-400/50 hover:text-pink-400",
      },
    ],
    live: "https://streamify-eight-liart.vercel.app/",
    github: "https://github.com/Rocky4554/Connectify",
    image:
      "images/Connectify.png",
    icon: <MessageCircleMore className="h-5 w-5" />,
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const selectedIndex = projects.findIndex((p) => p.id === selected);
  const selectedProject = projects[selectedIndex];

  // Auto-scroll every 4s (only when not hovered)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setSelected((prev) => {
      const currentIndex = projects.findIndex((p) => p.id === prev);
      const nextIndex = (currentIndex + 1) % projects.length;
      return projects[nextIndex].id;
    });
  };

  const handlePrev = () => {
    setSelected((prev) => {
      const currentIndex = projects.findIndex((p) => p.id === prev);
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      return projects[prevIndex].id;
    });
  };

  return (
    <section
      id="projects"
      className="h-screen py-8 sm:py-12 lg:py-16 flex flex-col items-center justify-center bg-white dark:bg-black"
    >
      {/* Title at the top */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-black dark:text-white px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:gap-15 px-4">
        {/* Carousel - LEFT side */}
        <motion.div
          className="w-full lg:w-3/5 flex flex-col items-center relative"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full max-w-[350px] sm:max-w-[400px] h-[250px] sm:h-[300px] flex items-center justify-center mb-4">
            {projects.map((project, index) => {
              let offset = index - selectedIndex;
              const half = Math.floor(projects.length / 2);
              if (offset > half) offset -= projects.length;
              if (offset < -half) offset += projects.length;

              const x = offset * (window.innerWidth < 640 ? 140 : 180); // responsive spacing
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={project.id}
                  onClick={() => setSelected(project.id)}
                  // className="absolute w-4/5 h-full rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
                  className="absolute w-7/5 aspect-[19/9] rounded-lg overflow-hidden shadow-2xl cursor-pointer group outline-2 outline-offset-2 outline-dashed outline-sky-900 dark:outline-white"
                  initial={false}
                  animate={{
                    x,
                    scale: isCenter ? 1 : 0.75,
                    opacity: isCenter ? 1 : 0.4,
                    filter: isCenter ? "brightness(100%)" : "brightness(70%)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 22,
                  }}
                  whileHover={isCenter ? { scale: 1.05 } : {}}
                  style={{ zIndex: 10 - Math.abs(offset) }}
                >
                  {/* <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  /> */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out border-white"
                  />

                  {/* Overlay for center card */}
                  {isCenter && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div className="text-center text-white text-shadow-lg/100">
                        <h4 className="text-sm sm:text-base font-semibold">
                          {project.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-white/80">
                          {project.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md 
               hover:shadow-lg transition flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 dark:text-white" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md 
               hover:shadow-lg transition flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 dark:text-white" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Project Details - RIGHT side */}
        <motion.div
          className="w-full lg:w-2/5"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {selectedProject && (
            <CardSpotlight className="bg-white dark:bg-white/10 rounded-2xl shadow-2xl border border-gray-300 dark:border-white/20 text-black dark:text-white cursor-pointer">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                // className="bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl
                //            border border-gray-300 dark:border-white/20
                //            text-black dark:text-white max-h-[350px] sm:max-h-[400px] lg:max-h-[450px] overflow-hidden"
              >
                {/* Project Icon and Title - Centered */}
                <div className="flex items-center justify-center mb-3 relative z-30">
                  <div className="p-2 bg-gray-200 dark:bg-white/20 rounded-lg mr-3 text-3xl">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">
                      {selectedProject.title}
                    </h3>
                    <p className="text-md sm:text-sm text-gray-600 dark:text-white/80 underline hover:decoration-pink-500">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description - Centered */}
                <p className="text-xs sm:text-sm text-gray-700 dark:text-white/90 mb-3 leading-relaxed text-center px-2 relative z-30">
                  {selectedProject.description}
                </p>

                {/* Tech Stack - Centered */}
                <div className="mb-3 sm:mb-4 relative z-30">
                  <h4 className="text-xs font-semibold mb-2 text-gray-600 dark:text-white/80 text-center">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center px-2">
                    {selectedProject.tech.map((tech, index) => (
                      <motion.span
                        key={index}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                        }}
                        transition={{ duration: 0.2 }}
                        className={`px-2 py-1 text-xs 
                                 bg-gray-100 dark:bg-white/20 backdrop-blur-sm 
                                 text-black dark:text-white 
                                 rounded-full border border-gray-300 dark:border-white/30
                                 cursor-pointer transition-all duration-200 ${
                                   typeof tech === "object" ? tech.color : ""
                                 }`}
                      >
                        {typeof tech === "object" ? tech.name : tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - Centered */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 justify-center relative z-30">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 
                             bg-pink-600/70 hover:bg-pink-500
                             rounded-lg shadow-lg text-xs sm:text-sm font-medium transition-colors backdrop-blur-sm"
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" stroke="white"/>
                    <span className="text-white shadow">Live Demo</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 
                             bg-pink-600/70 hover:bg-pink-500 
                             rounded-lg shadow-lg 
                            text-xs sm:text-sm font-medium transition-colors backdrop-blur-sm"
                  >
                    <Github className="h-3 w-3 sm:h-4 sm:w-4" stroke="white"/>
                    <span className="text-white shadow">Github</span>
                  </motion.a>
                </div>
              </motion.div>
            </CardSpotlight>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
