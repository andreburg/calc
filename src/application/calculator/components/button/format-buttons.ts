import { expression } from "../../state/expression";
import { calculatorButton } from "./calculator-button";
import { calculatorButtonGrouping } from "./calculator-button-grouping";

export function formatButtons() {
  function onInput(value: string) {
    expression.value += value;
  }

  const symbols = ["(", ")", ","];
  const symbolButtons = symbols.map((value) => calculatorButton({ onInput, value }));

  return calculatorButtonGrouping({ children: symbolButtons, className: "format-buttons grid-cols-3" });
}
