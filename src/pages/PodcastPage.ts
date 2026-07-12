import { BasePage } from "./BasePage";

export class PodcastPage extends BasePage {
  constructor() {
    super("podcast-page");

    const title = document.createElement("h2");
    title.textContent = "Podcast Page";

    this.append(title);
  }
}
