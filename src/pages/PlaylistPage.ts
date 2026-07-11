import { BaseComponent } from "../components/base/BaseComponent";

export class PlaylistPage extends BaseComponent<"section"> {
  constructor() {
    super("section", ["playlist-page"]);

    const title = document.createElement("h2");
    title.textContent = "Playlist Page";

    this.append(title);
  }
}
