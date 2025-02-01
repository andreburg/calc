import { constants as constantsMap } from "../../../lib/math-expression/calculation/constant";
import { mathFunctions } from "../../../lib/math-expression/calculation/math-function";
import { createElement } from "../../../utils/virtual-element";
import { calculatorButtonGrouping } from "./calculator-button-grouping";

export function calculatorFunctionButtons({ onInput }: { onInput: (value: string) => void }) {
  const constants = Object.keys(constantsMap);
  const functions = Object.keys(mathFunctions);

  const calculatorFunctions = calculatorButtonGrouping({ onInput, symbols: functions, className: "function-buttons" });
  const calculatorConstants = calculatorButtonGrouping({ onInput, symbols: [...constants, "(", ")"], className: "constant-buttons" });

  return createElement({
    type: "div",
    props: {
      children: [calculatorFunctions, calculatorConstants],
      className: "header-buttons",
    },
  });
}
