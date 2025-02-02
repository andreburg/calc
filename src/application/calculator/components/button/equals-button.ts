import { solveExpression } from "../../../../lib/math-expression/expression";
import { historicalCalculationService } from "../../../../services/historical-calculation-service";
import { calculations } from "../../state/calculations";
import { expression } from "../../state/expression";
import { settings } from "../../state/settings";
import { calculatorButton } from "./calculator-button";

export function equalsButton() {
  function onEquals() {
    let output: string | undefined;
    try {
      output = String(solveExpression(expression.value, settings.value));
    } catch (error) {
      output = "#ERROR";
    }
    historicalCalculationService.create({ input: expression.value, output });
    expression.value = output;
    calculations.value = historicalCalculationService.getAll();
  }

  const equalsButton = calculatorButton({ onInput: onEquals, value: "=", className: "equals-button" });

  return equalsButton;
}
