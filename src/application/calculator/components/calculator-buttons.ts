import { createElement } from "../../../utils/virtual-element";
import { StateObject } from "../../../utils/state-object";
import { solveExpression } from "../../../lib/math-expression/expression";
import { calculatorNumberButtons } from "./calculator-number-buttons";
import { calculatorFunctionButtons } from "./calculator-function-buttons";
import { calculatorOperationButtons } from "./calculator-operation-buttons";
import { historicalCalculationService } from "../../../services/historical-calculation-service";
import { calculations } from "../state/calculations";

export function calculatorButtons({ expression }: { expression: StateObject<string> }) {
  const onInput = (value: string) => (expression.value = expression.value + value);
  const onClear = () => (expression.value = "");
  const onDelete = () => (expression.value = expression.value.slice(0, expression.value.length - 1));
  function onEquals() {
    const output = String(solveExpression(expression.value));
    historicalCalculationService.create({ input: expression.value, output });
    expression.value = output;
    calculations.value = historicalCalculationService.getAll();
  }

  return createElement({
    type: "div",
    props: {
      children: [
        calculatorFunctionButtons({ onInput }),
        calculatorNumberButtons({ onInput }),
        calculatorOperationButtons({ onClear, onDelete, onEquals, onInput }),
      ],
      className: "calculator-buttons",
    },
  });
}
