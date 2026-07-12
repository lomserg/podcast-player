import { BasePage } from "../pages/BasePage";
import { HomePage } from "../pages/HomePage";
import { PlaylistPage } from "../pages/PlaylistPage";
import { PodcastPage } from "../pages/PodcastPage";

interface Route {
  path: string;
  page: new () => BasePage;
}

export const routes: Route[] = [
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
