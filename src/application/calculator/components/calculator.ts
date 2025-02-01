import { createElement } from "../../../utils/virtual-element";
import { StateObject } from "../../../utils/state-object";
import { calculatorButtons } from "./calculator-buttons";
import { calculatorInput } from "./calculator-input";

export function calculator({ expression }: { expression: StateObject<string> }) {
  return createElement({
    type: "div",
    props: { children: [calculatorInput({ expression }), calculatorButtons({ expression })], className: "calculator" },
  });
}
