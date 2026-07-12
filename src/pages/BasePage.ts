import { BaseComponent } from "../components/base/BaseComponent";

export abstract class BasePage extends BaseComponent<"section"> {
  constructor(className: string) {
    super("section", [className]);
  }

  public async init(): Promise<void> {}
}
