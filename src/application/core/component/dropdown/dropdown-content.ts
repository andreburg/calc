import { createElement } from "../../../../utils/virtual-element";
import { StateObject } from "../../../../utils/state-object";

export function dropdownContent({ open, child }: { open: StateObject<boolean>; child: HTMLElement | string }) {
  const element = createElement({
    type: "div",
    props: {
      children: [child],
      className: "dropdown-content",
      ariaHidden: "true",
    },
  });

  open.sub(() => {
    element.ariaHidden = String(!open.value);
  });

  return element;
}
