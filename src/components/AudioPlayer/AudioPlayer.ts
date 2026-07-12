import { BaseComponent } from "../base/BaseComponent";

export class AudioPlayer extends BaseComponent<"footer"> {
  private readonly audio: HTMLAudioElement;
  private readonly playButton: HTMLButtonElement;

  constructor() {
    super("footer", ["audio-player"]);

    this.audio = new Audio();

    this.playButton = document.createElement("button");
    this.playButton.textContent = "Play / Pause";

    this.playButton.addEventListener("click", () => {
      if (this.audio.paused) {
        void this.audio.play();
      } else {
        this.audio.pause();
      }
    });

    this.append(this.playButton);
  }

  public play(url: string): void {
    this.audio.src = url;
    void this.audio.play();
  }
}
