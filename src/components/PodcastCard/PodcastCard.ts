import { BaseComponent } from "../base/BaseComponent";
import type { Podcast } from "../../models/Podcast";

export class PodcastCard extends BaseComponent<"article"> {
  private readonly podcast: Podcast;
  constructor(podcast: Podcast) {
    super("article", ["podcast-card"]);
    this.podcast = podcast;
    const image = document.createElement("img");
    image.src = podcast.image;
    image.alt = podcast.title;

    const title = document.createElement("h2");
    title.textContent = podcast.title;

    const publisher = document.createElement("p");
    publisher.textContent = podcast.publisher;

    this.append(image, title, publisher);
  }

  public onClick(): void {
    this.getElement().addEventListener("click", () => {
      sessionStorage.setItem("podcastId", this.podcast.id);

      window.history.pushState({}, "", "/podcast");
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
  }
}
