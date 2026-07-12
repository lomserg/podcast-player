import type { Podcast } from "../models/Podcast";
import type { ApiPodcast, PodcastResponse } from "../models/PodcastResponse";

export class PodcastService {
  private static readonly BASE_URL =
    "https://listen-api-test.listennotes.com/api/v2";

  public async getBestPodcasts(): Promise<Podcast[]> {
    const response = await fetch(
      `${PodcastService.BASE_URL}/best_podcasts?sort=recent_published_first&page=1`,
    );

    if (!response.ok) {
      throw new Error("Failed to load podcasts");
    }

    const data: PodcastResponse = await response.json();

    return data.podcasts.map(
      (podcast: ApiPodcast): Podcast => ({
        id: podcast.id,
        title: podcast.title,
        publisher: podcast.publisher,
        image: podcast.image,
      }),
    );
  }
}
