import Experience from "./webgl/Experience.js";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#webgl-canvas");
  const experience = new Experience(canvas);
});
