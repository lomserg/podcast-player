export interface PodcastResponse {
  podcasts: ApiPodcast[];
}

export interface SearchResponse {
  results: ApiPodcast[];
}

export interface ApiPodcast {
  id: string;
  title: string;
  publisher: string;
  image: string;
}
