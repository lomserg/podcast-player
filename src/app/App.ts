export class App {
  private readonly root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  public init(): void {
    this.root.textContent = "App";
  }
}
