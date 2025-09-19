// import React from 'react';
// import { motion } from 'framer-motion';

// const Skills = () => {
//   const skills = [
//     {
//       name: "React",
//       level: 95,
//       icon: "⚛️",
//       color: "from-blue-400 to-blue-600"
//     },
//     {
//       name: "JavaScript",
//       level: 90,
//       icon: "🟨",
//       color: "from-yellow-400 to-yellow-600"
//     },
//     {
//       name: "Node.js",
//       level: 85,
//       icon: "🟢",
//       color: "from-green-400 to-green-600"
//     },
//     {
//       name: "TypeScript",
//       level: 80,
//       icon: "🔷",
//       color: "from-blue-500 to-blue-700"
//     },
//     {
//       name: "Python",
//       level: 75,
//       icon: "🐍",
//       color: "from-blue-400 to-yellow-500"
//     },
//     {
//       name: "MongoDB",
//       level: 85,
//       icon: "🍃",
//       color: "from-green-500 to-green-700"
//     },
//     {
//       name: "PostgreSQL",
//       level: 80,
//       icon: "🐘",
//       color: "from-blue-600 to-indigo-600"
//     },
//     {
//       name: "Docker",
//       level: 70,
//       icon: "🐳",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       name: "AWS",
//       level: 75,
//       icon: "☁️",
//       color: "from-orange-400 to-orange-600"
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 opacity-5 dark:opacity-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Skills & Expertise
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Technologies and tools I use to bring ideas to life
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50, scale: 0.9 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="group relative"
//             >
//               {/* Glassmorphism card */}
//               <div className="relative p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500">
//                 {/* Gradient border effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
//                 <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 m-[-1px]">

//                   {/* Skill icon and name */}
//                   <div className="flex items-center space-x-4 mb-4">
//                     <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
//                       {skill.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                         {skill.name}
//                       </h3>
//                       {/* <p className="text-sm text-gray-500 dark:text-gray-400">
//                         {skill.level}% Proficiency
//                       </p> */}
//                     </div>
//                   </div>

//                   {/* Progress bar
//                   <div className="relative">
//                     <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
//                         viewport={{ once: true }}
//                         className={`h-2 bg-gradient-to-r ${skill.color} rounded-full relative`}
//                       >
//                         <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300" />
//                       </motion.div>
//                     </div>
//                   </div> */}

//                   {/* Floating particles effect */}
//                   <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     <div className="relative">
//                       {[...Array(3)].map((_, i) => (
//                         <motion.div
//                           key={i}
//                           animate={{
//                             y: [-10, -20, -10],
//                             x: [0, 5, 0],
//                             opacity: [0.5, 1, 0.5]
//                           }}
//                           transition={{
//                             duration: 2,
//                             delay: i * 0.5,
//                             repeat: Infinity,
//                           }}
//                           className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
//                           style={{
//                             left: i * 4,
//                             top: i * -2
//                           }}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// //////////////////////
// import React from 'react';
// import {
//   FaReact,
//   FaJs,
//   FaNodeJs,
//   FaPython,
//   FaDocker,
//   FaAws
// } from 'react-icons/fa';
// import {
//   SiTypescript,
//   SiMongodb,
//   SiPostgresql
// } from 'react-icons/si';

// const Skills = () => {
//   const skills = [
//     {
//       name: "React",
//       level: 95,
//       icon: FaReact,
//       color: "from-blue-400 to-cyan-400",
//       shadowColor: "shadow-blue-500/25"
//     },
//     {
//       name: "JavaScript",
//       level: 90,
//       icon: FaJs,
//       color: "from-yellow-400 to-orange-400",
//       shadowColor: "shadow-yellow-500/25"
//     },
//     {
//       name: "Node.js",
//       level: 85,
//       icon: FaNodeJs,
//       color: "from-green-400 to-emerald-400",
//       shadowColor: "shadow-green-500/25"
//     },
//     {
//       name: "TypeScript",
//       level: 80,
//       icon: SiTypescript,
//       color: "from-blue-500 to-indigo-500",
//       shadowColor: "shadow-blue-600/25"
//     },
//     {
//       name: "Python",
//       level: 75,
//       icon: FaPython,
//       color: "from-blue-400 to-yellow-400",
//       shadowColor: "shadow-blue-500/25"
//     },
//     {
//       name: "MongoDB",
//       level: 85,
//       icon: SiMongodb,
//       color: "from-green-500 to-green-600",
//       shadowColor: "shadow-green-600/25"
//     },
//     {
//       name: "PostgreSQL",
//       level: 80,
//       icon: SiPostgresql,
//       color: "from-blue-600 to-indigo-700",
//       shadowColor: "shadow-blue-700/25"
//     },
//     {
//       name: "Docker",
//       level: 70,
//       icon: FaDocker,
//       color: "from-blue-500 to-cyan-500",
//       shadowColor: "shadow-cyan-500/25"
//     },
//     {
//       name: "AWS",
//       level: 75,
//       icon: FaAws,
//       color: "from-orange-400 to-red-500",
//       shadowColor: "shadow-orange-500/25"
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
//       {/* Enhanced Background decoration */}
//       <div className="absolute inset-0 opacity-30 dark:opacity-20">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse opacity-60" />
//       </div>

//       <div className="container mx-auto px-6 relative">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
//             Skills & Expertise
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Technologies and tools I use to bring innovative ideas to life
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {skills.map((skill, index) => {
//             const IconComponent = skill.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative transform transition-all duration-500 hover:-translate-y-3"
//               >
//                 {/* Main Card */}
//                 <div className={`
//                   relative aspect-square p-8
//                   bg-white/80 dark:bg-gray-800/80
//                   backdrop-blur-xl
//                   rounded-3xl
//                   border border-white/40 dark:border-gray-700/40
//                   shadow-2xl ${skill.shadowColor}
//                   hover:shadow-3xl hover:${skill.shadowColor.replace('/25', '/40')}
//                   transition-all duration-500
//                   overflow-hidden
//                 `}>

//                   {/* Gradient Glow Effect - Similar to Original */}
//                   <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
//                   <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl m-[1px]" />

//                   {/* Content */}
//                   <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">

//                     {/* Icon Container */}
//                     <div className={`
//                       mb-6 p-4 rounded-2xl
//                       bg-gradient-to-br ${skill.color}
//                       transform group-hover:scale-110 group-hover:rotate-6
//                       transition-all duration-500
//                       shadow-lg
//                     `}>
//                       <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
//                     </div>

//                     {/* Skill Name */}
//                     <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-800 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
//                       {skill.name}
//                     </h3>

//                     {/* Proficiency Level */}
//                     <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
//                       {skill.level}% Proficiency
//                     </div>
//                   </div>

//                   {/* Floating Particles */}
//                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     <div className="relative">
//                       {[...Array(3)].map((_, i) => (
//                         <div
//                           key={i}
//                           className={`absolute w-2 h-2 bg-gradient-to-r ${skill.color} rounded-full animate-bounce`}
//                           style={{
//                             left: i * 8,
//                             top: i * -4,
//                             animationDelay: `${i * 0.3}s`,
//                             animationDuration: '2s'
//                           }}
//                         />
//                       ))}
//                     </div>
//                   </div>

//                   {/* Shine Effect */}
//                   <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
//                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                   </div>
//                 </div>

//                 {/* Shadow Reflection */}
//                 <div className={`
//                   absolute -bottom-2 left-2 right-2 h-8
//                   bg-gradient-to-r ${skill.color}
//                   rounded-3xl blur-xl opacity-0 group-hover:opacity-30
//                   transition-opacity duration-500 z-0
//                 `} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

///////////////////////////////////////////

// import React from 'react';
// import {
//   FaReact,
//   FaJs,
//   FaNodeJs,
//   FaPython,
//   FaDocker,
//   FaAws
// } from 'react-icons/fa';
// import {
//   SiTypescript,
//   SiMongodb,
//   SiPostgresql
// } from 'react-icons/si';

// const Skills = () => {
//   const skills = [
//     {
//       name: "React",
//       level: 95,
//       icon: FaReact,
//       color: "from-blue-400 to-cyan-400",
//       shadowColor: "shadow-blue-500/25"
//     },
//     {
//       name: "JavaScript",
//       level: 90,
//       icon: FaJs,
//       color: "from-yellow-400 to-orange-400",
//       shadowColor: "shadow-yellow-500/25"
//     },
//     {
//       name: "Node.js",
//       level: 85,
//       icon: FaNodeJs,
//       color: "from-green-400 to-emerald-400",
//       shadowColor: "shadow-green-500/25"
//     },
//     {
//       name: "TypeScript",
//       level: 80,
//       icon: SiTypescript,
//       color: "from-blue-500 to-indigo-500",
//       shadowColor: "shadow-blue-600/25"
//     },
//     {
//       name: "Python",
//       level: 75,
//       icon: FaPython,
//       color: "from-blue-400 to-yellow-400",
//       shadowColor: "shadow-blue-500/25"
//     },
//     {
//       name: "MongoDB",
//       level: 85,
//       icon: SiMongodb,
//       color: "from-green-500 to-green-600",
//       shadowColor: "shadow-green-600/25"
//     },
//     {
//       name: "PostgreSQL",
//       level: 80,
//       icon: SiPostgresql,
//       color: "from-blue-600 to-indigo-700",
//       shadowColor: "shadow-blue-700/25"
//     },
//     {
//       name: "Docker",
//       level: 70,
//       icon: FaDocker,
//       color: "from-blue-500 to-cyan-500",
//       shadowColor: "shadow-cyan-500/25"
//     },
//     {
//       name: "AWS",
//       level: 75,
//       icon: FaAws,
//       color: "from-orange-400 to-red-500",
//       shadowColor: "shadow-orange-500/25"
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
//       {/* Enhanced Background decoration */}
//       <div className="absolute inset-0 opacity-30 dark:opacity-20">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse opacity-60" />
//       </div>

//       <div className="container mx-auto px-6 relative">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
//             Skills & Expertise
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Technologies and tools I use to bring innovative ideas to life
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {skills.map((skill, index) => {
//             const IconComponent = skill.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative transform transition-all duration-500 hover:-translate-y-3"
//               >
//                 {/* Main Card */}
//                 <div className={`
//                   relative aspect-square p-8
//                   bg-white/80 dark:bg-gray-800/80
//                   backdrop-blur-xl
//                   rounded-3xl
//                   border border-white/40 dark:border-gray-700/40
//                   shadow-2xl ${skill.shadowColor}
//                   hover:shadow-3xl hover:${skill.shadowColor.replace('/25', '/40')}
//                   transition-all duration-500
//                   overflow-hidden
//                 `}>

//                   {/* Gradient Glow Effect - Similar to Original */}
//                   <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
//                   <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl m-[1px]" />

//                   {/* Content */}
//                   <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">

//                     {/* Icon Container */}
//                     <div className={`
//                       mb-6 p-4 rounded-2xl
//                       bg-gradient-to-br ${skill.color}
//                       transform group-hover:scale-110 group-hover:rotate-6
//                       transition-all duration-500
//                       shadow-lg
//                     `}>
//                       <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
//                     </div>

//                     {/* Skill Name */}
//                     <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-800 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
//                       {skill.name}
//                     </h3>

//                     {/* Proficiency Level */}
//                     <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
//                       {skill.level}% Proficiency
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

//////////////////////////

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import {
//   FaReact,
//   FaJs,
//   FaNodeJs,
//   FaPython,
//   FaDocker,
//   FaAws
// } from 'react-icons/fa';
// import {
//   SiTypescript,
//   SiMongodb,
//   SiPostgresql
// } from 'react-icons/si';

// const Skills = () => {
//   const containerRef = useRef(null);
//   const sceneRef = useRef(null);

//   const skills = [
//     {
//       name: "React",
//       level: 95,
//       icon: "⚛️",
//       color: "from-blue-400 to-cyan-400",
//       bgColor: "#3b82f6"
//     },
//     {
//       name: "JavaScript",
//       level: 90,
//       icon: "JS",
//       color: "from-yellow-400 to-orange-400",
//       bgColor: "#f59e0b"
//     },
//     {
//       name: "Node.js",
//       level: 85,
//       icon: "🟢",
//       color: "from-green-400 to-emerald-400",
//       bgColor: "#10b981"
//     },
//     {
//       name: "TypeScript",
//       level: 80,
//       icon: "TS",
//       color: "from-blue-500 to-indigo-500",
//       bgColor: "#3b82f6"
//     },
//     {
//       name: "Python",
//       level: 75,
//       icon: "🐍",
//       color: "from-blue-400 to-yellow-400",
//       bgColor: "#3b82f6"
//     },
//     {
//       name: "MongoDB",
//       level: 85,
//       icon: "🍃",
//       color: "from-green-500 to-green-600",
//       bgColor: "#059669"
//     },
//     {
//       name: "PostgreSQL",
//       level: 80,
//       icon: "🐘",
//       color: "from-blue-600 to-indigo-700",
//       bgColor: "#2563eb"
//     },
//     {
//       name: "Docker",
//       level: 70,
//       icon: "🐳",
//       color: "from-blue-500 to-cyan-500",
//       bgColor: "#0ea5e9"
//     },
//     {
//       name: "AWS",
//       level: 75,
//       icon: "☁️",
//       color: "from-orange-400 to-red-500",
//       bgColor: "#f97316"
//     }
//   ];

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

//     renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
//     renderer.setClearColor(0x000000, 0);
//     containerRef.current.appendChild(renderer.domElement);

//     // Create skill cards
//     const skillMeshes = [];
//     const radius = 6;
//     let scrollPosition = 0;
//     let targetScroll = 0;
//     let isMouseDown = false;
//     let lastMouseX = 0;

//     // Create canvas texture for each skill
//     const createSkillTexture = (skill) => {
//       const canvas = document.createElement('canvas');
//       canvas.width = 512;
//       canvas.height = 640;
//       const ctx = canvas.getContext('2d');

//       // Background gradient
//       const gradient = ctx.createLinearGradient(0, 0, 0, 640);
//       gradient.addColorStop(0, skill.bgColor + '90');
//       gradient.addColorStop(1, skill.bgColor + 'FF');
//       ctx.fillStyle = gradient;
//       ctx.roundRect(20, 20, 472, 600, 30);
//       ctx.fill();

//       // Glass effect overlay
//       const glassGradient = ctx.createLinearGradient(0, 0, 0, 640);
//       glassGradient.addColorStop(0, 'rgba(255,255,255,0.3)');
//       glassGradient.addColorStop(1, 'rgba(255,255,255,0.1)');
//       ctx.fillStyle = glassGradient;
//       ctx.roundRect(20, 20, 472, 600, 30);
//       ctx.fill();

//       // Icon
//       ctx.font = 'bold 120px Arial';
//       ctx.textAlign = 'center';
//       ctx.fillStyle = 'white';
//       ctx.fillText(skill.icon, 256, 200);

//       // Skill name
//       ctx.font = 'bold 48px Arial';
//       ctx.fillStyle = 'white';
//       ctx.fillText(skill.name, 256, 320);

//       // Level
//       ctx.font = '32px Arial';
//       ctx.fillStyle = 'rgba(255,255,255,0.9)';
//       ctx.fillText(`${skill.level}% Proficiency`, 256, 380);

//       // Progress bar background
//       ctx.fillStyle = 'rgba(255,255,255,0.3)';
//       ctx.roundRect(80, 420, 352, 16, 8);
//       ctx.fill();

//       // Progress bar fill
//       const progressWidth = (skill.level / 100) * 352;
//       ctx.fillStyle = 'white';
//       ctx.roundRect(80, 420, progressWidth, 16, 8);
//       ctx.fill();

//       // Border
//       ctx.strokeStyle = 'rgba(255,255,255,0.5)';
//       ctx.lineWidth = 4;
//       ctx.roundRect(20, 20, 472, 600, 30);
//       ctx.stroke();

//       return new THREE.CanvasTexture(canvas);
//     };

//     // Create meshes for each skill
//     skills.forEach((skill, index) => {
//       const geometry = new THREE.PlaneGeometry(3, 3.75, 32, 32);
//       const texture = createSkillTexture(skill);
//       const material = new THREE.MeshBasicMaterial({
//         map: texture,
//         transparent: true,
//         side: THREE.DoubleSide
//       });

//       const mesh = new THREE.Mesh(geometry, material);

//       // Position cards in a circle
//       const angle = (index / skills.length) * Math.PI * 2;
//       mesh.userData = {
//         originalAngle: angle,
//         index: index,
//         skill: skill
//       };

//       // Add wave animation to geometry
//       const positions = geometry.attributes.position;
//       const originalPositions = positions.array.slice();
//       mesh.userData.originalPositions = originalPositions;

//       scene.add(mesh);
//       skillMeshes.push(mesh);
//     });

//     // Position camera
//     camera.position.set(0, 2, 8);
//     camera.lookAt(0, 0, 0);

//     // Mouse/touch interaction
//     const handleMouseDown = (e) => {
//       isMouseDown = true;
//       lastMouseX = e.clientX || (e.touches && e.touches[0].clientX);
//     };

//     const handleMouseMove = (e) => {
//       if (!isMouseDown) return;
//       const currentX = e.clientX || (e.touches && e.touches[0].clientX);
//       const deltaX = (currentX - lastMouseX) * 0.01;
//       targetScroll += deltaX;
//       lastMouseX = currentX;
//     };

//     const handleMouseUp = () => {
//       isMouseDown = false;
//     };

//     const handleWheel = (e) => {
//       targetScroll += e.deltaY * 0.001;
//     };

//     // Add event listeners
//     containerRef.current.addEventListener('mousedown', handleMouseDown);
//     containerRef.current.addEventListener('mousemove', handleMouseMove);
//     containerRef.current.addEventListener('mouseup', handleMouseUp);
//     containerRef.current.addEventListener('wheel', handleWheel);

//     containerRef.current.addEventListener('touchstart', handleMouseDown);
//     containerRef.current.addEventListener('touchmove', handleMouseMove);
//     containerRef.current.addEventListener('touchend', handleMouseUp);

//     // Animation loop
//     let time = 0;
//     const animate = () => {
//       time += 0.01;

//       // Smooth scroll interpolation
//       scrollPosition += (targetScroll - scrollPosition) * 0.1;

//       skillMeshes.forEach((mesh, index) => {
//         const angle = mesh.userData.originalAngle + scrollPosition;

//         // Circular positioning
//         mesh.position.x = Math.cos(angle) * radius;
//         mesh.position.z = Math.sin(angle) * radius;

//         // Vertical wave motion
//         mesh.position.y = Math.sin(time * 2 + index * 0.5) * 0.3;

//         // Face camera
//         mesh.lookAt(camera.position);

//         // Scale based on distance from center view
//         const distanceFromCenter = Math.abs(angle % (Math.PI * 2) - Math.PI);
//         const scale = 1 - distanceFromCenter * 0.2;
//         mesh.scale.setScalar(Math.max(0.6, scale));

//         // Wave effect on geometry
//         const positions = mesh.geometry.attributes.position;
//         const originalPositions = mesh.userData.originalPositions;

//         for (let i = 0; i < positions.count; i++) {
//           const x = originalPositions[i * 3];
//           const y = originalPositions[i * 3 + 1];

//           positions.array[i * 3 + 2] = Math.sin(x * 2 + time * 3) * 0.1 +
//                                        Math.cos(y * 1.5 + time * 2) * 0.1;
//         }
//         positions.needsUpdate = true;
//       });

//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       if (containerRef.current) {
//         const width = containerRef.current.clientWidth;
//         const height = containerRef.current.clientHeight;

//         camera.aspect = width / height;
//         camera.updateProjectionMatrix();
//         renderer.setSize(width, height);
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     // Store references for cleanup
//     sceneRef.current = {
//       scene,
//       camera,
//       renderer,
//       skillMeshes,
//       cleanup: () => {
//         window.removeEventListener('resize', handleResize);
//         if (containerRef.current) {
//           containerRef.current.removeEventListener('mousedown', handleMouseDown);
//           containerRef.current.removeEventListener('mousemove', handleMouseMove);
//           containerRef.current.removeEventListener('mouseup', handleMouseUp);
//           containerRef.current.removeEventListener('wheel', handleWheel);
//           containerRef.current.removeEventListener('touchstart', handleMouseDown);
//           containerRef.current.removeEventListener('touchmove', handleMouseMove);
//           containerRef.current.removeEventListener('touchend', handleMouseUp);

//           if (renderer.domElement.parentNode) {
//             renderer.domElement.parentNode.removeChild(renderer.domElement);
//           }
//         }
//         renderer.dispose();
//       }
//     };

//     return () => {
//       if (sceneRef.current) {
//         sceneRef.current.cleanup();
//       }
//     };
//   }, []);

//   return (
//     <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 opacity-30 dark:opacity-20">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse opacity-60" />
//       </div>

//       <div className="container mx-auto px-6 relative">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
//             Skills & Expertise
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Interactive 3D gallery showcasing my technical skills and expertise
//           </p>
//         </div>

//         {/* 3D Gallery Container */}
//         <div className="relative w-full h-[600px] mx-auto mb-8">
//           <div
//             ref={containerRef}
//             className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/10 to-purple-900/10 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm border border-white/10 dark:border-gray-700/20 shadow-2xl cursor-grab active:cursor-grabbing"
//           />

//           {/* Overlay UI */}
//           <div className="absolute top-4 left-4 bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-xl p-4 border border-white/20 dark:border-gray-700/20">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Interactive Skills Gallery</h3>
//             <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
//               <p>🖱️ Click and drag to rotate</p>
//               <p>🖲️ Scroll to navigate</p>
//               <p>📱 Touch and swipe on mobile</p>
//             </div>
//           </div>

//           {/* Bottom instruction */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-full px-6 py-2 border border-white/20 dark:border-gray-700/20">
//             <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
//               Drag or scroll to explore all {skills.length} skills
//             </p>
//           </div>
//         </div>

//         {/* Skills List for Reference */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
//           {skills.map((skill, index) => (
//             <div key={index} className="text-center p-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-xl border border-white/20 dark:border-gray-700/20">
//               <div className="text-2xl mb-2">{skill.icon}</div>
//               <h4 className="text-sm font-semibold text-gray-800 dark:text-white">{skill.name}</h4>
//               <p className="text-xs text-gray-600 dark:text-gray-400">{skill.level}%</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

//////////////////////////////////////////////////////

// 📁 pages/SkillsPage.jsx
// import React from 'react';
// import SkillsCircularGallery from '../components/ui/circulargallery';

// Import icons you want to use
// import {
//   FaReact,
//   FaNodeJs,
//   FaPython,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaGitAlt,
//   FaDocker,
//   FaAws
// } from 'react-icons/fa';
// import {
//   SiTypescript,
//   SiMongodb,
//   SiPostgresql,
//   SiGraphql,
//   SiTailwindcss,
//   SiNextdotjs,
//   SiExpress
// } from 'react-icons/si';

// const SkillsPage = () => {
//   // Your skills - add/remove as needed
//   const mySkills = [
//     { icon: FaReact, name: 'React', color: '#61dafb' },
//     { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
//     { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
//     { icon: FaJs, name: 'JavaScript', color: '#f7df1e' },
//     { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
//     { icon: SiExpress, name: 'Express', color: '#000000' },
//     { icon: FaPython, name: 'Python', color: '#3776ab' },
//     { icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
//     { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
//     { icon: FaGitAlt, name: 'Git', color: '#f05032' },
//     { icon: FaDocker, name: 'Docker', color: '#2496ed' },
//     { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06b6d4' }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 p-8">

//       <h1 className="text-4xl font-bold text-white text-center mb-8">My Skills</h1>
//       <SkillsCircularGallery skills={mySkills} />
//     </div>
//   );
// };

// export default SkillsPage;

///////////// workind circular library ////////////////

// // import CircularGallery from "../components/ui/circulargallery";
// import CircularGallery from "../components/newCircularGallery";
// import {HoverImageLinks} from "../components/HoverImageLinks";
// import SkillsApp from "../components/Gallery/SkillsApp"

// const SkillsPage = () => {
//   // const mySkills = [
//   //   { iconPath: '/images/react.png', name: 'React', color: '#61dafb' },
//   //   { iconPath: '/images/next.js.png', name: 'Next.js', color: '#000000' },
//   //   { iconPath: '/images/typescript.png', name: 'TypeScript', color: '#3178c6' },
//   //   { iconPath: '/images/javascript.png', name: 'JavaScript', color: '#f7df1e' },
//   //   { iconPath: '/images/node.js.png', name: 'Node.js', color: '#339933' },
//   //   { iconPath: '/images/express.png', name: 'Express', color: '#000000' },
//   //   { iconPath: '/images/python.png', name: 'Python', color: '#3776ab' },
//   //   { iconPath: '/images/mongodb.png', name: 'MongoDB', color: '#47a248' },
//   //   { iconPath: '/images/postgresql.png', name: 'PostgreSQL', color: '#336791' },
//   //   { iconPath: '/images/git.png', name: 'Git', color: '#f05032' },
//   //   { iconPath: '/images/docker.png', name: 'Docker', color: '#2496ed' },
//   //   { iconPath: '/images/tailwind-css.png', name: 'Tailwind CSS', color: '#06b6d4' }
//   // ];

//   return (
//     <>
//     {/* <div className="min-h-screen bg-gray-900 p-8">
//        <h1 className="text-4xl font-bold text-white text-center mb-8">My Skills</h1>
//        <CircularGallery skills={mySkills} />
//      </div> */}

//     {/* <div style={{ height: "600px", position: "relative" }}>
//       <CircularGallery
//         bend={3}
//         textColor="#ffffff"
//         borderRadius={0.05}
//         scrollEase={0.02}
//       />
//     </div>
//     <HoverImageLinks/> */}
//     <div className="w-full h-screen">
//       <SkillsApp />
//     </div>
//     </>

//   );
// };

// export default SkillsPage;

/////////////////////////

// "use client";
// import { motion } from "framer-motion";
// import {
//   SiReact, // ✅ React
//   SiNextdotjs, // ✅ Next.js
//   SiTailwindcss, // ✅ Tailwind CSS
//   SiNodedotjs, // ✅ Node.js
//   SiExpress, // ✅ Express
//   SiMongodb, // ✅ MongoDB
//   SiPostgresql, // ✅ PostgreSQL
//   // SiAmazonaws,    // ✅ AWS
//   SiDocker, // ✅ Docker
//   SiJavascript, // ✅ JavaScript
//   SiTypescript, // ✅ TypeScript
// } from "react-icons/si";

// const skills = {
//   Frontend: [
//     { name: "React", icon: <SiReact />, color: "text-cyan-400" },
//     {
//       name: "Next.js",
//       icon: <SiNextdotjs />,
//       color: "text-black dark:text-white",
//     },
//     { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-sky-400" },
//     { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
//     { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
//   ],
//   Backend: [
//     { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
//     {
//       name: "Express.js",
//       icon: <SiExpress />,
//       color: "text-gray-700 dark:text-white",
//     },
//   ],
//   Database: [
//     { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
//     { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-sky-600" },
//   ],
//   Others: [
//     // { name: "AWS", icon: <SiAmazonaws />, color: "text-orange-500" },
//     { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
//   ],
// };

// export default function SkillsGrid() {
//   return (
//     <div className="w-full min-h-screen py-16 px-6 bg-white dark:bg-black transition-colors">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
//         Tech Stack
//       </h2>

//       <div className="max-w-6xl mx-auto space-y-12">
//         {Object.entries(skills).map(([category, items]) => (
//           <div key={category}>
//             <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
//               {category}
//             </h3>
//             <div className="flex flex-wrap gap-8 justify-center">
//               {items.map((skill) => (
//                 <motion.div
//                   key={skill.name}
//                   whileHover={{ scale: 1.1 }}
//                   className="group relative flex items-center justify-center w-28 h-28 rounded-2xl
//                  bg-gray-100 dark:bg-gray-900 shadow-md cursor-pointer
//                  transition-all duration-300"
//                 >
//                   <div
//                     className={`text-5xl ${skill.color} group-hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.8)]`}
//                   >
//                     {skill.icon}
//                   </div>

//                   {/* Tooltip */}
//                   <span
//                     className="absolute -bottom-6 opacity-0 group-hover:opacity-100 text-sm 
//                    bg-black text-white dark:bg-white dark:text-black px-2 py-1 
//                    rounded-md transition-opacity"
//                   >
//                     {skill.name}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

////////////////

// import { motion } from "framer-motion";
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiPostgresql,

//   SiDocker,
//   SiJavascript,
//   SiTypescript,
// } from "react-icons/si";

// const categories = {
//   Frontend: [
//     { name: "React", icon: SiReact, color: "#61dafb" },
//     { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
//     { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
//     { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
//     { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
//   ],
//   Backend: [
//     { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
//     { name: "Express", icon: SiExpress, color: "#000000" },
//   ],
//   Database: [
//     { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
//     { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
//   ],
//   Others: [

//     { name: "Docker", icon: SiDocker, color: "#2496ed" },
//   ],
// };

// const SkillCard = ({ Icon, name, color }) => (
//   <motion.div
//     whileHover={{ scale: 1.1, boxShadow: `0px 0px 20px ${color}` }}
//     className="group flex flex-col items-center justify-center w-28 h-28 bg-neutral-900 dark:bg-neutral-800 rounded-xl transition-all duration-300"
//   >
//     <Icon className="text-5xl mb-2" style={{ color }} />
//     <p className="text-sm text-center mt-1">{name}</p>
//   </motion.div>
// );

// export default function Skills() {
//   return (
//      <div className="w-full min-h-screen py-16 px-6 bg-white dark:bg-black transition-colors">
//       <h1 className="text-3xl font-bold text-center mb-10">Tech Stack</h1>

//       {Object.entries(categories).map(([category, skills]) => (
//         <div key={category} className="mb-12">
//           <h2 className="text-xl font-semibold mb-6 text-center">{category}</h2>
//           <div
//             className={`grid gap-6 ${
//               skills.length <= 3
//                 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center"
//                 : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
//             }`}
//           >
//             {skills.map(({ name, icon: Icon, color }) => (
//               <SkillCard key={name} Icon={Icon} name={name} color={color} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

///////////////////////

"use client";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const skills = {
  Frontend: [
    { 
      name: "React", 
      icon: <SiReact />, 
      color: "from-cyan-400 to-cyan-600", 
      acolor: "text-cyan-400" 
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white",
      acolor: "text-gray-700 dark:text-gray-200"
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss />,
      color: "from-sky-400 to-sky-600",
      acolor: "text-sky-400"
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "from-yellow-400 to-yellow-600",
      acolor: "text-yellow-400"
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "from-blue-400 to-blue-600",
      acolor: "text-blue-400"
    },
  ],
  Backend: [
    { 
      name: "Node.js", 
      icon: <SiNodedotjs />, 
      color: "from-green-500 to-green-700",
      acolor: "text-green-500"
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "from-gray-600 to-gray-800 dark:from-white dark:to-gray-400",
      acolor: "text-gray-600 dark:text-white"
    },
  ],
  Database: [
    { 
      name: "MongoDB", 
      icon: <SiMongodb />, 
      color: "from-green-400 to-green-600",
      acolor: "text-green-400"
    },
    { 
      name: "PostgreSQL", 
      icon: <SiPostgresql />, 
      color: "from-sky-500 to-indigo-600",
      acolor: "text-sky-500"
    },
  ],
  Others: [
    { 
      name: "Docker", 
      icon: <SiDocker />, 
      color: "from-blue-400 to-cyan-500",
      acolor: "text-blue-400"
    },
  ],
};

export default function SkillsMerged() {
  return (
    <section
      id="skills"
      // className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      className="py-20 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build projects
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <div key={category}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.2 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
              >
                {category}
              </motion.h3>

              <div className="flex flex-wrap gap-6 justify-center">
                {items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group relative w-28 h-28"
                  >
                    {/* Card with neon hover effect */}
                    <div className="relative flex items-center justify-center w-full h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                      {/* Gradient glow border */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
                      />
                      <div className="relative flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-2xl w-full h-full">
                        <div className={`text-5xl ${skill.acolor}  `}>
                          {skill.icon}
                        </div>
                        <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(3)].map((_, j) => (
                        <motion.div
                          key={j}
                          animate={{
                            y: [-10, -20, -10],
                            x: [0, 5, 0],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            delay: j * 0.5,
                            repeat: Infinity,
                          }}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
                          style={{
                            left: j * 4,
                            top: j * -2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

