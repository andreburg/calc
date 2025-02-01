import { createElement } from "../../../utils/virtual-element";
import { calculatorButton } from "./calculator-button";

export function calculatorButtonGrouping({
  onInput,
  symbols,
  className,
}: {
  onInput: (value: string) => void;
  symbols: string[];
  className?: string;
}) {
  function render() {
    return createElement({
      type: "div",
      props: {
        children: [...symbols.map((symbol) => calculatorButton({ onInput, value: symbol }))],
        className,
      },
    });
  }
  const domElement = render();
  return domElement;
}
