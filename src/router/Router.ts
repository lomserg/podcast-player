import { Main } from "../components/Main/Main";
import { routes } from "./routes";

export class Router {
  private readonly main: Main;

  constructor(main: Main) {
    this.main = main;
  }

  public start(): void {
    window.addEventListener("popstate", () => {
      this.render(window.location.pathname);
    });

    this.render(window.location.pathname);
  }

  public navigate(path: string): void {
    history.pushState({}, "", path);
    this.render(path);
  }

  private async render(path: string): Promise<void> {
    const route = routes.find((route) => route.path === path);

    if (!route) {
      throw new Error(`Route "${path}" not found.`);
    }

    const page = new route.page();

    this.main.setContent(page.getElement());

    await page.init();
  }
}
