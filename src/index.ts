import "./style.css";
import { root } from "./application/core/component/root";

document.querySelector<HTMLDivElement>("#app")?.replaceWith(root());
