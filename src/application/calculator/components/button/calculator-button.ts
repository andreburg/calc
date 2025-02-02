import { createElement } from "../../../../utils/virtual-element";

export function calculatorButton({ onInput, value, className }: { onInput: (value: string) => void; value: string; className?: string }) {
  return createElement({
    type: "button",
    props: {
      children: [value],
      onclick: () => onInput(value),
      className: "brutal-container brutal-container-shadow " + className,
    },
  });
}
