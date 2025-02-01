import { createElement } from "../../../utils/virtual-element";

export function calculatorButton({ onInput, value }: { onInput: (value: string) => void; value: string }) {
  return createElement({
    type: "button",
    props: {
      children: [value],
      onclick: () => onInput(value),
    },
  });
}
