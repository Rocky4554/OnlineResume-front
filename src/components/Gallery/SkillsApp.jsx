"use client";
import { useEffect, useRef } from "react";
import { Renderer, Camera, Transform } from "ogl";
import SkillMedia from "./SkillMedia";

const skills = [
  { name: "React", image: "/skills/react.png" },
  { name: "Node.js", image: "/skills/node.png" },
  { name: "MongoDB", image: "/skills/mongo.png" },
  { name: "AWS", image: "/skills/aws.png" },
];

export default function SkillsApp() {
  const canvasRef = useRef();

  useEffect(() => {
    const renderer = new Renderer({ dpr: 2, alpha: true });
    const gl = renderer.gl;
    canvasRef.current.appendChild(gl.canvas);

    const camera = new Camera(gl, { fov: 35 });
    camera.position.z = 8;

    const scene = new Transform();

    // Create skill planes
    skills.forEach((skill, i) => {
      const media = new SkillMedia({ gl, skill });
      media.plane.setParent(scene);
      media.plane.position.x = i * 3 - (skills.length * 1.5);
    });

    function update() {
      requestAnimationFrame(update);
      renderer.render({ scene, camera });
    }
    update();
  }, []);

  return <div ref={canvasRef} className="w-full h-screen bg-black" />;
}
