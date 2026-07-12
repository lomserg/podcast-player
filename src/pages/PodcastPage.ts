import { BasePage } from "./BasePage";
import { PodcastService } from "../services/PodcastService";
export class PodcastPage extends BasePage {
  private readonly podcastService: PodcastService;
  private readonly audio: HTMLAudioElement;

  constructor() {
    super("podcast-page");

    this.podcastService = new PodcastService();

    this.audio = new Audio();
    this.audio.controls = true;

    this.append(this.audio);

    const title = document.createElement("h2");
    title.textContent = "Podcast Page";

    this.append(title);
  }

  private async playEpisode(
    audio: HTMLAudioElement,
    url: string,
  ): Promise<void> {
    try {
      if (!audio.paused) {
        audio.pause();
      }

      audio.src = url;
      audio.load();

      await audio.play();
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError")) {
        console.error(error);
      }
    }
  }

  public override async init(): Promise<void> {
    const id = sessionStorage.getItem("podcastId");

    if (!id) {
      return;
    }

    const podcast = await this.podcastService.getPodcast(id);

    const episodesTitle = document.createElement("h3");
    episodesTitle.textContent = "Episodes";

    this.append(episodesTitle);

    for (const episode of podcast.episodes) {
      const button = document.createElement("button");

      button.textContent = episode.title;

      button.addEventListener("click", () => {
        void this.playEpisode(this.audio, episode.audio);
      });

      this.append(button);
    }

    console.log(podcast.episodes[0]);
  }
}
