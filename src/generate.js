// import { createCanvas } from 'canvas';
// import fs from 'fs/promises';
// import path from 'path';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import svg2img from 'svg2img';

// // Import React Icons
// import { FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
// import { SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiTailwindcss, SiNextdotjs, SiExpress } from 'react-icons/si';

// const skills = [
//   { icon: FaReact, name: 'React', color: '#61dafb' },
//   { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
//   { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
//   { icon: FaJs, name: 'JavaScript', color: '#f7df1e' },
//   { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
//   { icon: SiExpress, name: 'Express', color: '#000000' },
//   { icon: FaPython, name: 'Python', color: '#3776ab' },
//   { icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
//   { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
//   { icon: FaGitAlt, name: 'Git', color: '#f05032' },
//   { icon: FaDocker, name: 'Docker', color: '#2496ed' },
//   { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06b6d4' }
// ];

// // Get the directory name and resolve the public path with a fallback
// const __dirname = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([a-zA-Z]):\//, '$1:/'));
// const publicPath = path.resolve(__dirname, '../public/images');
// console.log('Output path:', publicPath);

// // Fallback to hardcoded path if resolution fails
// const fallbackPath = 'C:/Users/Deedar/Desktop/CPP_program/for Production/My Portfolio/portfolio/public/images';
// const finalPath = fs.access(publicPath).then(() => publicPath, () => fallbackPath);

// (async () => {
//   const resolvedPath = await finalPath;
//   console.log('Using path:', resolvedPath);
//   await fs.mkdir(resolvedPath, { recursive: true });

//   for (const skill of skills) {
//     // Render icon to SVG string
//     const svgString = ReactDOMServer.renderToStaticMarkup(
//       React.createElement(skill.icon, { size: 96, style: { color: skill.color, display: 'block' } })
//     );

//     // Convert SVG to PNG buffer using svg2img
//     const buffer = await new Promise((resolve, reject) => {
//       svg2img(svgString, { width: 128, height: 128 }, (error, buffer) => {
//         if (error) reject(error);
//         else resolve(buffer);
//       });
//     });

//     // Save the PNG file
//     const fileName = `${skill.name.toLowerCase().replace(/ /g, '-')}.png`;
//     await fs.writeFile(path.join(resolvedPath, fileName), buffer)
//       .then(() => console.log(`Generated ${fileName}`))
//       .catch((err) => console.error(`Error saving ${fileName}:`, err));
//   }

//   console.log('Icon generation complete!');
// })();


//////////////

import { createCanvas } from 'canvas';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url'; // <-- Import this utility
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import svg2img from 'svg2img';

// React Icons
import {
  FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaAws
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiTailwindcss, SiNextdotjs, SiExpress
} from 'react-icons/si';

const skills = [
  { icon: FaReact, name: 'React', color: '#61dafb' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
  { icon: FaJs, name: 'JavaScript', color: '#f7df1e' },
  { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
  { icon: SiExpress, name: 'Express', color: '#000000' },
  { icon: FaPython, name: 'Python', color: '#3776ab' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
  { icon: FaGitAlt, name: 'Git', color: '#f05032' },
  { icon: FaDocker, name: 'Docker', color: '#2496ed' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06b6d4' }
];

(async () => {
  try {
    // The correct way to get the current script's directory in an ES Module
    const scriptPath = fileURLToPath(import.meta.url);
    const scriptDir = path.dirname(scriptPath);
    
    // Resolve the output path relative to the script's directory
    const resolvedPath = path.resolve(scriptDir, '..', 'public', 'images');
    
    console.log('Attempting to create directory:', resolvedPath);
    await fs.mkdir(resolvedPath, { recursive: true });
    console.log('Directory created or already exists.');

    for (const skill of skills) {
      try {
        const svgString = ReactDOMServer.renderToStaticMarkup(
          React.createElement(skill.icon, { size: 96, style: { color: skill.color, display: 'block' } })
        );

        const buffer = await new Promise((resolve, reject) => {
          svg2img(svgString, { width: 128, height: 128 }, (error, buffer) => {
            if (error) reject(error);
            else resolve(buffer);
          });
        });

        const fileName = `${skill.name.toLowerCase().replace(/ /g, '-')}.png`;
        const filePath = path.join(resolvedPath, fileName);
        
        await fs.writeFile(filePath, buffer);
        console.log(`Successfully generated and saved: ${fileName}`);

      } catch (err) {
        console.error(`Error generating or saving icon for ${skill.name}:`, err);
      }
    }

    console.log('Icon generation complete!');

  } catch (err) {
    console.error('An error occurred during the script execution:', err);
  }
})();