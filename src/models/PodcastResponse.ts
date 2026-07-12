export interface PodcastResponse {
  podcasts: ApiPodcast[];
}

export interface ApiPodcast {
  id: string;
  title: string;
  publisher: string;
  image: string;
}
