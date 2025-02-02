import { expression } from "../../state/expression";
import { angleUnitSwitch } from "../button/angle-unit-switch";
import { calculatorButton } from "../button/calculator-button";
import { calculatorButtonGrouping } from "../button/calculator-button-grouping";

export function editButtons() {
  const onClear = () => (expression.value = "");
  const onDelete = () => (expression.value = expression.value.slice(0, expression.value.length - 1));

  const clearButton = calculatorButton({ onInput: onClear, value: "AC", className: "edit-button" });
  const deleteButton = calculatorButton({ onInput: onDelete, value: "DEL", className: "edit-button" });

  return calculatorButtonGrouping({ children: [angleUnitSwitch(), deleteButton, clearButton], className: "edit-buttons grid-cols-3" });
}
