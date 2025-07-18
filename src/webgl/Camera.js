import * as THREE from "three";
import Experience from "./Experience.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.setInstance();
    this.setControls();
    if (this.experience.debug.active) {
      this.debug = this.experience.debug.pane;
      this.setDebug();
    }
  }

  setInstance() {
    this.cameraOffsetZ = 600; // Distance from the camera to the scene
    this.fov =
      2 *
      Math.atan(this.sizes.height / 2 / this.cameraOffsetZ) *
      (180 / Math.PI);
    this.instance = new THREE.PerspectiveCamera(
      this.fov,
      this.sizes.width / this.sizes.height,
      1,
      2000
    );
    this.instance.position.set(0, 0, this.cameraOffsetZ);
    this.scene.add(this.instance);
  }

  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }

  setDebug() {}

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.fov =
      2 *
      Math.atan(this.sizes.height / 2 / this.cameraOffsetZ) *
      (180 / Math.PI);
    this.instance.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}
