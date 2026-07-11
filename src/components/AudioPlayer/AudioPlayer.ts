import { BaseComponent } from "../base/BaseComponent";

export class AudioPlayer extends BaseComponent<"footer"> {
  constructor() {
    super("footer", ["audio-player"]);

    const title = document.createElement("span");
    title.textContent = "Audio Player";

    this.append(title);
  }
}
