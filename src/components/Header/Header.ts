import { BaseComponent } from "../base/BaseComponent";

export class Header extends BaseComponent<"header"> {
  constructor() {
    super("header", ["header"]);

    const title = document.createElement("h1");
    title.textContent = "Podcast Player";

    this.append(title);
  }
}
