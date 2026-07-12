import { HomePage } from "../pages/HomePage";
import { PlaylistPage } from "../pages/PlaylistPage";
import { PodcastPage } from "../pages/PodcastPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/playlist",
    page: PlaylistPage,
  },
  {
    path: "/podcast",
    page: PodcastPage,
  },
];
