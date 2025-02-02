import { expression } from "../../state/expression";
import { calculatorButton } from "./calculator-button";
import { calculatorButtonGrouping } from "./calculator-button-grouping";
import { equalsButton } from "./equals-button";

export function numpad() {
  function onInput(symbol: string) {
    expression.value += symbol;
  }

  const numbers = [...Array.from(Array(9)).map((_, i) => String(9 - i)), ".", "0"];
  const numberButtons = numbers.map((value) => calculatorButton({ onInput, value }));
  const numpad = calculatorButtonGrouping({ children: [...numberButtons, equalsButton()], className: "number-buttons grid-cols-3" });

  return numpad;
}
