import { createElement } from "../../../utils/virtual-element";
import { expression } from "../state/expression";

export function calculatorInput() {
  let domElement = createElement({
    type: "input",
    props: {
      value: expression.value,
      oninput: (event) => {
        event.preventDefault();
        expression.value = (event.target as HTMLInputElement).value;
      },
      className: "brutal-container brutal-shadow-container",
    },
  });

  expression.sub(() => {
    domElement.value = expression.value;
  });

  return domElement;
}
