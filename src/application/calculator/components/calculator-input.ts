import { createElement } from "../../../utils/virtual-element";
import { StateObject } from "../../../utils/state-object";

export function calculatorInput({ expression }: { expression: StateObject<string> }) {
  let domElement = createElement({
    type: "input",
    props: {
      value: expression.value,
      oninput: (event) => {
        event.preventDefault();
        expression.value = (event.target as HTMLInputElement).value;
      },
    },
  });

  expression.sub(() => {
    domElement.value = expression.value;
  });

  return domElement;
}
