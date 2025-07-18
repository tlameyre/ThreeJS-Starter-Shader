import EventEmitter from "./EventEmitter.js";
import Experience from "../Experience.js";

export default class Sizes extends EventEmitter {
  constructor() {
    super();

    // Setup
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    // Resize event
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      this.trigger("resize");
    });
  }
}
