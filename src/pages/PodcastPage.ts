import { BaseComponent } from "../components/base/BaseComponent";

export class PodcastPage extends BaseComponent<"section"> {
  constructor() {
    super("section", ["padcast-page"]);

    const title = document.createElement("h2");
    title.textContent = "Home Page";

    this.append(title);
  }
}
