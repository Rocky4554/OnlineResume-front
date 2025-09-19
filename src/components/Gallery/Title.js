// Title.js
import { Mesh, Plane, Program, Texture } from "ogl";

export default class Title {
  constructor({ gl, plane, text, textColor, font }) {
    this.gl = gl;
    this.parentPlane = plane;
    this.text = text;
    this.textColor = textColor;
    this.font = font;

    this.createTextTexture();
    this.createTextMesh();
  }

  createTextTexture() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 512;
    canvas.height = 128;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = this.font;
    ctx.fillStyle = this.textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.text, canvas.width / 2, canvas.height / 2);

    this.texture = new Texture(this.gl, { generateMipmaps: false });
    this.texture.image = canvas; // 👈 key step
  }

  createTextMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: new Plane(this.gl, { width: 2, height: 0.5 }),
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
            vec4 color = texture2D(tMap, vUv);
            if (color.a < 0.1) discard;
            gl_FragColor = color;
          }
        `,
        uniforms: { tMap: { value: this.texture } },
        transparent: true,
      }),
    });

    this.mesh.position.y = -1.2; // 👇 below the icon
    this.mesh.setParent(this.parentPlane);
  }
}
