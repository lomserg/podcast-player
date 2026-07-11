import { BaseComponent } from "../base/BaseComponent";

export class Main extends BaseComponent<"main"> {
  constructor() {
    super("main", ["main"]);
  }

  public setContent(content: HTMLElement): void {
    this.clear();
    this.append(content);
  }
}
