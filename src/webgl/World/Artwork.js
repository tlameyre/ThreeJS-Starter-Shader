import Experience from "../Experience.js";
import EventEmitter from "../Utils/EventEmitter.js";
import * as THREE from "three";

import fragmentShader from "../shaders/fragment.glsl";
import vertexShader from "../shaders/vertex.glsl";

export default class Artwork extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.debug = this.experience.debug.pane;
    this.debugParameters = {
      color: "#00ffff",
    };

    this.setGeometry();
    this.setMaterial();
    this.setMesh();

    this.setDebug();
  }

  setGeometry() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
  }

  setMaterial() {
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new THREE.Vector2(
            this.experience.sizes.width,
            this.experience.sizes.height
          ),
        },
        uColor: { value: new THREE.Color(this.debugParameters.color) },
      },
    });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.scale.set(
      this.experience.sizes.width,
      this.experience.sizes.height,
      1
    );
    this.scene.add(this.mesh);
  }

  setDebug() {
    this.debug
      .addBinding(this.debugParameters, "color", {
        view: "color",
      })
      .on("change", () => {
        this.material.uniforms.uColor.value.set(this.debugParameters.color);
      });
  }

  resize() {
    this.mesh.scale.set(
      this.experience.sizes.width,
      this.experience.sizes.height,
      1
    );
    this.material.uniforms.uResolution.value.set(
      this.experience.sizes.width,
      this.experience.sizes.height
    );
  }

  update() {
    this.material.uniforms.uTime.value = this.experience.time.elapsed / 1000;
  }
}
