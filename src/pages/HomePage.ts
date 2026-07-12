import { BasePage } from "./BasePage";
import { PodcastService } from "../services/PodcastService";
import { PodcastCard } from "../components/PodcastCard/PodcastCard";
import type { Podcast } from "../models/Podcast";
export class HomePage extends BasePage {
  private readonly podcastService: PodcastService;
  private readonly searchInput: HTMLInputElement;
  private readonly cardsContainer: HTMLDivElement;
  private searchTimeout?: number;
  constructor() {
    super("home-page");

    this.podcastService = new PodcastService();

    const title = document.createElement("h2");
    title.textContent = "Home Page";

    this.searchInput = document.createElement("input");
    this.searchInput.type = "search";
    this.searchInput.placeholder = "Search podcasts...";

    this.cardsContainer = document.createElement("div");
    this.cardsContainer.classList.add("cards-container");

    this.append(title, this.searchInput, this.cardsContainer);
    this.searchInput.addEventListener("input", () => {
      clearTimeout(this.searchTimeout);

      this.searchTimeout = window.setTimeout(async () => {
        const query = this.searchInput.value.trim();

        if (query === "") {
          const podcasts = await this.podcastService.getBestPodcasts();
          this.renderPodcasts(podcasts);
          return;
        }

        const podcasts = await this.podcastService.searchPodcasts(query);
        this.renderPodcasts(podcasts);
      }, 500);
    });
  }
  public override async init(): Promise<void> {
    const podcasts = await this.podcastService.getBestPodcasts();

    this.renderPodcasts(podcasts);
  }

  private renderPodcasts(podcasts: Podcast[]): void {
    this.cardsContainer.replaceChildren();

    for (const podcast of podcasts) {
      const card = new PodcastCard(podcast);

      card.onClick();

      this.cardsContainer.append(card.getElement());
    }
  }
}
