import { BaseComponent } from "../base/BaseComponent";
import type { Podcast } from "../../models/Podcast";

export class PodcastCard extends BaseComponent<"article"> {
  constructor(podcast: Podcast) {
    super("article", ["podcast-card"]);

    const image = document.createElement("img");
    image.src = podcast.image;
    image.alt = podcast.title;

    const title = document.createElement("h2");
    title.textContent = podcast.title;

    const publisher = document.createElement("p");
    publisher.textContent = podcast.publisher;

    this.append(image, title, publisher);
  }
}
