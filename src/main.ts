import "./style.css";
import { App } from "./app/App";

const root = document.querySelector<HTMLElement>("#app");

if (!root) {
  throw new Error("App root not found");
}

new App().mount(root);
