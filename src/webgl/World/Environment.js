import * as THREE from "three";
import Experience from "../Experience.js";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.debugParams = {
      theta: 0,
      radius: 3,
      moveLight: false,
    };
    if (this.experience.debug.active) {
      this.debug = this.experience.debug.pane;
      this.setDebug();
    }
  }

  setDebug() {}

  update() {}
}
