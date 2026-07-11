import { BaseComponent } from "../components/base/BaseComponent";
import { AudioPlayer } from "../components/AudioPlayer/AudioPlayer";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";

export class App extends BaseComponent<"div"> {
  private readonly header: Header;
  private readonly main: Main;
  private readonly audioPlayer: AudioPlayer;

  constructor() {
    super("div", ["app"]);

    this.header = new Header();
    this.main = new Main();
    this.audioPlayer = new AudioPlayer();

    this.append(
      this.header.getElement(),
      this.main.getElement(),
      this.audioPlayer.getElement(),
    );
  }

  public mount(parent: HTMLElement): void {
    parent.append(this.getElement());
  }
}
