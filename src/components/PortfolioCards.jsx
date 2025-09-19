"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "ReactJs",
    icon: <FaReact className="text-blue-400 text-5xl" />,
    animation: { y: [0, -15, 0] }, // floating up and down
  },
  {
    id: 2,
    name: "Next.js",
    icon: <SiNextdotjs className="text-white text-5xl" />,
    animation: { rotate: [0, 360] }, // spinning
  },
  {
    id: 3,
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-5xl" />,
    animation: { y: [0, 15, 0] }, // floating down and up
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
    animation: { scale: [1, 1.2, 1] }, // pulsing
  },
  // Example new card (Node.js)
//   {
//     id: 5,
//     name: "Node.js",
//     icon: <FaNodeJs className="text-green-600 text-5xl" />,
//     animation: { rotate: [0, -360] }, // reverse spin
//   },
];

const SkillsGrid = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10">
      {skills.map((skill) => (
        <div key={skill.id} className="flex flex-col items-center">
          <span className="text-sm mb-2 px-3 py-1 bg-zinc-800 text-white rounded-full">
            {skill.name}
          </span>
          <motion.div
            animate={skill.animation}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="w-28 h-28 rounded-xl bg-zinc-900 flex items-center justify-center shadow-lg"
          >
            {skill.icon}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
