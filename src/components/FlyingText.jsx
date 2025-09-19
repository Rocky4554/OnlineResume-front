import React from "react";
import { motion } from "framer-motion";

const FlyingText = ({ text = "HAPPY HALLOWEEN :)" }) => {
  // Split text into characters
  const letters = text.split("");

  return (
    // <div className="flex justify-center items-center min-h-screen bg-[rgba(20,5,5,1)] overflow-hidden">
      <motion.div
        className="flex flex-wrap font-extrabold text-white"
        style={{ fontSize: "4rem", fontFamily: "Anton, sans-serif" }}
      >
        {letters.map((letter, i) => {
          // Random initial positions
          const randomX = Math.floor(Math.random() * 800 - 400);
          const randomY = Math.floor(Math.random() * 800 - 400);
          const randomZ = Math.floor(Math.random() * 600 - 300);
          const randomRotate = Math.floor(Math.random() * 360);

          return (
            <motion.span
              key={i}
              initial={{
                opacity: 0,
                x: randomX,
                y: randomY,
                z: randomZ,
                rotate: randomRotate,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                z: 0,
                rotate: 0,
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: [0.36, 0.1, 0.16, 1],
              }}
              className="mx-1"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </motion.div>
  
  );
};

export default FlyingText;
