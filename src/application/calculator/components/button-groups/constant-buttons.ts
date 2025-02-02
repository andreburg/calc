import { constants as constantsMap } from "../../../../lib/math-expression/calculation";
import { dropdown } from "../../../core/component/dropdown/dropdown";
import { expression } from "../../state/expression";
import { calculatorButton } from "../button/calculator-button";
import { calculatorButtonGrouping } from "../button/calculator-button-grouping";

export function constantButtons() {
  function onInput(symbol: string) {
    expression.value += symbol;
  }

  const constants = Object.keys(constantsMap);
  const constantButtons = constants.map((value) => calculatorButton({ onInput, value }));

  const calculatorConstants = calculatorButtonGrouping({ children: constantButtons, className: "dropdown-horizontal-list" });

  return dropdown({
    label: "CONST",
    child: calculatorConstants,
    className: "option-row-dropdown-button brutal-shadow-container",
  });
}
