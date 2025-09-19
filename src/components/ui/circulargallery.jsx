// import {
//   Camera,
//   Mesh,
//   Plane,
//   Program,
//   Renderer,
//   Texture,
//   Transform,
// } from "ogl";
// import { useEffect, useRef } from "react";

// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// }

// function lerp(p1, p2, t) {
//   return p1 + (p2 - p1) * t;
// }

// function autoBind(instance) {
//   const proto = Object.getPrototypeOf(instance);
//   Object.getOwnPropertyNames(proto).forEach((key) => {
//     if (key !== "constructor" && typeof instance[key] === "function") {
//       instance[key] = instance[key].bind(instance);
//     }
//   });
// }

// function createTextTexture(
//   gl,
//   text,
//   font = "bold 30px monospace",
//   color = "black"
// ) {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   context.font = font;
//   const metrics = context.measureText(text);
//   const textWidth = Math.ceil(metrics.width);
//   const textHeight = Math.ceil(parseInt(font, 10) * 1.2);
//   canvas.width = textWidth + 20;
//   canvas.height = textHeight + 20;
//   context.font = font;
//   context.fillStyle = color;
//   context.textBaseline = "middle";
//   context.textAlign = "center";
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.fillText(text, canvas.width / 2, canvas.height / 2);
//   const texture = new Texture(gl, { generateMipmaps: false });
//   texture.image = canvas;
//   return { texture, width: canvas.width, height: canvas.height };
// }

// class Title {
//   constructor({
//     gl,
//     plane,
//     renderer,
//     text,
//     textColor = "#545050",
//     font = "30px sans-serif",
//   }) {
//     autoBind(this);
//     this.gl = gl;
//     this.plane = plane;
//     this.renderer = renderer;
//     this.text = text;
//     this.textColor = textColor;
//     this.font = font;
//     this.createMesh();
//   }
//   createMesh() {
//     const { texture, width, height } = createTextTexture(
//       this.gl,
//       this.text,
//       this.font,
//       this.textColor
//     );
//     const geometry = new Plane(this.gl);
//     const program = new Program(this.gl, {
//       vertex: `
//         attribute vec3 position;
//         attribute vec2 uv;
//         uniform mat4 modelViewMatrix;
//         uniform mat4 projectionMatrix;
//         varying vec2 vUv;
//         void main() {
//           vUv = uv;
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//         }
//       `,
//       fragment: `
//         precision highp float;
//         uniform sampler2D tMap;
//         varying vec2 vUv;
//         void main() {
//           vec4 color = texture2D(tMap, vUv);
//           if (color.a < 0.1) discard;
//           gl_FragColor = color;
//         }
//       `,
//       uniforms: { tMap: { value: texture } },
//       transparent: true,
//     });
//     this.mesh = new Mesh(this.gl, { geometry, program });
//     const aspect = width / height;
//     const textHeight = this.plane.scale.y * 0.15;
//     const textWidth = textHeight * aspect;
//     this.mesh.scale.set(textWidth, textHeight, 1);
//     this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.05;
//     this.mesh.setParent(this.plane);
//   }
// }

// class Media {
//   constructor({
//     geometry,
//     gl,
//     image,
//     index,
//     length,
//     renderer,
//     scene,
//     screen,
//     text,
//     viewport,
//     bend,
//     textColor,
//     borderRadius = 0,
//     font,
//   }) {
//     this.extra = 0;
//     this.geometry = geometry;
//     this.gl = gl;
//     this.image = image;
//     this.index = index;
//     this.length = length;
//     this.renderer = renderer;
//     this.scene = scene;
//     this.screen = screen;
//     this.text = text;
//     this.viewport = viewport;
//     this.bend = bend;
//     this.textColor = textColor;
//     this.borderRadius = borderRadius;
//     this.font = font;
//     this.createShader();
//     this.createMesh();
//     this.createTitle();
//     this.onResize();
//   }
//   createShader() {
//     const texture = new Texture(this.gl, {
//       generateMipmaps: true,
//     });
//     this.program = new Program(this.gl, {
//       depthTest: false,
//       depthWrite: false,
//       vertex: `
//         precision highp float;
//         attribute vec3 position;
//         attribute vec2 uv;
//         uniform mat4 modelViewMatrix;
//         uniform mat4 projectionMatrix;
//         uniform float uTime;
//         uniform float uSpeed;
//         varying vec2 vUv;
//         void main() {
//           vUv = uv;
//           vec3 p = position;
//           p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
//         }
//       `,
//       fragment: `
//         precision highp float;
//         uniform vec2 uImageSizes;
//         uniform vec2 uPlaneSizes;
//         uniform sampler2D tMap;
//         uniform float uBorderRadius;
//         varying vec2 vUv;
        
//         float roundedBoxSDF(vec2 p, vec2 b, float r) {
//           vec2 d = abs(p) - b;
//           return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
//         }
        
//         void main() {
//           vec2 ratio = vec2(
//             min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
//             min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
//           );
//           vec2 uv = vec2(
//             vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
//             vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
//           );
//           vec4 color = texture2D(tMap, uv);
          
//           float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
//           // Smooth antialiasing for edges
//           float edgeSmooth = 0.002;
//           float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
//           gl_FragColor = vec4(color.rgb, alpha);
//         }
//       `,
//       uniforms: {
//         tMap: { value: texture },
//         uPlaneSizes: { value: [0, 0] },
//         uImageSizes: { value: [0, 0] },
//         uSpeed: { value: 0 },
//         uTime: { value: 100 * Math.random() },
//         uBorderRadius: { value: this.borderRadius },
//       },
//       transparent: true,
//     });
//     const img = new Image();
//     img.crossOrigin = "anonymous";
//     img.src = this.image;
//     img.onload = () => {
//       texture.image = img;
//       this.program.uniforms.uImageSizes.value = [
//         img.naturalWidth,
//         img.naturalHeight,
//       ];
//     };
//   }
//   createMesh() {
//     this.plane = new Mesh(this.gl, {
//       geometry: this.geometry,
//       program: this.program,
//     });
//     this.plane.setParent(this.scene);
//   }
//   createTitle() {
//     this.title = new Title({
//       gl: this.gl,
//       plane: this.plane,
//       renderer: this.renderer,
//       text: this.text,
//       textColor: this.textColor,
//       fontFamily: this.font,
//     });
//   }
//   update(scroll, direction) {
//     this.plane.position.x = this.x - scroll.current - this.extra;

//     const x = this.plane.position.x;
//     const H = this.viewport.width / 2;

//     if (this.bend === 0) {
//       this.plane.position.y = 0;
//       this.plane.rotation.z = 0;
//     } else {
//       const B_abs = Math.abs(this.bend);
//       const R = (H * H + B_abs * B_abs) / (2 * B_abs);
//       const effectiveX = Math.min(Math.abs(x), H);

//       const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
//       if (this.bend > 0) {
//         this.plane.position.y = -arc;
//         this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
//       } else {
//         this.plane.position.y = arc;
//         this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
//       }
//     }

//     this.speed = scroll.current - scroll.last;
//     this.program.uniforms.uTime.value += 0.04;
//     this.program.uniforms.uSpeed.value = this.speed;

//     const planeOffset = this.plane.scale.x / 2;
//     const viewportOffset = this.viewport.width / 2;
//     this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
//     this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
//     if (direction === "right" && this.isBefore) {
//       this.extra -= this.widthTotal;
//       this.isBefore = this.isAfter = false;
//     }
//     if (direction === "left" && this.isAfter) {
//       this.extra += this.widthTotal;
//       this.isBefore = this.isAfter = false;
//     }
//   }
//   onResize({ screen, viewport } = {}) {
//     if (screen) this.screen = screen;
//     if (viewport) {
//       this.viewport = viewport;
//       if (this.plane.program.uniforms.uViewportSizes) {
//         this.plane.program.uniforms.uViewportSizes.value = [
//           this.viewport.width,
//           this.viewport.height,
//         ];
//       }
//     }
//     this.scale = this.screen.height / 1500;
//     this.plane.scale.y =
//       (this.viewport.height * (900 * this.scale)) / this.screen.height;
//     this.plane.scale.x =
//       (this.viewport.width * (700 * this.scale)) / this.screen.width;
//     this.plane.program.uniforms.uPlaneSizes.value = [
//       this.plane.scale.x,
//       this.plane.scale.y,
//     ];
//     this.padding = 2;
//     this.width = this.plane.scale.x + this.padding;
//     this.widthTotal = this.width * this.length;
//     this.x = this.width * this.index;
//   }
// }

// class App {
//   constructor(
//     container,
//     {
//       items,
//       bend,
//       textColor = "#ffffff",
//       borderRadius = 0,
//       font = "bold 30px Figtree",
//       scrollSpeed = 2,
//       scrollEase = 0.05,
//     } = {}
//   ) {
//     document.documentElement.classList.remove("no-js");
//     this.container = container;
//     this.scrollSpeed = scrollSpeed;
//     this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
//     this.onCheckDebounce = debounce(this.onCheck, 200);
//     this.createRenderer();
//     this.createCamera();
//     this.createScene();
//     this.onResize();
//     this.createGeometry();
//     this.createMedias(items, bend, textColor, borderRadius, font);
//     this.update();
//     this.addEventListeners();
//   }
//   createRenderer() {
//     this.renderer = new Renderer({
//       alpha: true,
//       antialias: true,
//       dpr: Math.min(window.devicePixelRatio || 1, 2),
//     });
//     this.gl = this.renderer.gl;
//     this.gl.clearColor(0, 0, 0, 0);
//     this.container.appendChild(this.gl.canvas);
//   }
//   createCamera() {
//     this.camera = new Camera(this.gl);
//     this.camera.fov = 45;
//     this.camera.position.z = 20;
//   }
//   createScene() {
//     this.scene = new Transform();
//   }
//   createGeometry() {
//     this.planeGeometry = new Plane(this.gl, {
//       heightSegments: 50,
//       widthSegments: 100,
//     });
//   }
//   createMedias(items, bend = 1, textColor, borderRadius, font) {
//     const defaultItems = [
//       {
//         image: "https://ik.imagekit.io/raunakImageKIt/tr:w-400,h-400,f-png/javascript-1.svg?updatedAt=1758003589947",
//         text: "Bridge",
//       },
//       { image: `https://ik.imagekit.io/raunakImageKIt/tr:w-200,h-300,f-png/react-1.svg?updatedAt=1758015573067`, 
//         text: "Desk Setup" },
//       {
//         image: `https://picsum.photos/seed/3/800/600?grayscale`,
//         text: "Waterfall",
//       },
//       {
//         image: `https://ik.imagekit.io/raunakImageKIt/pngfind.com-react-logo-png-6386491.png?updatedAt=1758016535345`,
//         text: "Strawberries",
//       },
//       {
//         image: `https://picsum.photos/seed/5/800/600?grayscale`,
//         text: "Deep Diving",
//       },
//       {
//         image: `https://picsum.photos/seed/16/800/600?grayscale`,
//         text: "Train Track",
//       },
//       {
//         image: `https://picsum.photos/seed/17/800/600?grayscale`,
//         text: "Santorini",
//       },
//       {
//         image: `https://picsum.photos/seed/8/800/600?grayscale`,
//         text: "Blurry Lights",
//       },
//       {
//         image: `https://picsum.photos/seed/9/800/600?grayscale`,
//         text: "New York",
//       },
//       {
//         image: `https://picsum.photos/seed/10/800/600?grayscale`,
//         text: "Good Boy",
//       },
//       {
//         image: `https://picsum.photos/seed/21/800/600?grayscale`,
//         text: "Coastline",
//       },
//       {
//         image: `https://picsum.photos/seed/12/800/600?grayscale`,
//         text: "Palm Trees",
//       },
//     ];
//     const galleryItems = items && items.length ? items : defaultItems;
//     this.mediasImages = galleryItems.concat(galleryItems);
//     this.medias = this.mediasImages.map((data, index) => {
//       return new Media({
//         geometry: this.planeGeometry,
//         gl: this.gl,
//         image: data.image,
//         index,
//         length: this.mediasImages.length,
//         renderer: this.renderer,
//         scene: this.scene,
//         screen: this.screen,
//         text: data.text,
//         viewport: this.viewport,
//         bend,
//         textColor,
//         borderRadius,
//         font,
//       });
//     });
//   }
//   onTouchDown(e) {
//     this.isDown = true;
//     this.scroll.position = this.scroll.current;
//     this.start = e.touches ? e.touches[0].clientX : e.clientX;
//   }
//   onTouchMove(e) {
//     if (!this.isDown) return;
//     const x = e.touches ? e.touches[0].clientX : e.clientX;
//     const distance = (this.start - x) * (this.scrollSpeed * 0.025);
//     this.scroll.target = this.scroll.position + distance;
//   }
//   onTouchUp() {
//     this.isDown = false;
//     this.onCheck();
//   }
//   onWheel(e) {
//     const delta = e.deltaY || e.wheelDelta || e.detail;
//     this.scroll.target +=
//       (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
//     this.onCheckDebounce();
//   }
//   onCheck() {
//     if (!this.medias || !this.medias[0]) return;
//     const width = this.medias[0].width;
//     const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
//     const item = width * itemIndex;
//     this.scroll.target = this.scroll.target < 0 ? -item : item;
//   }
//   onResize() {
//     this.screen = {
//       width: this.container.clientWidth,
//       height: this.container.clientHeight,
//     };
//     this.renderer.setSize(this.screen.width, this.screen.height);
//     this.camera.perspective({
//       aspect: this.screen.width / this.screen.height,
//     });
//     const fov = (this.camera.fov * Math.PI) / 180;
//     const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
//     const width = height * this.camera.aspect;
//     this.viewport = { width, height };
//     if (this.medias) {
//       this.medias.forEach((media) =>
//         media.onResize({ screen: this.screen, viewport: this.viewport })
//       );
//     }
//   }
//   update() {
//     this.scroll.current = lerp(
//       this.scroll.current,
//       this.scroll.target,
//       this.scroll.ease
//     );
//     const direction = this.scroll.current > this.scroll.last ? "right" : "left";
//     if (this.medias) {
//       this.medias.forEach((media) => media.update(this.scroll, direction));
//     }
//     this.renderer.render({ scene: this.scene, camera: this.camera });
//     this.scroll.last = this.scroll.current;
//     this.raf = window.requestAnimationFrame(this.update.bind(this));
//   }
//   addEventListeners() {
//     this.boundOnResize = this.onResize.bind(this);
//     this.boundOnWheel = this.onWheel.bind(this);
//     this.boundOnTouchDown = this.onTouchDown.bind(this);
//     this.boundOnTouchMove = this.onTouchMove.bind(this);
//     this.boundOnTouchUp = this.onTouchUp.bind(this);
//     window.addEventListener("resize", this.boundOnResize);
//     window.addEventListener("mousewheel", this.boundOnWheel);
//     window.addEventListener("wheel", this.boundOnWheel);
//     window.addEventListener("mousedown", this.boundOnTouchDown);
//     window.addEventListener("mousemove", this.boundOnTouchMove);
//     window.addEventListener("mouseup", this.boundOnTouchUp);
//     window.addEventListener("touchstart", this.boundOnTouchDown);
//     window.addEventListener("touchmove", this.boundOnTouchMove);
//     window.addEventListener("touchend", this.boundOnTouchUp);
//   }
//   destroy() {
//     window.cancelAnimationFrame(this.raf);
//     window.removeEventListener("resize", this.boundOnResize);
//     window.removeEventListener("mousewheel", this.boundOnWheel);
//     window.removeEventListener("wheel", this.boundOnWheel);
//     window.removeEventListener("mousedown", this.boundOnTouchDown);
//     window.removeEventListener("mousemove", this.boundOnTouchMove);
//     window.removeEventListener("mouseup", this.boundOnTouchUp);
//     window.removeEventListener("touchstart", this.boundOnTouchDown);
//     window.removeEventListener("touchmove", this.boundOnTouchMove);
//     window.removeEventListener("touchend", this.boundOnTouchUp);
//     if (
//       this.renderer &&
//       this.renderer.gl &&
//       this.renderer.gl.canvas.parentNode
//     ) {
//       this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
//     }
//   }
// }

// export default function CircularGallery({
//   items,
//   bend = 3,
//   textColor = "#ffffff",
//   borderRadius = 0.05,
//   font = "bold 30px Figtree",
//   scrollSpeed = 2,
//   scrollEase = 0.05,
// }) {
//   const containerRef = useRef(null);
//   useEffect(() => {
//     const app = new App(containerRef.current, {
//       items,
//       bend,
//       textColor,
//       borderRadius,
//       font,
//       scrollSpeed,
//       scrollEase,
//     });
//     return () => {
//       app.destroy();
//     };
//   }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);
//   return (
//     <div
//       className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
//       ref={containerRef}
//     />
//   );
// }

/////////// working test//////////////

import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function autoBind(instance) {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach(key => {
    if (key !== 'constructor' && typeof instance[key] === 'function') {
      instance[key] = instance[key].bind(instance);
    }
  });
}

function createIconTexture(gl, iconPath, iconColor = '#61dafb', size = 128) {
  const texture = new Texture(gl, {
    generateMipmaps: false,
    image: new Image()
  });
  texture.image.src = iconPath; // Path to pre-rendered icon image
  texture.image.onload = () => {
    texture.needsUpdate = true;
  };
  return { texture, width: size, height: size };
}

// function createTextTexture(gl, text, font = 'bold 24px monospace', color = 'white') {
//   const canvas = document.createElement('canvas');
//   const context = canvas.getContext('2d');
//   context.font = font;
//   const metrics = context.measureText(text);
//   const textWidth = Math.ceil(metrics.width);
//   const textHeight = Math.ceil(parseInt(font, 10) * 1.2);
//   canvas.width = textWidth + 40;
//   canvas.height = textHeight + 20;

//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.font = font;
//   context.fillStyle = color;
//   context.textBaseline = 'middle';
//   context.textAlign = 'center';

//   context.shadowColor = 'rgba(0, 0, 0, 0.5)';
//   context.shadowBlur = 4;
//   context.shadowOffsetX = 2;
//   context.shadowOffsetY = 2;

//   context.fillText(text, canvas.width / 2, canvas.height / 2);

//   const texture = new Texture(gl, { generateMipmaps: false });
//   texture.image = canvas;
//   return { texture, width: canvas.width, height: canvas.height };
// }

function createTextTexture(gl, text, font = 'bold 24px monospace', color = 'white') {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Set font to measure text dimensions
  context.font = font;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const textHeight = Math.ceil(parseInt(font, 10) * 1.2);

  // Set final canvas dimensions
  canvas.width = textWidth + 40;
  canvas.height = textHeight + 20;

  // Clear and redraw text with correct dimensions
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = font;
  context.fillStyle = color;
  context.textBaseline = 'middle';
  context.textAlign = 'center';

  context.shadowColor = 'rgba(0, 0, 0, 0.5)';
  context.shadowBlur = 4;
  context.shadowOffsetX = 2;
  context.shadowOffsetY = 2;

  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  texture.needsUpdate = true; // Crucial line to force a texture update

  return { texture, width: canvas.width, height: canvas.height };
}

class Title {
  constructor({ gl, plane, renderer, text, textColor = '#ffffff', font = '24px sans-serif' }) {
    autoBind(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.text = text;
    this.textColor = textColor;
    this.font = font;
    this.createMesh();
  }

  createMesh() {
    const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
    const geometry = new Plane(this.gl);
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true
    });
    this.mesh = new Mesh(this.gl, { geometry, program });
    const aspect = width / height;
    const textHeight = this.plane.scale.y * 0.2;
    const textWidth = textHeight * aspect;
    this.mesh.scale.set(textWidth, textHeight, 1);
    this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.1;
    this.mesh.setParent(this.plane);
  }
}

// class Title {
//   constructor({ gl, plane, renderer, text, textColor = '#ffffff', font = '24px sans-serif' }) {
//     autoBind(this);
//     this.gl = gl;
//     this.plane = plane;
//     this.renderer = renderer;
//     this.text = text;
//     this.textColor = textColor;
//     this.font = font;
//     this.createMesh();
//   }

//   createMesh() {
//     // We will scale the texture based on pixels, not the parent plane's scale.
//     const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
//     const geometry = new Plane(this.gl);
//     const program = new Program(this.gl, {
//       depthTest: false,
//       depthWrite: false,
//       vertex: `
//         attribute vec3 position;
//         attribute vec2 uv;
//         uniform mat4 modelViewMatrix;
//         uniform mat4 projectionMatrix;
//         varying vec2 vUv;
//         void main() {
//           vUv = uv;
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//         }
//       `,
//       fragment: `
//         precision highp float;
//         uniform sampler2D tMap;
//         varying vec2 vUv;
//         void main() {
//           vec4 color = texture2D(tMap, vUv);
//           if (color.a < 0.1) discard;
//           gl_FragColor = color;
//         }
//       `,
//       uniforms: { tMap: { value: texture } },
//       transparent: true
//     });

//     this.mesh = new Mesh(this.gl, { geometry, program });

//     // A more direct scaling approach for the text mesh
//     // These values are a guess, you might need to adjust them based on testing
//     const textMeshHeight = 0.5; // Represents 0.5 units in your scene
//     const textMeshWidth = textMeshHeight * (width / height);
//     this.mesh.scale.set(textMeshWidth, textMeshHeight, 1);

//     // Position the text relative to the parent plane's bottom edge
//     this.mesh.position.y = -this.plane.scale.y / 2 - textMeshHeight / 2 - 0.1;
//     this.mesh.position.z = 0.01;

//     this.mesh.setParent(this.plane);
//   }
// }

class SkillMedia {
  constructor({
    geometry,
    gl,
    iconPath,
    iconColor,
    index,
    length,
    renderer,
    scene,
    screen,
    text,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font
  }) {
    this.extra = 0;
    this.geometry = geometry;
    this.gl = gl;
    this.iconPath = iconPath;
    this.iconColor = iconColor;
    this.index = index;
    this.length = length;
    this.renderer = renderer;
    this.scene = scene;
    this.screen = screen;
    this.text = text;
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;
    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
  }

  createShader() {
    const { texture } = createIconTexture(this.gl, this.iconPath, this.iconColor, 256);

    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = sin(p.x * 3.0 + uTime * 0.5) * 0.05 + cos(p.y * 2.0 + uTime * 0.3) * 0.05;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        uniform float uTime;
        varying vec2 vUv;

        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }

        void main() {
          vec4 color = texture2D(tMap, vUv);
          float glow = 1.0 + sin(uTime * 2.0) * 0.1;
          color.rgb *= glow;
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          gl_FragColor = vec4(color.rgb, color.a * alpha);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uSpeed: { value: 0 },
        uTime: { value: Math.random() * 100 },
        uBorderRadius: { value: this.borderRadius }
      },
      transparent: true
    });
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.plane.setParent(this.scene);
  }

  createTitle() {
    this.title = new Title({
      gl: this.gl,
      plane: this.plane,
      renderer: this.renderer,
      text: this.text,
      textColor: this.textColor,
      font: this.font
    });
  }

  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    this.speed = scroll.current - scroll.last;
    this.program.uniforms.uTime.value += 0.02;
    this.program.uniforms.uSpeed.value = this.speed;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;

    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }

  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) this.viewport = viewport;

    this.scale = this.screen.height / 1500;
    this.plane.scale.y = (this.viewport.height * (600 * this.scale)) / this.screen.height;
    this.plane.scale.x = (this.viewport.width * (600 * this.scale)) / this.screen.width;

    this.padding = 1.5;
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

class SkillsApp {
  constructor(
    container,
    {
      skills,
      bend = 2,
      textColor = '#000000',
      borderRadius = 0.1,
      font = 'bold 20px Inter',
      scrollSpeed = 1.5,
      scrollEase = 0.0
    } = {}
  ) {
    this.container = container;
    this.scrollSpeed = scrollSpeed;
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
    this.onCheckDebounce = debounce(this.onCheck, 200);

    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createSkills(skills, bend, textColor, borderRadius, font);
    this.update();
    this.addEventListeners();
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 30,
      widthSegments: 30
    });
  }

  createSkills(skills, bend, textColor, borderRadius, font) {
    const skillItems = skills && skills.length ? skills : [];
    this.skillsData = skillItems.concat(skillItems); // Duplicate for infinite scroll

    this.skills = this.skillsData.map((skillData, index) => {
      return new SkillMedia({
        geometry: this.planeGeometry,
        gl: this.gl,
        iconPath: skillData.iconPath,
        iconColor: skillData.color,
        index,
        length: this.skillsData.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        text: skillData.name,
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font
      });
    });
  }

  onTouchDown(e) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e.touches ? e.touches[0].clientX : e.clientX;
  }

  onTouchMove(e) {
    if (!this.isDown) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const distance = (this.start - x) * (this.scrollSpeed * 0.03);
    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp() {
    this.isDown = false;
    this.onCheck();
  }

  onWheel(e) {
    const delta = e.deltaY || e.wheelDelta || e.detail;
    this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.3;
    this.onCheckDebounce();
  }

  onCheck() {
    if (!this.skills || !this.skills[0]) return;
    const width = this.skills[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }

  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height
    });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };
    if (this.skills) {
      this.skills.forEach(skill => skill.onResize({ screen: this.screen, viewport: this.viewport }));
    }
  }

  update() {
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
    if (this.skills) {
      this.skills.forEach(skill => skill.update(this.scroll, direction));
    }
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }

  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnWheel = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);

    window.addEventListener('resize', this.boundOnResize);
    window.addEventListener('mousewheel', this.boundOnWheel);
    window.addEventListener('wheel', this.boundOnWheel);
    window.addEventListener('mousedown', this.boundOnTouchDown);
    window.addEventListener('mousemove', this.boundOnTouchMove);
    window.addEventListener('mouseup', this.boundOnTouchUp);
    window.addEventListener('touchstart', this.boundOnTouchDown);
    window.addEventListener('touchmove', this.boundOnTouchMove);
    window.addEventListener('touchend', this.boundOnTouchUp);
  }

  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.boundOnResize);
    window.removeEventListener('mousewheel', this.boundOnWheel);
    window.removeEventListener('wheel', this.boundOnWheel);
    window.removeEventListener('mousedown', this.boundOnTouchDown);
    window.removeEventListener('mousemove', this.boundOnTouchMove);
    window.removeEventListener('mouseup', this.boundOnTouchUp);
    window.removeEventListener('touchstart', this.boundOnTouchDown);
    window.removeEventListener('touchmove', this.boundOnTouchMove);
    window.removeEventListener('touchend', this.boundOnTouchUp);

    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
    }
  }
}

export default function SkillsCircularGallery({
  skills,
  bend = 4,
  textColor = '#000000',
  borderRadius = 0.1,
  font = 'bold 20px Inter',
  scrollSpeed = 1.5,
  scrollEase = 0.08
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const app = new SkillsApp(containerRef.current, {
      skills,
      bend,
      textColor,
      borderRadius,
      font,
      scrollSpeed,
      scrollEase
    });

    return () => {
      app.destroy();
    };
  }, [skills, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);

  return (
    // <div className="w-full h-96 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-xl overflow-hidden">
    <div className="w-full h-96 bg-gradient-to-brounded-xl overflow-hidden">
      <div className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef} />
    </div>
  );
}

// /////////////////////// debugging////////////////////
// // import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
// // import { useEffect, useRef } from 'react';

// // function debounce(func, wait) {
// //   let timeout;
// //   return function (...args) {
// //     clearTimeout(timeout);
// //     timeout = setTimeout(() => func.apply(this, args), wait);
// //   };
// // }

// // function lerp(p1, p2, t) {
// //   return p1 + (p2 - p1) * t;
// // }

// // function autoBind(instance) {
// //   const proto = Object.getPrototypeOf(instance);
// //   Object.getOwnPropertyNames(proto).forEach(key => {
// //     if (key !== 'constructor' && typeof instance[key] === 'function') {
// //       instance[key] = instance[key].bind(instance);
// //     }
// //   });
// // }

// // function createIconTexture(gl, iconPath, iconColor = '#61dafb', size = 128) {
// //   const texture = new Texture(gl, {
// //     generateMipmaps: false,
// //     image: new Image()
// //   });

// //   // Create fallback colored canvas
// //   const canvas = document.createElement('canvas');
// //   canvas.width = size;
// //   canvas.height = size;
// //   const ctx = canvas.getContext('2d');

// //   // Create gradient background
// //   const gradient = ctx.createLinearGradient(0, 0, size, size);
// //   gradient.addColorStop(0, iconColor);
// //   gradient.addColorStop(1, `${iconColor}88`);

// //   ctx.fillStyle = gradient;
// //   ctx.fillRect(0, 0, size, size);

// //   // Add border
// //   ctx.strokeStyle = '#ffffff';
// //   ctx.lineWidth = 4;
// //   ctx.strokeRect(2, 2, size - 4, size - 4);

// //   // Set fallback as default
// //   texture.image = canvas;

// //   // Try to load actual image if path provided
// //   if (iconPath && iconPath !== '') {
// //     const img = new Image();
// //     img.crossOrigin = 'anonymous';
// //     img.onload = () => {
// //       texture.image = img;
// //       texture.needsUpdate = true;
// //     };
// //     img.onerror = () => {
// //       console.warn('Failed to load icon, using fallback:', iconPath);
// //       // Keep fallback canvas
// //     };
// //     img.src = iconPath;
// //   }

// //   return { texture, width: size, height: size };
// // }

// // function createTextTexture(gl, text, font = 'bold 24px monospace', color = 'white') {
// //   const canvas = document.createElement('canvas');
// //   const context = canvas.getContext('2d');

// //   // Set font to measure text dimensions
// //   context.font = font;
// //   const metrics = context.measureText(text);
// //   const textWidth = Math.ceil(metrics.width);
// //   const textHeight = Math.ceil(parseInt(font, 10) * 1.2);

// //   // Set final canvas dimensions with padding
// //   canvas.width = Math.max(textWidth + 40, 100);
// //   canvas.height = Math.max(textHeight + 20, 40);

// //   // Clear and redraw text with correct dimensions
// //   context.clearRect(0, 0, canvas.width, canvas.height);
// //   context.font = font;
// //   context.fillStyle = color;
// //   context.textBaseline = 'middle';
// //   context.textAlign = 'center';

// //   // Add semi-transparent background for better visibility
// //   context.fillStyle = 'rgba(0, 0, 0, 0.6)';
// //   context.fillRect(0, 0, canvas.width, canvas.height);

// //   // Add border
// //   context.strokeStyle = color;
// //   context.lineWidth = 1;
// //   context.strokeRect(0, 0, canvas.width, canvas.height);

// //   // Draw text with shadow
// //   context.fillStyle = color;
// //   context.shadowColor = 'rgba(0, 0, 0, 0.8)';
// //   context.shadowBlur = 4;
// //   context.shadowOffsetX = 2;
// //   context.shadowOffsetY = 2;

// //   context.fillText(text, canvas.width / 2, canvas.height / 2);

// //   const texture = new Texture(gl, { generateMipmaps: false });
// //   texture.image = canvas;
// //   texture.needsUpdate = true;

// //   return { texture, width: canvas.width, height: canvas.height };
// // }

// // class Title {
// //   constructor({ gl, plane, renderer, text, textColor = '#ffffff', font = '24px sans-serif' }) {
// //     autoBind(this);
// //     this.gl = gl;
// //     this.plane = plane;
// //     this.renderer = renderer;
// //     this.text = text;
// //     this.textColor = textColor;
// //     this.font = font;
// //     this.createMesh();
// //   }

// //   createMesh() {
// //     const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
// //     const geometry = new Plane(this.gl);
// //     const program = new Program(this.gl, {
// //       depthTest: false,
// //       depthWrite: false,
// //       vertex: `
// //         attribute vec3 position;
// //         attribute vec2 uv;
// //         uniform mat4 modelViewMatrix;
// //         uniform mat4 projectionMatrix;
// //         varying vec2 vUv;
// //         void main() {
// //           vUv = uv;
// //           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// //         }
// //       `,
// //       fragment: `
// //         precision highp float;
// //         uniform sampler2D tMap;
// //         varying vec2 vUv;
// //         void main() {
// //           vec4 color = texture2D(tMap, vUv);
// //           if (color.a < 0.1) discard;
// //           gl_FragColor = color;
// //         }
// //       `,
// //       uniforms: { tMap: { value: texture } },
// //       transparent: true
// //     });

// //     this.mesh = new Mesh(this.gl, { geometry, program });

// //     // Calculate proper scaling
// //     const aspect = width / height;
// //     const baseScale = 0.8; // Increased base scale for better visibility
// //     const textHeight = baseScale;
// //     const textWidth = textHeight * aspect;

// //     this.mesh.scale.set(textWidth, textHeight, 1);

// //     // Position text below the icon with more spacing
// //     this.mesh.position.y = -this.plane.scale.y * 0.6 - textHeight * 0.5;
// //     this.mesh.position.z = 0.01; // Slightly in front to avoid z-fighting

// //     this.mesh.setParent(this.plane);
// //   }
// // }

// // class SkillMedia {
// //   constructor({
// //     geometry,
// //     gl,
// //     iconPath,
// //     iconColor,
// //     index,
// //     length,
// //     renderer,
// //     scene,
// //     screen,
// //     text,
// //     viewport,
// //     bend,
// //     textColor,
// //     borderRadius = 0,
// //     font
// //   }) {
// //     this.extra = 0;
// //     this.geometry = geometry;
// //     this.gl = gl;
// //     this.iconPath = iconPath;
// //     this.iconColor = iconColor;
// //     this.index = index;
// //     this.length = length;
// //     this.renderer = renderer;
// //     this.scene = scene;
// //     this.screen = screen;
// //     this.text = text;
// //     this.viewport = viewport;
// //     this.bend = bend;
// //     this.textColor = textColor;
// //     this.borderRadius = borderRadius;
// //     this.font = font;

// //     this.createShader();
// //     this.createMesh();
// //     this.createTitle();
// //     this.onResize();
// //   }

// //   createShader() {
// //     const { texture } = createIconTexture(this.gl, this.iconPath, this.iconColor, 256);

// //     this.program = new Program(this.gl, {
// //       depthTest: false,
// //       depthWrite: false,
// //       vertex: `
// //         precision highp float;
// //         attribute vec3 position;
// //         attribute vec2 uv;
// //         uniform mat4 modelViewMatrix;
// //         uniform mat4 projectionMatrix;
// //         uniform float uTime;
// //         uniform float uSpeed;
// //         varying vec2 vUv;
// //         void main() {
// //           vUv = uv;
// //           vec3 p = position;
// //           p.z = sin(p.x * 3.0 + uTime * 0.5) * 0.05 + cos(p.y * 2.0 + uTime * 0.3) * 0.05;
// //           gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
// //         }
// //       `,
// //       fragment: `
// //         precision highp float;
// //         uniform sampler2D tMap;
// //         uniform float uBorderRadius;
// //         uniform float uTime;
// //         varying vec2 vUv;

// //         float roundedBoxSDF(vec2 p, vec2 b, float r) {
// //           vec2 d = abs(p) - b;
// //           return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
// //         }

// //         void main() {
// //           vec4 color = texture2D(tMap, vUv);
// //           float glow = 1.0 + sin(uTime * 2.0) * 0.1;
// //           color.rgb *= glow;
// //           float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
// //           float edgeSmooth = 0.002;
// //           float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
// //           gl_FragColor = vec4(color.rgb, color.a * alpha);
// //         }
// //       `,
// //       uniforms: {
// //         tMap: { value: texture },
// //         uSpeed: { value: 0 },
// //         uTime: { value: Math.random() * 100 },
// //         uBorderRadius: { value: this.borderRadius }
// //       },
// //       transparent: true
// //     });
// //   }

// //   createMesh() {
// //     this.plane = new Mesh(this.gl, {
// //       geometry: this.geometry,
// //       program: this.program
// //     });
// //     this.plane.setParent(this.scene);
// //   }

// //   createTitle() {
// //     try {
// //       this.title = new Title({
// //         gl: this.gl,
// //         plane: this.plane,
// //         renderer: this.renderer,
// //         text: this.text,
// //         textColor: this.textColor,
// //         font: this.font
// //       });
// //     } catch (error) {
// //       console.error('Error creating title for', this.text, ':', error);
// //     }
// //   }

// //   update(scroll, direction) {
// //     this.plane.position.x = this.x - scroll.current - this.extra;

// //     const x = this.plane.position.x;
// //     const H = this.viewport.width / 2;

// //     if (this.bend === 0) {
// //       this.plane.position.y = 0;
// //       this.plane.rotation.z = 0;
// //     } else {
// //       const B_abs = Math.abs(this.bend);
// //       const R = (H * H + B_abs * B_abs) / (2 * B_abs);
// //       const effectiveX = Math.min(Math.abs(x), H);

// //       const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
// //       if (this.bend > 0) {
// //         this.plane.position.y = -arc;
// //         this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
// //       } else {
// //         this.plane.position.y = arc;
// //         this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
// //       }
// //     }

// //     this.speed = scroll.current - scroll.last;
// //     this.program.uniforms.uTime.value += 0.02;
// //     this.program.uniforms.uSpeed.value = this.speed;

// //     const planeOffset = this.plane.scale.x / 2;
// //     const viewportOffset = this.viewport.width / 2;
// //     this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
// //     this.isAfter = this.plane.position.x - planeOffset > viewportOffset;

// //     if (direction === 'right' && this.isBefore) {
// //       this.extra -= this.widthTotal;
// //       this.isBefore = this.isAfter = false;
// //     }
// //     if (direction === 'left' && this.isAfter) {
// //       this.extra += this.widthTotal;
// //       this.isBefore = this.isAfter = false;
// //     }
// //   }

// //   onResize({ screen, viewport } = {}) {
// //     if (screen) this.screen = screen;
// //     if (viewport) this.viewport = viewport;

// //     this.scale = this.screen.height / 1500;
// //     this.plane.scale.y = (this.viewport.height * (600 * this.scale)) / this.screen.height;
// //     this.plane.scale.x = (this.viewport.width * (600 * this.scale)) / this.screen.width;

// //     this.padding = 1.5;
// //     this.width = this.plane.scale.x + this.padding;
// //     this.widthTotal = this.width * this.length;
// //     this.x = this.width * this.index;
// //   }
// // }

// // class SkillsApp {
// //   constructor(
// //     container,
// //     {
// //       skills,
// //       bend = 2,
// //       textColor = '#ffffff',
// //       borderRadius = 0.1,
// //       font = 'bold 20px Inter',
// //       scrollSpeed = 1.5,
// //       scrollEase = 0.08
// //     } = {}
// //   ) {
// //     this.container = container;
// //     this.scrollSpeed = scrollSpeed;
// //     this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
// //     this.onCheckDebounce = debounce(this.onCheck, 200);

// //     this.createRenderer();
// //     this.createCamera();
// //     this.createScene();
// //     this.onResize();
// //     this.createGeometry();
// //     this.createSkills(skills, bend, textColor, borderRadius, font);
// //     this.update();
// //     this.addEventListeners();
// //   }

// //   createRenderer() {
// //     this.renderer = new Renderer({
// //       alpha: true,
// //       antialias: true,
// //       dpr: Math.min(window.devicePixelRatio || 1, 2)
// //     });
// //     this.gl = this.renderer.gl;
// //     this.gl.clearColor(0, 0, 0, 0);
// //     this.container.appendChild(this.gl.canvas);
// //   }

// //   createCamera() {
// //     this.camera = new Camera(this.gl);
// //     this.camera.fov = 45;
// //     this.camera.position.z = 20;
// //   }

// //   createScene() {
// //     this.scene = new Transform();
// //   }

// //   createGeometry() {
// //     this.planeGeometry = new Plane(this.gl, {
// //       heightSegments: 30,
// //       widthSegments: 30
// //     });
// //   }

// //   createSkills(skills, bend, textColor, borderRadius, font) {
// //     const skillItems = skills && skills.length ? skills : [];
// //     this.skillsData = skillItems.concat(skillItems); // Duplicate for infinite scroll

// //     this.skills = this.skillsData.map((skillData, index) => {
// //       return new SkillMedia({
// //         geometry: this.planeGeometry,
// //         gl: this.gl,
// //         iconPath: skillData.iconPath,
// //         iconColor: skillData.color,
// //         index,
// //         length: this.skillsData.length,
// //         renderer: this.renderer,
// //         scene: this.scene,
// //         screen: this.screen,
// //         text: skillData.name,
// //         viewport: this.viewport,
// //         bend,
// //         textColor,
// //         borderRadius,
// //         font
// //       });
// //     });
// //   }

// //   onTouchDown(e) {
// //     this.isDown = true;
// //     this.scroll.position = this.scroll.current;
// //     this.start = e.touches ? e.touches[0].clientX : e.clientX;
// //   }

// //   onTouchMove(e) {
// //     if (!this.isDown) return;
// //     const x = e.touches ? e.touches[0].clientX : e.clientX;
// //     const distance = (this.start - x) * (this.scrollSpeed * 0.03);
// //     this.scroll.target = this.scroll.position + distance;
// //   }

// //   onTouchUp() {
// //     this.isDown = false;
// //     this.onCheck();
// //   }

// //   onWheel(e) {
// //     const delta = e.deltaY || e.wheelDelta || e.detail;
// //     this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.3;
// //     this.onCheckDebounce();
// //   }

// //   onCheck() {
// //     if (!this.skills || !this.skills[0]) return;
// //     const width = this.skills[0].width;
// //     const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
// //     const item = width * itemIndex;
// //     this.scroll.target = this.scroll.target < 0 ? -item : item;
// //   }

// //   onResize() {
// //     this.screen = {
// //       width: this.container.clientWidth,
// //       height: this.container.clientHeight
// //     };
// //     this.renderer.setSize(this.screen.width, this.screen.height);
// //     this.camera.perspective({
// //       aspect: this.screen.width / this.screen.height
// //     });
// //     const fov = (this.camera.fov * Math.PI) / 180;
// //     const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
// //     const width = height * this.camera.aspect;
// //     this.viewport = { width, height };
// //     if (this.skills) {
// //       this.skills.forEach(skill => skill.onResize({ screen: this.screen, viewport: this.viewport }));
// //     }
// //   }

// //   update() {
// //     this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
// //     const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
// //     if (this.skills) {
// //       this.skills.forEach(skill => skill.update(this.scroll, direction));
// //     }
// //     this.renderer.render({ scene: this.scene, camera: this.camera });
// //     this.scroll.last = this.scroll.current;
// //     this.raf = window.requestAnimationFrame(this.update.bind(this));
// //   }

// //   addEventListeners() {
// //     this.boundOnResize = this.onResize.bind(this);
// //     this.boundOnWheel = this.onWheel.bind(this);
// //     this.boundOnTouchDown = this.onTouchDown.bind(this);
// //     this.boundOnTouchMove = this.onTouchMove.bind(this);
// //     this.boundOnTouchUp = this.onTouchUp.bind(this);

// //     window.addEventListener('resize', this.boundOnResize);
// //     window.addEventListener('mousewheel', this.boundOnWheel);
// //     window.addEventListener('wheel', this.boundOnWheel);
// //     window.addEventListener('mousedown', this.boundOnTouchDown);
// //     window.addEventListener('mousemove', this.boundOnTouchMove);
// //     window.addEventListener('mouseup', this.boundOnTouchUp);
// //     window.addEventListener('touchstart', this.boundOnTouchDown);
// //     window.addEventListener('touchmove', this.boundOnTouchMove);
// //     window.addEventListener('touchend', this.boundOnTouchUp);
// //   }

// //   destroy() {
// //     window.cancelAnimationFrame(this.raf);
// //     window.removeEventListener('resize', this.boundOnResize);
// //     window.removeEventListener('mousewheel', this.boundOnWheel);
// //     window.removeEventListener('wheel', this.boundOnWheel);
// //     window.removeEventListener('mousedown', this.boundOnTouchDown);
// //     window.removeEventListener('mousemove', this.boundOnTouchMove);
// //     window.removeEventListener('mouseup', this.boundOnTouchUp);
// //     window.removeEventListener('touchstart', this.boundOnTouchDown);
// //     window.removeEventListener('touchmove', this.boundOnTouchMove);
// //     window.removeEventListener('touchend', this.boundOnTouchUp);

// //     if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
// //       this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
// //     }
// //   }
// // }

// // export default function SkillsCircularGallery({
// //   skills,
// //   bend = 2,
// //   textColor = '#ffffff',
// //   borderRadius = 0.1,
// //   font = 'bold 20px Inter',
// //   scrollSpeed = 1.5,
// //   scrollEase = 0.08
// // }) {
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     if (!containerRef.current) return;

// //     const app = new SkillsApp(containerRef.current, {
// //       skills,
// //       bend,
// //       textColor,
// //       borderRadius,
// //       font,
// //       scrollSpeed,
// //       scrollEase
// //     });

// //     return () => {
// //       app.destroy();
// //     };
// //   }, [skills, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);

// //   return (
// //     <div className="w-full h-96 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-xl overflow-hidden">
// //       <div className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef} />
// //     </div>
// //   );
// // }

// ///////////////////////////////

// // import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
// // import { useEffect, useRef } from 'react';

// // function debounce(func, wait) {
// //   let timeout;
// //   return function (...args) {
// //     clearTimeout(timeout);
// //     timeout = setTimeout(() => func.apply(this, args), wait);
// //   };
// // }

// // function lerp(p1, p2, t) {
// //   return p1 + (p2 - p1) * t;
// // }

// // function autoBind(instance) {
// //   const proto = Object.getPrototypeOf(instance);
// //   Object.getOwnPropertyNames(proto).forEach(key => {
// //     if (key !== 'constructor' && typeof instance[key] === 'function') {
// //       instance[key] = instance[key].bind(instance);
// //     }
// //   });
// // }

// // function createIconTexture(gl, iconPath, iconColor = '#61dafb', size = 128) {
// //   // Create fallback colored canvas first
// //   const canvas = document.createElement('canvas');
// //   canvas.width = size;
// //   canvas.height = size;
// //   const ctx = canvas.getContext('2d');

// //   // Create gradient background
// //   const gradient = ctx.createLinearGradient(0, 0, size, size);
// //   gradient.addColorStop(0, iconColor);
// //   gradient.addColorStop(1, `${iconColor}88`);

// //   ctx.fillStyle = gradient;
// //   ctx.fillRect(0, 0, size, size);

// //   // Add border
// //   ctx.strokeStyle = '#ffffff';
// //   ctx.lineWidth = 4;
// //   ctx.strokeRect(2, 2, size - 4, size - 4);

// //   // Create texture with fallback canvas
// //   const texture = new Texture(gl, {
// //     generateMipmaps: false,
// //     image: canvas // Pass canvas directly
// //   });

// //   // Try to load actual image if path provided
// //   if (iconPath && iconPath !== '') {
// //     const img = new Image();
// //     img.crossOrigin = 'anonymous';
// //     img.onload = () => {
// //       texture.image = img;
// //       texture.needsUpdate = true;
// //     };
// //     img.onerror = () => {
// //       console.warn('Failed to load icon, using fallback:', iconPath);
// //       // Keep fallback canvas - texture.image is already set to canvas
// //     };
// //     img.src = iconPath;
// //   }

// //   return { texture, width: size, height: size };
// // }

// // function createTextTexture(gl, text, font = 'bold 24px monospace', color = 'white') {
// //   const canvas = document.createElement('canvas');
// //   const context = canvas.getContext('2d');

// //   // Set font to measure text dimensions
// //   context.font = font;
// //   const metrics = context.measureText(text);
// //   const textWidth = Math.ceil(metrics.width);
// //   const textHeight = Math.ceil(parseInt(font, 10) * 1.2);

// //   // Set final canvas dimensions with padding
// //   canvas.width = Math.max(textWidth + 40, 100);
// //   canvas.height = Math.max(textHeight + 20, 40);

// //   // Clear and redraw text with correct dimensions
// //   context.clearRect(0, 0, canvas.width, canvas.height);
// //   context.font = font;
// //   context.fillStyle = color;
// //   context.textBaseline = 'middle';
// //   context.textAlign = 'center';

// //   // Add semi-transparent background for better visibility
// //   context.fillStyle = 'rgba(0, 0, 0, 0.6)';
// //   context.fillRect(0, 0, canvas.width, canvas.height);

// //   // Add border
// //   context.strokeStyle = color;
// //   context.lineWidth = 1;
// //   context.strokeRect(0, 0, canvas.width, canvas.height);

// //   // Draw text with shadow
// //   context.fillStyle = color;
// //   context.shadowColor = 'rgba(0, 0, 0, 0.8)';
// //   context.shadowBlur = 4;
// //   context.shadowOffsetX = 2;
// //   context.shadowOffsetY = 2;

// //   context.fillText(text, canvas.width / 2, canvas.height / 2);

// //   const texture = new Texture(gl, { generateMipmaps: false });
// //   texture.image = canvas;
// //   texture.needsUpdate = true;

// //   return { texture, width: canvas.width, height: canvas.height };
// // }

// // class Title {
// //   constructor({ gl, plane, renderer, text, textColor = '#ffffff', font = '24px sans-serif' }) {
// //     autoBind(this);
// //     this.gl = gl;
// //     this.plane = plane;
// //     this.renderer = renderer;
// //     this.text = text;
// //     this.textColor = textColor;
// //     this.font = font;
// //     this.createMesh();
// //   }

// //   createMesh() {
// //     const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
// //     const geometry = new Plane(this.gl);
// //     const program = new Program(this.gl, {
// //       depthTest: false,
// //       depthWrite: false,
// //       vertex: `
// //         attribute vec3 position;
// //         attribute vec2 uv;
// //         uniform mat4 modelViewMatrix;
// //         uniform mat4 projectionMatrix;
// //         varying vec2 vUv;
// //         void main() {
// //           vUv = uv;
// //           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// //         }
// //       `,
// //       fragment: `
// //         precision highp float;
// //         uniform sampler2D tMap;
// //         varying vec2 vUv;
// //         void main() {
// //           vec4 color = texture2D(tMap, vUv);
// //           if (color.a < 0.1) discard;
// //           gl_FragColor = color;
// //         }
// //       `,
// //       uniforms: { tMap: { value: texture } },
// //       transparent: true
// //     });

// //     this.mesh = new Mesh(this.gl, { geometry, program });

// //     // Calculate proper scaling
// //     const aspect = width / height;
// //     const baseScale = 0.8; // Increased base scale for better visibility
// //     const textHeight = baseScale;
// //     const textWidth = textHeight * aspect;

// //     this.mesh.scale.set(textWidth, textHeight, 1);

// //     // Position text below the icon with more spacing
// //     this.mesh.position.y = -this.plane.scale.y * 0.6 - textHeight * 0.5;
// //     this.mesh.position.z = 0.01; // Slightly in front to avoid z-fighting

// //     this.mesh.setParent(this.plane);
// //   }
// // }

// // class SkillMedia {
// //   constructor({
// //     geometry,
// //     gl,
// //     iconPath,
// //     iconColor,
// //     index,
// //     length,
// //     renderer,
// //     scene,
// //     screen,
// //     text,
// //     viewport,
// //     bend,
// //     textColor,
// //     borderRadius = 0,
// //     font
// //   }) {
// //     this.extra = 0;
// //     this.geometry = geometry;
// //     this.gl = gl;
// //     this.iconPath = iconPath;
// //     this.iconColor = iconColor;
// //     this.index = index;
// //     this.length = length;
// //     this.renderer = renderer;
// //     this.scene = scene;
// //     this.screen = screen;
// //     this.text = text;
// //     this.viewport = viewport;
// //     this.bend = bend;
// //     this.textColor = textColor;
// //     this.borderRadius = borderRadius;
// //     this.font = font;

// //     this.createShader();
// //     this.createMesh();
// //     this.createTitle();
// //     this.onResize();
// //   }

// //   createShader() {
// //     const iconResult = createIconTexture(this.gl, this.iconPath, this.iconColor, 256);

// //     if (!iconResult) {
// //       console.error('Failed to create icon texture for:', this.text);
// //       return;
// //     }

// //     const { texture } = iconResult;

// //     this.program = new Program(this.gl, {
// //       depthTest: false,
// //       depthWrite: false,
// //       vertex: `
// //         precision highp float;
// //         attribute vec3 position;
// //         attribute vec2 uv;
// //         uniform mat4 modelViewMatrix;
// //         uniform mat4 projectionMatrix;
// //         uniform float uTime;
// //         uniform float uSpeed;
// //         varying vec2 vUv;
// //         void main() {
// //           vUv = uv;
// //           vec3 p = position;
// //           p.z = sin(p.x * 3.0 + uTime * 0.5) * 0.05 + cos(p.y * 2.0 + uTime * 0.3) * 0.05;
// //           gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
// //         }
// //       `,
// //       fragment: `
// //         precision highp float;
// //         uniform sampler2D tMap;
// //         uniform float uBorderRadius;
// //         uniform float uTime;
// //         uniform float uAlpha;
// //         varying vec2 vUv;

// //         float roundedBoxSDF(vec2 p, vec2 b, float r) {
// //           vec2 d = abs(p) - b;
// //           return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
// //         }

// //         void main() {
// //           vec4 color = texture2D(tMap, vUv);
// //           float glow = 1.0 + sin(uTime * 2.0) * 0.1;
// //           color.rgb *= glow;
// //           float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
// //           float edgeSmooth = 0.002;
// //           float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
// //           gl_FragColor = vec4(color.rgb, color.a * alpha * uAlpha);
// //         }
// //       `,
// //       uniforms: {
// //         tMap: { value: texture },
// //         uSpeed: { value: 0 },
// //         uTime: { value: Math.random() * 100 },
// //         uBorderRadius: { value: this.borderRadius },
// //         uAlpha: { value: 1.0 }
// //       },
// //       transparent: true
// //     });

// //     console.log('Icon shader created for:', this.text);
// //   }

// //   createMesh() {
// //     this.plane = new Mesh(this.gl, {
// //       geometry: this.geometry,
// //       program: this.program
// //     });
// //     this.plane.setParent(this.scene);
// //   }

// //   createTitle() {
// //     try {
// //       this.title = new Title({
// //         gl: this.gl,
// //         plane: this.plane,
// //         renderer: this.renderer,
// //         text: this.text,
// //         textColor: this.textColor,
// //         font: this.font
// //       });
// //     } catch (error) {
// //       console.error('Error creating title for', this.text, ':', error);
// //     }
// //   }

// //   update(scroll, direction) {
// //     this.plane.position.x = this.x - scroll.current - this.extra;

// //     const x = this.plane.position.x;
// //     const H = this.viewport.width / 2;

// //     if (this.bend === 0) {
// //       this.plane.position.y = 0;
// //       this.plane.rotation.z = 0;
// //     } else {
// //       const B_abs = Math.abs(this.bend);
// //       const R = (H * H + B_abs * B_abs) / (2 * B_abs);
// //       const effectiveX = Math.min(Math.abs(x), H);

// //       const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
// //       if (this.bend > 0) {
// //         this.plane.position.y = -arc;
// //         this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
// //       } else {
// //         this.plane.position.y = arc;
// //         this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
// //       }
// //     }

// //     this.speed = scroll.current - scroll.last;
// //     this.program.uniforms.uTime.value += 0.02;
// //     this.program.uniforms.uSpeed.value = this.speed;

// //     const planeOffset = this.plane.scale.x / 2;
// //     const viewportOffset = this.viewport.width / 2;
// //     this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
// //     this.isAfter = this.plane.position.x - planeOffset > viewportOffset;

// //     if (direction === 'right' && this.isBefore) {
// //       this.extra -= this.widthTotal;
// //       this.isBefore = this.isAfter = false;
// //     }
// //     if (direction === 'left' && this.isAfter) {
// //       this.extra += this.widthTotal;
// //       this.isBefore = this.isAfter = false;
// //     }
// //   }

// //   onResize({ screen, viewport } = {}) {
// //     if (screen) this.screen = screen;
// //     if (viewport) this.viewport = viewport;

// //     this.scale = this.screen.height / 1500;
// //     this.plane.scale.y = (this.viewport.height * (600 * this.scale)) / this.screen.height;
// //     this.plane.scale.x = (this.viewport.width * (600 * this.scale)) / this.screen.width;

// //     this.padding = 1.5;
// //     this.width = this.plane.scale.x + this.padding;
// //     this.widthTotal = this.width * this.length;
// //     this.x = this.width * this.index;
// //   }
// // }

// // class SkillsApp {
// //   constructor(
// //     container,
// //     {
// //       skills,
// //       bend = 2,
// //       textColor = '#ffffff',
// //       borderRadius = 0.1,
// //       font = 'bold 20px Inter',
// //       scrollSpeed = 1.5,
// //       scrollEase = 0.08
// //     } = {}
// //   ) {
// //     this.container = container;
// //     this.scrollSpeed = scrollSpeed;
// //     this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
// //     this.onCheckDebounce = debounce(this.onCheck, 200);

// //     this.createRenderer();
// //     this.createCamera();
// //     this.createScene();
// //     this.onResize();
// //     this.createGeometry();
// //     this.createSkills(skills, bend, textColor, borderRadius, font);
// //     this.update();
// //     this.addEventListeners();
// //   }

// //   createRenderer() {
// //     this.renderer = new Renderer({
// //       alpha: true,
// //       antialias: true,
// //       dpr: Math.min(window.devicePixelRatio || 1, 2)
// //     });
// //     this.gl = this.renderer.gl;
// //     this.gl.clearColor(0, 0, 0, 0);
// //     this.container.appendChild(this.gl.canvas);
// //   }

// //   createCamera() {
// //     this.camera = new Camera(this.gl);
// //     this.camera.fov = 45;
// //     this.camera.position.z = 20;
// //   }

// //   createScene() {
// //     this.scene = new Transform();
// //   }

// //   createGeometry() {
// //     this.planeGeometry = new Plane(this.gl, {
// //       heightSegments: 30,
// //       widthSegments: 30
// //     });
// //   }

// //   createSkills(skills, bend, textColor, borderRadius, font) {
// //     const skillItems = skills && skills.length ? skills : [];
// //     this.skillsData = skillItems.concat(skillItems); // Duplicate for infinite scroll

// //     this.skills = this.skillsData.map((skillData, index) => {
// //       return new SkillMedia({
// //         geometry: this.planeGeometry,
// //         gl: this.gl,
// //         iconPath: skillData.iconPath,
// //         iconColor: skillData.color,
// //         index,
// //         length: this.skillsData.length,
// //         renderer: this.renderer,
// //         scene: this.scene,
// //         screen: this.screen,
// //         text: skillData.name,
// //         viewport: this.viewport,
// //         bend,
// //         textColor,
// //         borderRadius,
// //         font
// //       });
// //     });
// //   }

// //   onTouchDown(e) {
// //     this.isDown = true;
// //     this.scroll.position = this.scroll.current;
// //     this.start = e.touches ? e.touches[0].clientX : e.clientX;
// //   }

// //   onTouchMove(e) {
// //     if (!this.isDown) return;
// //     const x = e.touches ? e.touches[0].clientX : e.clientX;
// //     const distance = (this.start - x) * (this.scrollSpeed * 0.03);
// //     this.scroll.target = this.scroll.position + distance;
// //   }

// //   onTouchUp() {
// //     this.isDown = false;
// //     this.onCheck();
// //   }

// //   onWheel(e) {
// //     const delta = e.deltaY || e.wheelDelta || e.detail;
// //     this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.3;
// //     this.onCheckDebounce();
// //   }

// //   onCheck() {
// //     if (!this.skills || !this.skills[0]) return;
// //     const width = this.skills[0].width;
// //     const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
// //     const item = width * itemIndex;
// //     this.scroll.target = this.scroll.target < 0 ? -item : item;
// //   }

// //   onResize() {
// //     this.screen = {
// //       width: this.container.clientWidth,
// //       height: this.container.clientHeight
// //     };
// //     this.renderer.setSize(this.screen.width, this.screen.height);
// //     this.camera.perspective({
// //       aspect: this.screen.width / this.screen.height
// //     });
// //     const fov = (this.camera.fov * Math.PI) / 180;
// //     const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
// //     const width = height * this.camera.aspect;
// //     this.viewport = { width, height };
// //     if (this.skills) {
// //       this.skills.forEach(skill => skill.onResize({ screen: this.screen, viewport: this.viewport }));
// //     }
// //   }

// //   update() {
// //     this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
// //     const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
// //     if (this.skills) {
// //       this.skills.forEach(skill => skill.update(this.scroll, direction));
// //     }
// //     this.renderer.render({ scene: this.scene, camera: this.camera });
// //     this.scroll.last = this.scroll.current;
// //     this.raf = window.requestAnimationFrame(this.update.bind(this));
// //   }

// //   addEventListeners() {
// //     this.boundOnResize = this.onResize.bind(this);
// //     this.boundOnWheel = this.onWheel.bind(this);
// //     this.boundOnTouchDown = this.onTouchDown.bind(this);
// //     this.boundOnTouchMove = this.onTouchMove.bind(this);
// //     this.boundOnTouchUp = this.onTouchUp.bind(this);

// //     window.addEventListener('resize', this.boundOnResize);
// //     window.addEventListener('mousewheel', this.boundOnWheel);
// //     window.addEventListener('wheel', this.boundOnWheel);
// //     window.addEventListener('mousedown', this.boundOnTouchDown);
// //     window.addEventListener('mousemove', this.boundOnTouchMove);
// //     window.addEventListener('mouseup', this.boundOnTouchUp);
// //     window.addEventListener('touchstart', this.boundOnTouchDown);
// //     window.addEventListener('touchmove', this.boundOnTouchMove);
// //     window.addEventListener('touchend', this.boundOnTouchUp);
// //   }

// //   destroy() {
// //     window.cancelAnimationFrame(this.raf);
// //     window.removeEventListener('resize', this.boundOnResize);
// //     window.removeEventListener('mousewheel', this.boundOnWheel);
// //     window.removeEventListener('wheel', this.boundOnWheel);
// //     window.removeEventListener('mousedown', this.boundOnTouchDown);
// //     window.removeEventListener('mousemove', this.boundOnTouchMove);
// //     window.removeEventListener('mouseup', this.boundOnTouchUp);
// //     window.removeEventListener('touchstart', this.boundOnTouchDown);
// //     window.removeEventListener('touchmove', this.boundOnTouchMove);
// //     window.removeEventListener('touchend', this.boundOnTouchUp);

// //     if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
// //       this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
// //     }
// //   }
// // }

// // export default function SkillsCircularGallery({
// //   skills,
// //   bend = 2,
// //   textColor = '#ffffff',
// //   borderRadius = 0.1,
// //   font = 'bold 20px Inter',
// //   scrollSpeed = 1.5,
// //   scrollEase = 0.08
// // }) {
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     if (!containerRef.current) return;

// //     const app = new SkillsApp(containerRef.current, {
// //       skills,
// //       bend,
// //       textColor,
// //       borderRadius,
// //       font,
// //       scrollSpeed,
// //       scrollEase
// //     });

// //     return () => {
// //       app.destroy();
// //     };
// //   }, [skills, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);

// //   return (
// //     <div className="w-full h-96 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-xl overflow-hidden">
// //       <div className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef} />
// //     </div>
// //   );
// // }

// ///////////////////

// import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
// import { useEffect, useRef, useState } from 'react';

// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// }

// function lerp(p1, p2, t) {
//   return p1 + (p2 - p1) * t;
// }

// function autoBind(instance) {
//   const proto = Object.getPrototypeOf(instance);
//   Object.getOwnPropertyNames(proto).forEach(key => {
//     if (key !== 'constructor' && typeof instance[key] === 'function') {
//       instance[key] = instance[key].bind(instance);
//     }
//   });
// }

// function createIconTexture(gl, iconPath, iconColor = '#61dafb', size = 128) {
//   // Create fallback colored canvas first
//   const canvas = document.createElement('canvas');
//   canvas.width = size;
//   canvas.height = size;
//   const ctx = canvas.getContext('2d');

//   // Create gradient background
//   const gradient = ctx.createLinearGradient(0, 0, size, size);
//   gradient.addColorStop(0, iconColor);
//   gradient.addColorStop(1, `${iconColor}88`);

//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, size, size);

//   // Add border
//   ctx.strokeStyle = '#ffffff';
//   ctx.lineWidth = 4;
//   ctx.strokeRect(2, 2, size - 4, size - 4);

//   // Create texture with fallback canvas
//   const texture = new Texture(gl, {
//     generateMipmaps: false,
//     image: canvas // Pass canvas directly
//   });

//   // Try to load actual image if path provided
//   if (iconPath && iconPath !== '') {
//     const img = new Image();
//     img.crossOrigin = 'anonymous';
//     img.onload = () => {
//       texture.image = img;
//       texture.needsUpdate = true;
//     };
//     img.onerror = () => {
//       console.warn('Failed to load icon, using fallback:', iconPath);
//       // Keep fallback canvas - texture.image is already set to canvas
//     };
//     img.src = iconPath;
//   }

//   return { texture, width: size, height: size };
// }

// class SkillMedia {
//   constructor({
//     geometry,
//     gl,
//     iconPath,
//     iconColor,
//     index,
//     length,
//     renderer,
//     scene,
//     screen,
//     text,
//     viewport,
//     bend,
//     borderRadius = 0,
//     onPositionUpdate
//   }) {
//     this.extra = 0;
//     this.geometry = geometry;
//     this.gl = gl;
//     this.iconPath = iconPath;
//     this.iconColor = iconColor;
//     this.index = index;
//     this.length = length;
//     this.renderer = renderer;
//     this.scene = scene;
//     this.screen = screen;
//     this.text = text;
//     this.viewport = viewport;
//     this.bend = bend;
//     this.borderRadius = borderRadius;
//     this.onPositionUpdate = onPositionUpdate;

//     this.createShader();
//     this.createMesh();
//     this.onResize();
//   }

//   createShader() {
//     const iconResult = createIconTexture(this.gl, this.iconPath, this.iconColor, 256);

//     if (!iconResult) {
//       console.error('Failed to create icon texture for:', this.text);
//       return;
//     }

//     const { texture } = iconResult;

//     this.program = new Program(this.gl, {
//       depthTest: false,
//       depthWrite: false,
//       vertex: `
//         precision highp float;
//         attribute vec3 position;
//         attribute vec2 uv;
//         uniform mat4 modelViewMatrix;
//         uniform mat4 projectionMatrix;
//         uniform float uTime;
//         uniform float uSpeed;
//         varying vec2 vUv;
//         void main() {
//           vUv = uv;
//           vec3 p = position;
//           p.z = sin(p.x * 3.0 + uTime * 0.5) * 0.05 + cos(p.y * 2.0 + uTime * 0.3) * 0.05;
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
//         }
//       `,
//       fragment: `
//         precision highp float;
//         uniform sampler2D tMap;
//         uniform float uBorderRadius;
//         uniform float uTime;
//         uniform float uAlpha;
//         varying vec2 vUv;

//         float roundedBoxSDF(vec2 p, vec2 b, float r) {
//           vec2 d = abs(p) - b;
//           return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
//         }

//         void main() {
//           vec4 color = texture2D(tMap, vUv);
//           float glow = 1.0 + sin(uTime * 2.0) * 0.1;
//           color.rgb *= glow;
//           float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
//           float edgeSmooth = 0.002;
//           float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
//           gl_FragColor = vec4(color.rgb, color.a * alpha * uAlpha);
//         }
//       `,
//       uniforms: {
//         tMap: { value: texture },
//         uSpeed: { value: 0 },
//         uTime: { value: Math.random() * 100 },
//         uBorderRadius: { value: this.borderRadius },
//         uAlpha: { value: 1.0 }
//       },
//       transparent: true
//     });
//   }

//   createMesh() {
//     this.plane = new Mesh(this.gl, {
//       geometry: this.geometry,
//       program: this.program
//     });
//     this.plane.setParent(this.scene);
//   }

//   update(scroll, direction) {
//     this.plane.position.x = this.x - scroll.current - this.extra;

//     const x = this.plane.position.x;
//     const H = this.viewport.width / 2;

//     if (this.bend === 0) {
//       this.plane.position.y = 0;
//       this.plane.rotation.z = 0;
//     } else {
//       const B_abs = Math.abs(this.bend);
//       const R = (H * H + B_abs * B_abs) / (2 * B_abs);
//       const effectiveX = Math.min(Math.abs(x), H);

//       const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
//       if (this.bend > 0) {
//         this.plane.position.y = -arc;
//         this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
//       } else {
//         this.plane.position.y = arc;
//         this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
//       }
//     }

//     this.speed = scroll.current - scroll.last;
//     this.program.uniforms.uTime.value += 0.02;
//     this.program.uniforms.uSpeed.value = this.speed;

//     const planeOffset = this.plane.scale.x / 2;
//     const viewportOffset = this.viewport.width / 2;
//     this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
//     this.isAfter = this.plane.position.x - planeOffset > viewportOffset;

//     if (direction === 'right' && this.isBefore) {
//       this.extra -= this.widthTotal;
//       this.isBefore = this.isAfter = false;
//     }
//     if (direction === 'left' && this.isAfter) {
//       this.extra += this.widthTotal;
//       this.isBefore = this.isAfter = false;
//     }

//     // Update position for overlay text
//     if (this.onPositionUpdate) {
//       const screenX = ((this.plane.position.x / this.viewport.width) * this.screen.width) + (this.screen.width / 2);
//       const screenY = ((-this.plane.position.y / this.viewport.height) * this.screen.height) + (this.screen.height / 2);

//       this.onPositionUpdate(this.index, {
//         x: screenX,
//         y: screenY,
//         visible: Math.abs(this.plane.position.x) < this.viewport.width
//       });
//     }
//   }

//   onResize({ screen, viewport } = {}) {
//     if (screen) this.screen = screen;
//     if (viewport) this.viewport = viewport;

//     this.scale = this.screen.height / 1500;
//     this.plane.scale.y = (this.viewport.height * (600 * this.scale)) / this.screen.height;
//     this.plane.scale.x = (this.viewport.width * (600 * this.scale)) / this.screen.width;

//     this.padding = 1.5;
//     this.width = this.plane.scale.x + this.padding;
//     this.widthTotal = this.width * this.length;
//     this.x = this.width * this.index;
//   }
// }

// class SkillsApp {
//   constructor(
//     container,
//     {
//       skills,
//       bend = 2,
//       borderRadius = 0.1,
//       scrollSpeed = 1.5,
//       scrollEase = 0.08,
//       onPositionUpdate
//     } = {}
//   ) {
//     this.container = container;
//     this.scrollSpeed = scrollSpeed;
//     this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
//     this.onCheckDebounce = debounce(this.onCheck, 200);
//     this.onPositionUpdate = onPositionUpdate;

//     this.createRenderer();
//     this.createCamera();
//     this.createScene();
//     this.onResize();
//     this.createGeometry();
//     this.createSkills(skills, bend, borderRadius);
//     this.update();
//     this.addEventListeners();
//   }

//   createRenderer() {
//     this.renderer = new Renderer({
//       alpha: true,
//       antialias: true,
//       dpr: Math.min(window.devicePixelRatio || 1, 2)
//     });
//     this.gl = this.renderer.gl;
//     this.gl.clearColor(0, 0, 0, 0);
//     this.container.appendChild(this.gl.canvas);
//   }

//   createCamera() {
//     this.camera = new Camera(this.gl);
//     this.camera.fov = 45;
//     this.camera.position.z = 20;
//   }

//   createScene() {
//     this.scene = new Transform();
//   }

//   createGeometry() {
//     this.planeGeometry = new Plane(this.gl, {
//       heightSegments: 30,
//       widthSegments: 30
//     });
//   }

//   createSkills(skills, bend, borderRadius) {
//     const skillItems = skills && skills.length ? skills : [];
//     this.skillsData = skillItems.concat(skillItems); // Duplicate for infinite scroll

//     this.skills = this.skillsData.map((skillData, index) => {
//       return new SkillMedia({
//         geometry: this.planeGeometry,
//         gl: this.gl,
//         iconPath: skillData.iconPath,
//         iconColor: skillData.color,
//         index,
//         length: this.skillsData.length,
//         renderer: this.renderer,
//         scene: this.scene,
//         screen: this.screen,
//         text: skillData.name,
//         viewport: this.viewport,
//         bend,
//         borderRadius,
//         onPositionUpdate: this.onPositionUpdate
//       });
//     });
//   }

//   onTouchDown(e) {
//     this.isDown = true;
//     this.scroll.position = this.scroll.current;
//     this.start = e.touches ? e.touches[0].clientX : e.clientX;
//   }

//   onTouchMove(e) {
//     if (!this.isDown) return;
//     const x = e.touches ? e.touches[0].clientX : e.clientX;
//     const distance = (this.start - x) * (this.scrollSpeed * 0.03);
//     this.scroll.target = this.scroll.position + distance;
//   }

//   onTouchUp() {
//     this.isDown = false;
//     this.onCheck();
//   }

//   onWheel(e) {
//     const delta = e.deltaY || e.wheelDelta || e.detail;
//     this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.3;
//     this.onCheckDebounce();
//   }

//   onCheck() {
//     if (!this.skills || !this.skills[0]) return;
//     const width = this.skills[0].width;
//     const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
//     const item = width * itemIndex;
//     this.scroll.target = this.scroll.target < 0 ? -item : item;
//   }

//   onResize() {
//     this.screen = {
//       width: this.container.clientWidth,
//       height: this.container.clientHeight
//     };
//     this.renderer.setSize(this.screen.width, this.screen.height);
//     this.camera.perspective({
//       aspect: this.screen.width / this.screen.height
//     });
//     const fov = (this.camera.fov * Math.PI) / 180;
//     const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
//     const width = height * this.camera.aspect;
//     this.viewport = { width, height };
//     if (this.skills) {
//       this.skills.forEach(skill => skill.onResize({ screen: this.screen, viewport: this.viewport }));
//     }
//   }

//   update() {
//     this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
//     const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
//     if (this.skills) {
//       this.skills.forEach(skill => skill.update(this.scroll, direction));
//     }
//     this.renderer.render({ scene: this.scene, camera: this.camera });
//     this.scroll.last = this.scroll.current;
//     this.raf = window.requestAnimationFrame(this.update.bind(this));
//   }

//   addEventListeners() {
//     this.boundOnResize = this.onResize.bind(this);
//     this.boundOnWheel = this.onWheel.bind(this);
//     this.boundOnTouchDown = this.onTouchDown.bind(this);
//     this.boundOnTouchMove = this.onTouchMove.bind(this);
//     this.boundOnTouchUp = this.onTouchUp.bind(this);

//     window.addEventListener('resize', this.boundOnResize);
//     window.addEventListener('mousewheel', this.boundOnWheel);
//     window.addEventListener('wheel', this.boundOnWheel);
//     window.addEventListener('mousedown', this.boundOnTouchDown);
//     window.addEventListener('mousemove', this.boundOnTouchMove);
//     window.addEventListener('mouseup', this.boundOnTouchUp);
//     window.addEventListener('touchstart', this.boundOnTouchDown);
//     window.addEventListener('touchmove', this.boundOnTouchMove);
//     window.addEventListener('touchend', this.boundOnTouchUp);
//   }

//   destroy() {
//     window.cancelAnimationFrame(this.raf);
//     window.removeEventListener('resize', this.boundOnResize);
//     window.removeEventListener('mousewheel', this.boundOnWheel);
//     window.removeEventListener('wheel', this.boundOnWheel);
//     window.removeEventListener('mousedown', this.boundOnTouchDown);
//     window.removeEventListener('mousemove', this.boundOnTouchMove);
//     window.removeEventListener('mouseup', this.boundOnTouchUp);
//     window.removeEventListener('touchstart', this.boundOnTouchDown);
//     window.removeEventListener('touchmove', this.boundOnTouchMove);
//     window.removeEventListener('touchend', this.boundOnTouchUp);

//     if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
//       this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
//     }
//   }
// }

// export default function SkillsCircularGallery({
//   skills = [],
//   bend = 2,
//   textColor = '#ffffff',
//   borderRadius = 0.1,
//   font = 'bold 16px Inter',
//   scrollSpeed = 1.5,
//   scrollEase = 0.08
// }) {
//   const containerRef = useRef(null);
//   const [skillPositions, setSkillPositions] = useState({});

//   const handlePositionUpdate = (index, position) => {
//     setSkillPositions(prev => ({
//       ...prev,
//       [index]: position
//     }));
//   };

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const app = new SkillsApp(containerRef.current, {
//       skills,
//       bend,
//       borderRadius,
//       scrollSpeed,
//       scrollEase,
//       onPositionUpdate: handlePositionUpdate
//     });

//     return () => {
//       app.destroy();
//     };
//   }, [skills, bend, borderRadius, scrollSpeed, scrollEase]);

//   // Create duplicated skills array for positioning (same as in the WebGL code)
//   const skillsData = skills && skills.length ? skills.concat(skills) : [];

//   return (
//     <div className="w-full h-96 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-xl overflow-hidden relative">
//       <div className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef} />

//       {/* HTML Text Overlay */}
//       <div className="absolute inset-0 pointer-events-none">
//         {skillsData.map((skill, index) => {
//           const position = skillPositions[index];
//           if (!position || !position.visible) return null;

//           return (
//             <div
//               key={`${skill.name}-${index}`}
//               className="absolute transform -translate-x-1/2 transition-all duration-100"
//               style={{
//                 left: `${position.x}px`,
//                 top: `${position.y + 60}px`, // Position below the icon
//                 color: textColor,
//                 font: font,
//                 textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
//                 opacity: position.visible ? 1 : 0
//               }}
//             >
//               <div className="bg-black/60 px-3 py-1 rounded-lg border border-white/20 backdrop-blur-sm">
//                 {skill.name}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

//////////////////////

// import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
// import { useEffect, useRef } from 'react';

// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// }

// function lerp(p1, p2, t) {
//   return p1 + (p2 - p1) * t;
// }

// function autoBind(instance) {
//   const proto = Object.getPrototypeOf(instance);
//   Object.getOwnPropertyNames(proto).forEach(key => {
//     if (key !== 'constructor' && typeof instance[key] === 'function') {
//       instance[key] = instance[key].bind(instance);
//     }
//   });
// }

// function createTextTexture(gl, text, font = 'bold 30px monospace', color = 'black') {
//   const canvas = document.createElement('canvas');
//   const context = canvas.getContext('2d');
//   context.font = font;
//   const metrics = context.measureText(text);
//   const textWidth = Math.ceil(metrics.width);
//   const textHeight = Math.ceil(parseInt(font, 10) * 1.2);
//   canvas.width = textWidth + 20;
//   canvas.height = textHeight + 20;
//   context.font = font;
//   context.fillStyle = color;
//   context.textBaseline = 'middle';
//   context.textAlign = 'center';
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.fillText(text, canvas.width / 2, canvas.height / 2);
//   const texture = new Texture(gl, { generateMipmaps: false });
//   texture.image = canvas;
//   return { texture, width: canvas.width, height: canvas.height };
// }

// class Title {
//   constructor({ gl, plane, renderer, text, textColor = '#545050', font = '30px sans-serif' }) {
//     autoBind(this);
//     this.gl = gl;
//     this.plane = plane;
//     this.renderer = renderer;
//     this.text = text;
//     this.textColor = textColor;
//     this.font = font;
//     this.createMesh();
//   }
//   createMesh() {
//     const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
//     const geometry = new Plane(this.gl);
//     const program = new Program(this.gl, {
//       vertex: `
//         attribute vec3 position;
//         attribute vec2 uv;
//         uniform mat4 modelViewMatrix;
//         uniform mat4 projectionMatrix;
//         varying vec2 vUv;
//         void main() {
//           vUv = uv;
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//         }
//       `,
//       fragment: `
//         precision highp float;
//         uniform sampler2D tMap;
//         varying vec2 vUv;
//         void main() {
//           vec4 color = texture2D(tMap, vUv);
//           if (color.a < 0.1) discard;
//           gl_FragColor = color;
//         }
//       `,
//       uniforms: { tMap: { value: texture } },
//       transparent: true
//     });
//     this.mesh = new Mesh(this.gl, { geometry, program });
//     const aspect = width / height;
//     const textHeight = this.plane.scale.y * 0.15;
//     const textWidth = textHeight * aspect;
//     this.mesh.scale.set(textWidth, textHeight, 1);
//     this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.05;
//     this.mesh.setParent(this.plane);
//   }
// }

// class Media {
//   constructor({
//     geometry,
//     gl,
//     image,
//     index,
//     length,
//     renderer,
//     scene,
//     screen,
//     text,
//     viewport,
//     bend,
//     textColor,
//     borderRadius = 0,
//     font
//   }) {
//     this.extra = 0;
//     this.geometry = geometry;
//     this.gl = gl;
//     this.image = image;
//     this.index = index;
//     this.length = length;
//     this.renderer = renderer;
//     this.scene = scene;
//     this.screen = screen;
//     this.text = text;
//     this.viewport = viewport;
//     this.bend = bend;
//     this.textColor = textColor;
//     this.borderRadius = borderRadius;
//     this.font = font;
//     this.createShader();
//     this.createMesh();
//     this.createTitle();
//     this.onResize();
//   }
//   createShader() {
//     const texture = new Texture(this.gl, {
//       generateMipmaps: true
//     });
//     this.program = new Program(this.gl, {
//       depthTest: false,
//       depthWrite: false,
//       vertex: `
//         precision highp float;
//         attribute vec3 position;
//         attribute vec2 uv;
//         uniform mat4 modelViewMatrix;
//         uniform mat4 projectionMatrix;
//         uniform float uTime;
//         uniform float uSpeed;
//         varying vec2 vUv;
//         void main() {
//           vUv = uv;
//           vec3 p = position;
//           p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
//         }
//       `,
//       fragment: `
//         precision highp float;
//         uniform vec2 uImageSizes;
//         uniform vec2 uPlaneSizes;
//         uniform sampler2D tMap;
//         uniform float uBorderRadius;
//         varying vec2 vUv;

//         float roundedBoxSDF(vec2 p, vec2 b, float r) {
//           vec2 d = abs(p) - b;
//           return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
//         }

//         void main() {
//           vec2 ratio = vec2(
//             min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
//             min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
//           );
//           vec2 uv = vec2(
//             vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
//             vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
//           );
//           vec4 color = texture2D(tMap, uv);

//           float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);

//           // Smooth antialiasing for edges
//           float edgeSmooth = 0.002;
//           float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);

//           gl_FragColor = vec4(color.rgb, alpha);
//         }
//       `,
//       uniforms: {
//         tMap: { value: texture },
//         uPlaneSizes: { value: [0, 0] },
//         uImageSizes: { value: [0, 0] },
//         uSpeed: { value: 0 },
//         uTime: { value: 100 * Math.random() },
//         uBorderRadius: { value: this.borderRadius }
//       },
//       transparent: true
//     });
//     const img = new Image();
//     img.crossOrigin = 'anonymous';
//     img.src = this.image;
//     img.onload = () => {
//       texture.image = img;
//       this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
//     };
//   }
//   createMesh() {
//     this.plane = new Mesh(this.gl, {
//       geometry: this.geometry,
//       program: this.program
//     });
//     this.plane.setParent(this.scene);
//   }
//   createTitle() {
//     this.title = new Title({
//       gl: this.gl,
//       plane: this.plane,
//       renderer: this.renderer,
//       text: this.text,
//       textColor: this.textColor,
//       fontFamily: this.font
//     });
//   }
//   update(scroll, direction) {
//     this.plane.position.x = this.x - scroll.current - this.extra;

//     const x = this.plane.position.x;
//     const H = this.viewport.width / 2;

//     if (this.bend === 0) {
//       this.plane.position.y = 0;
//       this.plane.rotation.z = 0;
//     } else {
//       const B_abs = Math.abs(this.bend);
//       const R = (H * H + B_abs * B_abs) / (2 * B_abs);
//       const effectiveX = Math.min(Math.abs(x), H);

//       const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
//       if (this.bend > 0) {
//         this.plane.position.y = -arc;
//         this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
//       } else {
//         this.plane.position.y = arc;
//         this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
//       }
//     }

//     this.speed = scroll.current - scroll.last;
//     this.program.uniforms.uTime.value += 0.04;
//     this.program.uniforms.uSpeed.value = this.speed;

//     const planeOffset = this.plane.scale.x / 2;
//     const viewportOffset = this.viewport.width / 2;
//     this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
//     this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
//     if (direction === 'right' && this.isBefore) {
//       this.extra -= this.widthTotal;
//       this.isBefore = this.isAfter = false;
//     }
//     if (direction === 'left' && this.isAfter) {
//       this.extra += this.widthTotal;
//       this.isBefore = this.isAfter = false;
//     }
//   }
//   onResize({ screen, viewport } = {}) {
//     if (screen) this.screen = screen;
//     if (viewport) {
//       this.viewport = viewport;
//       if (this.plane.program.uniforms.uViewportSizes) {
//         this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height];
//       }
//     }
//     this.scale = this.screen.height / 1500;
//     this.plane.scale.y = (this.viewport.height * (900 * this.scale)) / this.screen.height;
//     this.plane.scale.x = (this.viewport.width * (700 * this.scale)) / this.screen.width;
//     this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
//     this.padding = 2;
//     this.width = this.plane.scale.x + this.padding;
//     this.widthTotal = this.width * this.length;
//     this.x = this.width * this.index;
//   }
// }

// class App {
//   constructor(
//     container,
//     {
//       items,
//       bend,
//       textColor = '#ffffff',
//       borderRadius = 0,
//       font = 'bold 30px Figtree',
//       scrollSpeed = 2,
//       scrollEase = 0.05
//     } = {}
//   ) {
//     document.documentElement.classList.remove('no-js');
//     this.container = container;
//     this.scrollSpeed = scrollSpeed;
//     this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
//     this.onCheckDebounce = debounce(this.onCheck, 200);
//     this.createRenderer();
//     this.createCamera();
//     this.createScene();
//     this.onResize();
//     this.createGeometry();
//     this.createMedias(items, bend, textColor, borderRadius, font);
//     this.update();
//     this.addEventListeners();
//   }
//   createRenderer() {
//     this.renderer = new Renderer({
//       alpha: true,
//       antialias: true,
//       dpr: Math.min(window.devicePixelRatio || 1, 2)
//     });
//     this.gl = this.renderer.gl;
//     this.gl.clearColor(0, 0, 0, 0);
//     this.container.appendChild(this.gl.canvas);
//   }
//   createCamera() {
//     this.camera = new Camera(this.gl);
//     this.camera.fov = 45;
//     this.camera.position.z = 20;
//   }
//   createScene() {
//     this.scene = new Transform();
//   }
//   createGeometry() {
//     this.planeGeometry = new Plane(this.gl, {
//       heightSegments: 50,
//       widthSegments: 100
//     });
//   }
//   createMedias(items, bend = 1, textColor, borderRadius, font) {
//     const defaultItems = [
//       { image: `/images/react.png`, text: 'Bridge' },
//       { image: `/images/next.js.png`, text: 'Desk Setup' },
//       { image: `https://picsum.photos/seed/3/800/600?grayscale`, text: 'Waterfall' },
//       { image: `https://picsum.photos/seed/4/800/600?grayscale`, text: 'Strawberries' },
//       { image: `https://picsum.photos/seed/5/800/600?grayscale`, text: 'Deep Diving' },
//       { image: `https://picsum.photos/seed/16/800/600?grayscale`, text: 'Train Track' },
//       { image: `https://picsum.photos/seed/17/800/600?grayscale`, text: 'Santorini' },
//       { image: `https://picsum.photos/seed/8/800/600?grayscale`, text: 'Blurry Lights' },
//       { image: `https://picsum.photos/seed/9/800/600?grayscale`, text: 'New York' },
//       { image: `https://picsum.photos/seed/10/800/600?grayscale`, text: 'Good Boy' },
//       { image: `https://picsum.photos/seed/21/800/600?grayscale`, text: 'Coastline' },
//       { image: `https://picsum.photos/seed/12/800/600?grayscale`, text: 'Palm Trees' }
//     ];
//     const galleryItems = items && items.length ? items : defaultItems;
//     this.mediasImages = galleryItems.concat(galleryItems);
//     this.medias = this.mediasImages.map((data, index) => {
//       return new Media({
//         geometry: this.planeGeometry,
//         gl: this.gl,
//         image: data.image,
//         index,
//         length: this.mediasImages.length,
//         renderer: this.renderer,
//         scene: this.scene,
//         screen: this.screen,
//         text: data.text,
//         viewport: this.viewport,
//         bend,
//         textColor,
//         borderRadius,
//         font
//       });
//     });
//   }
//   onTouchDown(e) {
//     this.isDown = true;
//     this.scroll.position = this.scroll.current;
//     this.start = e.touches ? e.touches[0].clientX : e.clientX;
//   }
//   onTouchMove(e) {
//     if (!this.isDown) return;
//     const x = e.touches ? e.touches[0].clientX : e.clientX;
//     const distance = (this.start - x) * (this.scrollSpeed * 0.025);
//     this.scroll.target = this.scroll.position + distance;
//   }
//   onTouchUp() {
//     this.isDown = false;
//     this.onCheck();
//   }
//   onWheel(e) {
//     const delta = e.deltaY || e.wheelDelta || e.detail;
//     this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
//     this.onCheckDebounce();
//   }
//   onCheck() {
//     if (!this.medias || !this.medias[0]) return;
//     const width = this.medias[0].width;
//     const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
//     const item = width * itemIndex;
//     this.scroll.target = this.scroll.target < 0 ? -item : item;
//   }
//   onResize() {
//     this.screen = {
//       width: this.container.clientWidth,
//       height: this.container.clientHeight
//     };
//     this.renderer.setSize(this.screen.width, this.screen.height);
//     this.camera.perspective({
//       aspect: this.screen.width / this.screen.height
//     });
//     const fov = (this.camera.fov * Math.PI) / 180;
//     const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
//     const width = height * this.camera.aspect;
//     this.viewport = { width, height };
//     if (this.medias) {
//       this.medias.forEach(media => media.onResize({ screen: this.screen, viewport: this.viewport }));
//     }
//   }
//   update() {
//     this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
//     const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
//     if (this.medias) {
//       this.medias.forEach(media => media.update(this.scroll, direction));
//     }
//     this.renderer.render({ scene: this.scene, camera: this.camera });
//     this.scroll.last = this.scroll.current;
//     this.raf = window.requestAnimationFrame(this.update.bind(this));
//   }
//   addEventListeners() {
//     this.boundOnResize = this.onResize.bind(this);
//     this.boundOnWheel = this.onWheel.bind(this);
//     this.boundOnTouchDown = this.onTouchDown.bind(this);
//     this.boundOnTouchMove = this.onTouchMove.bind(this);
//     this.boundOnTouchUp = this.onTouchUp.bind(this);
//     window.addEventListener('resize', this.boundOnResize);
//     window.addEventListener('mousewheel', this.boundOnWheel);
//     window.addEventListener('wheel', this.boundOnWheel);
//     window.addEventListener('mousedown', this.boundOnTouchDown);
//     window.addEventListener('mousemove', this.boundOnTouchMove);
//     window.addEventListener('mouseup', this.boundOnTouchUp);
//     window.addEventListener('touchstart', this.boundOnTouchDown);
//     window.addEventListener('touchmove', this.boundOnTouchMove);
//     window.addEventListener('touchend', this.boundOnTouchUp);
//   }
//   destroy() {
//     window.cancelAnimationFrame(this.raf);
//     window.removeEventListener('resize', this.boundOnResize);
//     window.removeEventListener('mousewheel', this.boundOnWheel);
//     window.removeEventListener('wheel', this.boundOnWheel);
//     window.removeEventListener('mousedown', this.boundOnTouchDown);
//     window.removeEventListener('mousemove', this.boundOnTouchMove);
//     window.removeEventListener('mouseup', this.boundOnTouchUp);
//     window.removeEventListener('touchstart', this.boundOnTouchDown);
//     window.removeEventListener('touchmove', this.boundOnTouchMove);
//     window.removeEventListener('touchend', this.boundOnTouchUp);
//     if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
//       this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
//     }
//   }
// }

// export default function CircularGallery({
//   items,
//   bend = 3,
//   textColor = '#ffffff',
//   borderRadius = 0.05,
//   font = 'bold 30px Figtree',
//   scrollSpeed = 2,
//   scrollEase = 0.05
// }) {
//   const containerRef = useRef(null);
//   useEffect(() => {
//     const app = new App(containerRef.current, { items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase });
//     return () => {
//       app.destroy();
//     };
//   }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);
//   return <div className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef} />;
// }
