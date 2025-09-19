"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const AnimatedProjectsShowcase = ({ projects, autoPlay = true, interval = 4000 }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const isHovered = useRef(false);

  // Handle auto-scroll
  useEffect(() => {
    if (autoPlay && !isHovered.current) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % projects.length);
      }, interval);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, autoPlay, interval, projects.length]);

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      {/* Project Image */}
      <div
        className="relative w-72 h-72 md:w-80 md:h-80 flex-shrink-0 cursor-pointer"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={projects[current].title}
            src={projects[current].image}
            alt={projects[current].title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </AnimatePresence>
      </div>

      {/* Project Details */}
      <div
        className="max-w-md"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[current].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {projects[current].title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm mt-1">
              {projects[current].tech.join(" • ")}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {projects[current].description}
            </p>

            {/* Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href={projects[current].github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <Github className="h-4 w-4" />
                <span>Code</span>
              </a>
              <a
                href={projects[current].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-0 md:bottom-auto md:top-1/2 flex space-x-4 md:space-x-0 md:flex-col md:space-y-4 md:right-0">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          ←
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default AnimatedProjectsShowcase;
