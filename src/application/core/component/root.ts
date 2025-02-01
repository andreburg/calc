import { createElement } from "../../../utils/virtual-element";
import { StateObject } from "../../../utils/state-object";
import { calculator } from "../../calculator/components/calculator";
import { calculations } from "../../calculator/state/calculations";
import { history } from "../../history/components/history";
import { footer } from "./footer";
import { header } from "./header";

export function root() {
  const expression = new StateObject("");

  function onLoad(input: string) {
    expression.value = input;
  }

  function render() {
    return createElement({
      type: "div",
      props: {
        children: [
          header(),
          createElement({
            type: "main",
            props: { children: [calculator({ expression }), history({ onLoad })] },
          }),
          footer(),
        ],
        className: "root",
      },
    });
  }

  let element = render();

  calculations.sub(() => {
    let newElement = render();
    element.replaceWith(newElement);
    element = newElement;
  });

  return element;
}
