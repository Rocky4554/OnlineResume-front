import { Mesh, Plane, Program, Texture } from "ogl";
import Title from "./Title";

export default class SkillMedia {
  constructor({ gl, skill }) {
    this.gl = gl;
    this.skill = skill;

    this.createPlane();
    this.createTexture();
    this.createTitle();
  }

  createPlane() {
    this.plane = new Mesh(this.gl, {
      geometry: new Plane(this.gl, { width: 2, height: 2 }),
      program: new Program(this.gl, {
        vertex: `
          precision highp float;
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
            gl_FragColor = texture2D(tMap, vUv);
          }
        `,
        uniforms: {
          tMap: { value: null },
        },
      }),
    });
  }

  createTexture() {
    this.texture = new Texture(this.gl);
    const img = new Image();
    img.src = this.skill.image; // your skill image
    img.onload = () => {
      this.texture.image = img;
    };
    this.plane.program.uniforms.tMap.value = this.texture;
  }

  createTitle() {
    new Title({
      gl: this.gl,
      plane: this.plane,
      text: this.skill.name,
      textColor: "#fff",
      font: "bold 36px Inter",
    });
  }
}
