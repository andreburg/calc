import { operations as operationsMap } from "../../../../lib/math-expression/calculation";
import { createElement } from "../../../../utils/virtual-element";
import { expression } from "../../state/expression";
import { calculatorButton } from "./calculator-button";

export function operationButtons() {
  function onInput(value: string) {
    expression.value += value;
  }
  const operations = Object.keys(operationsMap);

  const calculatorOperations = operations.map((operation) => calculatorButton({ onInput, value: operation }));

  return createElement({
    type: "div",
    props: {
      children: calculatorOperations,
      className: "operation-buttons grid-cols-3",
    },
  });
}
