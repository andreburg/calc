import { calculatorButtonGrouping } from "./calculator-button-grouping";

export function calculatorNumberButtons({ onInput }: { onInput: (value: string) => void }) {
  const numbers = [...Array.from(Array(10)).map((_, i) => String(9 - i)), ".", ","];
  const numpad = calculatorButtonGrouping({ onInput, symbols: numbers, className: "number-buttons" });

  return numpad;
}
