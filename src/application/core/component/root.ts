import { createElement } from "../../../utils/virtual-element";
import { calculator } from "../../calculator/components/calculator";
import { history } from "../../history/components/history";
import { footer } from "./footer";
import { header } from "./header";
import "../styles/index.css";

export function root() {
  function render() {
    return createElement({
      type: "div",
      props: {
        children: [
          header(),
          createElement({
            type: "main",
            props: { children: [calculator(), history()] },
          }),
          footer(),
        ],
        className: "root",
      },
    });
  }

  let element = render();

  return element;
}
