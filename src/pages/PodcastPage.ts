import { BaseComponent } from "../components/base/BaseComponent";

export class HomePage extends BaseComponent<"section"> {
  constructor() {
    super("section", ["home-page"]);

    const title = document.createElement("h2");
    title.textContent = "Home Page";

    this.append(title);
  }
}
