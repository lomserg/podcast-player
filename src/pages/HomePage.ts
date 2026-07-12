import { BasePage } from "./BasePage";
import { PodcastService } from "../services/PodcastService";
import { PodcastCard } from "../components/PodcastCard/PodcastCard";

export class HomePage extends BasePage {
  private readonly podcastService: PodcastService;

  constructor() {
    super("home-page");

    this.podcastService = new PodcastService();

    const title = document.createElement("h2");
    title.textContent = "Home Page";

    this.append(title);
  }
  public override async init(): Promise<void> {
    const podcasts = await this.podcastService.getBestPodcasts();

    for (const podcast of podcasts) {
      const card = new PodcastCard(podcast);

      this.append(card.getElement());
    }
  }
}
