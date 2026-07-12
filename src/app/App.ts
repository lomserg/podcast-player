import { BaseComponent } from "../components/base/BaseComponent";
import { AudioPlayer } from "../components/AudioPlayer/AudioPlayer";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Router } from "../router/Router";

export class App extends BaseComponent<"div"> {
  private readonly header: Header;
  private readonly main: Main;
  private readonly audioPlayer: AudioPlayer;
  private readonly router: Router;
  constructor() {
    super("div", ["app"]);

    this.header = new Header();
    this.main = new Main();
    this.audioPlayer = new AudioPlayer();
    this.router = new Router(this.main);
    this.header.onNavigate((path) => {
      this.router.navigate(path);
    });
    this.append(
      this.header.getElement(),
      this.main.getElement(),
      this.audioPlayer.getElement(),
    );
    this.router.start();
  }

  public mount(parent: HTMLElement): void {
    parent.append(this.getElement());
  }
}
