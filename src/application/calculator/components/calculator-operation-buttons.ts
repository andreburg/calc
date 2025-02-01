import { operations as operationsMap } from "../../../lib/math-expression/calculation/operation";
import { createElement } from "../../../utils/virtual-element";
import { calculatorButton } from "./calculator-button";

export function calculatorOperationButtons({
  onInput,
  onEquals,
  onClear,
  onDelete,
}: {
  onInput: (value: string) => void;
  onEquals: () => void;
  onClear: () => void;
  onDelete: () => void;
}) {
  const operations = Object.keys(operationsMap);

  const equalsButton = calculatorButton({ onInput: onEquals, value: "=" });
  const clearButton = calculatorButton({ onInput: onClear, value: "AC" });
  const deleteButton = calculatorButton({ onInput: onDelete, value: "DEL" });

  const calculatorOperations = operations.map((operation) => calculatorButton({ onInput, value: operation }));

  return createElement({
    type: "div",
    props: {
      children: [clearButton, deleteButton, ...calculatorOperations, equalsButton],
      className: "operation-buttons",
    },
  });
}
