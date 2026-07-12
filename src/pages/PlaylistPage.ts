import { BasePage } from "./BasePage";

export class PlaylistPage extends BasePage {
  constructor() {
    super("playlist-page");

    const title = document.createElement("h2");
    title.textContent = "Playlist Page";

    this.append(title);
  }
}
