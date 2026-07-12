import { BaseComponent } from "../base/BaseComponent";

export class Header extends BaseComponent<"header"> {
  private readonly homeButton: HTMLButtonElement;
  private readonly playlistButton: HTMLButtonElement;

  constructor() {
    super("header", ["header"]);

    const title = document.createElement("h1");
    title.textContent = "Podcast Player";

    this.homeButton = document.createElement("button");
    this.homeButton.textContent = "Home";

    this.playlistButton = document.createElement("button");
    this.playlistButton.textContent = "Playlist";

    this.append(title, this.homeButton, this.playlistButton);
  }

  public onNavigate(callback: (path: string) => void): void {
    this.homeButton.addEventListener("click", () => callback("/"));

    this.playlistButton.addEventListener("click", () => callback("/playlist"));
  }
}
