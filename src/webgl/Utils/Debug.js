import { Pane } from "tweakpane";

export default class Debug {
  constructor() {
    // IF WANT TO HIDE DEBUG PANE IN DEBUG URL
    // this.active = window.location.hash === "#debug";

    // if (this.active) {
    // }
    this.pane = new Pane({
      title: "🖼️ Artwork",
      expanded: true,
    });
  }
}
