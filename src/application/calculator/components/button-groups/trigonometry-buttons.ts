import { trigonomotry } from "../../../../lib/math-expression/calculation";
import { dropdown } from "../../../core/component/dropdown/dropdown";
import { expression } from "../../state/expression";
import { calculatorButton } from "../button/calculator-button";
import { calculatorButtonGrouping } from "../button/calculator-button-grouping";

export function trigonomotryButtons() {
  function onInput(value: string) {
    expression.value += `${value}(`;
  }
  const trigFunctions = Object.keys(trigonomotry);
  const trigFunctionButtons = trigFunctions.map((value) => calculatorButton({ onInput, value }));

  const calculatorTrigFunctions = calculatorButtonGrouping({ children: trigFunctionButtons, className: "dropdown-horizontal-list" });

  return dropdown({
    label: "TRIG",
    child: calculatorTrigFunctions,
    className: "option-row-dropdown-button brutal-shadow-container",
  });
}
