export class BaseComponent<T extends keyof HTMLElementTagNameMap> {
  protected readonly element: HTMLElementTagNameMap[T];
  constructor(tag: T, classNames: string[] = []) {
    this.element = document.createElement(tag);

    if (classNames.length) {
      this.element.classList.add(...classNames);
    }
  }

  public getElement(): HTMLElementTagNameMap[T] {
    return this.element;
  }

  public append(...children: (Node | string)[]): void {
    this.element.append(...children);
  }
  public clear(): void {
    this.element.replaceChildren();
  }
}
