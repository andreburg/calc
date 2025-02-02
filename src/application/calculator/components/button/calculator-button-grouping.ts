import { createElement } from "../../../../utils/virtual-element";

export function calculatorButtonGrouping({ children, className }: { children: HTMLButtonElement[]; className?: string }) {
  function render() {
    return createElement({
      type: "div",
      props: {
        children,
        className,
      },
    });
  }
  const domElement = render();
  return domElement;
}
