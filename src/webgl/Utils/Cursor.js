import * as THREE from "three";
import Experience from "../Experience.js";

export default class Cursor {
  constructor() {
    this.experience = new Experience();

    this.container = this.experience.canvas;
    this.lastTime;

    this.lastPosition = new THREE.Vector2(0, 0);
    this.position = new THREE.Vector3(-1, 1, 0);
    this.targetPosition = new THREE.Vector3(-1, 1, 0);
    this.velocity = new THREE.Vector2(0, 0);
    this.delta = new THREE.Vector2(0, 0);
    this.bounds = this.container.getBoundingClientRect();
    this.container.addEventListener("mousemove", this.onMouseMove.bind(this));
  }

  onMouseMove(ev) {
    this.bounds = this.container.getBoundingClientRect();

    this.targetPosition.set(
      (ev.clientX / window.innerWidth) * 2 - 1,
      -(ev.clientY / window.innerHeight) * 2 + 1
    );

    if (!this.lastTime) {
      this.lastTime = performance.now();
      this.lastPosition.copy(this.targetPosition);
    }

    this.delta = new THREE.Vector2()
      .copy(this.targetPosition)
      .sub(this.lastPosition);
    this.lastPosition.copy(this.targetPosition);

    let time = performance.now();
    this.deltaT = Math.max(10, Math.min(16, time - this.lastTime));
    this.lastTime = time;

    this.velocity.set(this.delta.x / this.deltaT, this.delta.y / this.deltaT);
    this.velocity.needsUpdate = true;
  }

  resize() {
    this.bounds = this.container.getBoundingClientRect();
  }
  update() {
    this.position.lerp(this.targetPosition, 0.1);
    // console.log(`Cursor position: ${this.position.x}, ${this.position.y}`);
  }
}
