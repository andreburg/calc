import { mathFunctions } from "../../../../lib/math-expression/calculation";
import { dropdown } from "../../../core/component/dropdown/dropdown";
import { expression } from "../../state/expression";
import { calculatorButton } from "../button/calculator-button";
import { calculatorButtonGrouping } from "../button/calculator-button-grouping";

export function functionButtons() {
  function onInput(value: string) {
    expression.value += `${value}(`;
  }

  const functions = Object.keys(mathFunctions);
  const functionButtons = functions.map((value) => calculatorButton({ onInput, value }));

  const calculatorFunctions = calculatorButtonGrouping({ children: functionButtons, className: "dropdown-horizontal-list" });

  return dropdown({
    label: "FUNC",
    child: calculatorFunctions,
    className: "option-row-dropdown-button brutal-shadow-container",
  });
}
