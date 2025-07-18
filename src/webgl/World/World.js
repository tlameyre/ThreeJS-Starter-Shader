import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Artwork from "./Artwork.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.resources.on("ready", () => {});
    this.environment = new Environment();
    this.artwork = new Artwork();
  }

  resize() {
    if (this.artwork) {
      this.artwork.resize();
    }
  }

  update() {
    if (this.environment) {
      this.environment.update();
    }
    if (this.artwork) {
      this.artwork.update();
    }
  }
}
