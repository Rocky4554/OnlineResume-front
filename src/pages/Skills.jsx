
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
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPrisma,
  SiVercel,
  SiStripe,
  SiGoogle,
  SiNetlify,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker
 
} from "react-icons/si";
import { Lock} from "lucide-react";


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
    // {
    //   name: "HTML5",
    //   icon: <SiHtml5 />,
    //   color: "from-orange-500 to-red-600",
    //   acolor: "text-orange-500"
    // },
    // {
    //   name: "CSS3",
    //   icon: <SiCss3 />,
    //   color: "from-blue-500 to-blue-700",
    //   acolor: "text-blue-500"
    // },
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
    { 
      name: "MySQL", 
      icon: <SiMysql />, 
      color: "from-blue-500 to-blue-700",
      acolor: "text-blue-500"
    },
     { 
      name: "Prisma", 
      icon: <SiPrisma />, 
      color: "from-slate-600 to-slate-800 dark:from-slate-300 dark:to-white",
      acolor: "text-slate-600 dark:text-slate-300"
    },
  ],

  "Cloud & Services": [
    { 
      name: "Vercel", 
      icon: <SiVercel />, 
      color: "from-gray-800 to-black dark:from-white dark:to-gray-300",
      acolor: "text-gray-800 dark:text-white"
    },
    { 
      name: "Netlify", 
      icon: <SiNetlify />, 
      color: "from-teal-400 to-cyan-500",
      acolor: "text-teal-400"
    },
    { 
      name: "Google APIs", 
      icon: <SiGoogle />, 
      color: "from-red-500 to-yellow-500",
      acolor: "text-red-500"
    },
    { 
      name: "Stripe", 
      icon: <SiStripe />, 
      color: "from-purple-500 to-indigo-600",
      acolor: "text-purple-500"
    },
    { 
      name: "Clerk", 
      icon: <Lock className="w-10 h-10"/>, 
      color: "from-blue-500 to-purple-600",
      acolor: "text-blue-500"
    },
  ],

  "Tools & Technologies": [
    { 
      name: "Git", 
      icon: <SiGit />, 
      color: "from-orange-500 to-red-600",
      acolor: "text-orange-500"
    },
      { 
      name: "GitHub", 
      icon: <SiGithub />, 
      color: "from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white",
      acolor: "text-gray-700 dark:text-gray-300"
    },
    { 
      name: "Postman", 
      icon: <SiPostman />, 
      color: "from-orange-500 to-orange-700",
      acolor: "text-orange-500"
    },
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



// "use client";
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
//   SiMysql,
//   SiPrisma,
//   SiHtml5,
//   SiCss3,
//   SiVercel,
//   SiNetlify,
//   SiStripe,
//   SiGit,
//   SiGithub,
//   SiPostman,
//   SiVisualstudiocode,
//   SiOpenai,
//   SiGoogle,
// } from "react-icons/si";
// import { Lock, Cloud, Database, Sparkles } from "lucide-react";

// const skills = {
//   Frontend: [
//     { name: "React", icon: <SiReact />, color: "from-cyan-400 to-cyan-600", acolor: "text-cyan-400" },
//     {
//       name: "Next.js",
//       icon: <SiNextdotjs />,
//       color: "from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white",
//       acolor: "text-gray-700 dark:text-gray-200"
//     },
//     {
//       name: "TailwindCSS",
//       icon: <SiTailwindcss />,
//       color: "from-sky-400 to-sky-600",
//       acolor: "text-sky-400"
//     },
//     {
//       name: "JavaScript",
//       icon: <SiJavascript />,
//       color: "from-yellow-400 to-yellow-600",
//       acolor: "text-yellow-400"
//     },
//     {
//       name: "TypeScript",
//       icon: <SiTypescript />,
//       color: "from-blue-400 to-blue-600",
//       acolor: "text-blue-400"
//     },
//   ],
//   Backend: [
//     { name: "Node.js", icon: <SiNodedotjs />, color: "from-green-500 to-green-700", acolor: "text-green-500" },
//     {
//       name: "Express.js",
//       icon: <SiExpress />,
//       color: "from-gray-600 to-gray-800 dark:from-white dark:to-gray-400",
//       acolor: "text-gray-600 dark:text-white"
//     },
//   ],
//   Database: [
//     { name: "MongoDB", icon: <SiMongodb />, color: "from-green-400 to-green-600", acolor: "text-green-400" },
//     { name: "PostgreSQL", icon: <SiPostgresql />, color: "from-sky-500 to-indigo-600", acolor: "text-sky-500" },
//     { name: "MySQL", icon: <SiMysql />, color: "from-blue-500 to-blue-700", acolor: "text-blue-500" },
//     {
//       name: "Prisma",
//       icon: <SiPrisma />,
//       color: "from-slate-600 to-slate-800 dark:from-slate-300 dark:to-white",
//       acolor: "text-slate-600 dark:text-slate-300"
//     },
//   ],
//   "Cloud Services": [
//     { name: "Vercel", icon: <SiVercel />, color: "from-gray-800 to-black dark:from-white dark:to-gray-300", acolor: "text-gray-800 dark:text-white" },
//     { name: "Netlify", icon: <SiNetlify />, color: "from-teal-400 to-cyan-500", acolor: "text-teal-400" },
//     { name: "Google APIs", icon: <SiGoogle />, color: "from-red-500 to-yellow-500", acolor: "text-red-500" },
//     { name: "Stripe", icon: <SiStripe />, color: "from-purple-500 to-indigo-600", acolor: "text-purple-500" },
//     { name: "Clerk", icon: <Lock className="w-10 h-10" />, color: "from-blue-500 to-purple-600", acolor: "text-blue-500" },
//   ],
//   "AI Integration": [
//     { name: "Gemini AI", icon: <Sparkles className="w-10 h-10" />, color: "from-blue-400 via-purple-500 to-pink-500", acolor: "text-blue-400" },
//     { name: "OpenAI", icon: <SiOpenai />, color: "from-emerald-400 to-teal-600", acolor: "text-emerald-400" },
//   ],
//   "Tools & Technologies": [
//     { name: "Git", icon: <SiGit />, color: "from-orange-500 to-red-600", acolor: "text-orange-500" },
//     { name: "GitHub", icon: <SiGithub />, color: "from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white", acolor: "text-gray-700 dark:text-gray-300" },
//     { name: "Postman", icon: <SiPostman />, color: "from-orange-500 to-orange-700", acolor: "text-orange-500" },
//     { name: "VS Code", icon: <SiVisualstudiocode />, color: "from-blue-500 to-blue-700", acolor: "text-blue-500" },
//     { name: "Compass", icon: <Database className="w-10 h-10" />, color: "from-green-400 to-emerald-600", acolor: "text-green-400" },
//     { name: "Docker", icon: <SiDocker />, color: "from-blue-400 to-cyan-500", acolor: "text-blue-400" },
//   ],
// };

// export default function SkillsMerged() {
//   return (
//     <section id="skills" className="py-20 bg-white dark:bg-black relative overflow-hidden">
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
//             Tech Stack
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Technologies and tools I use to build projects
//           </p>
//         </motion.div>

//         <div className="max-w-6xl mx-auto space-y-12">
//           {Object.entries(skills).map(([category, items], catIndex) => (
//             <div key={category.replace(/[^a-zA-Z0-9]/g, "_")}>
//               <motion.h3
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: catIndex * 0.2 }}
//                 viewport={{ once: true }}
//                 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
//               >
//                 {category}
//               </motion.h3>

//               <div className="flex flex-wrap gap-6 justify-center">
//                 {items.map((skill, i) => (
//                   <motion.div
//                     key={`${skill.name}-${i}`}
//                     initial={{ opacity: 0, y: 50, scale: 0.9 }}
//                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{ duration: 0.6, delay: i * 0.1 }}
//                     viewport={{ once: true }}
//                     whileHover={{ y: -8, scale: 1.05 }}
//                     className="group relative w-28 h-28"
//                   >
//                     {/* Card with neon hover effect */}
//                     <div className="relative flex items-center justify-center w-full h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500">
//                       {/* Gradient glow border */}
//                       <div
//                         className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
//                       />
//                       <div className="relative flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-2xl w-full h-full">
//                         <div className={`text-5xl ${skill.acolor}`}>
//                           {skill.icon}
//                         </div>
//                         <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
//                           {skill.name}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Floating particles */}
//                     <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       {[...Array(3)].map((_, j) => (
//                         <motion.div
//                           key={j}
//                           animate={{ y: [-10, -20, -10], x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
//                           transition={{ duration: 2, delay: j * 0.5, repeat: Infinity }}
//                           className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
//                           style={{ left: j * 4, top: j * -2 }}
//                         />
//                       ))}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
