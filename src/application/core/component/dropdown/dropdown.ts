import { createElement } from "../../../../utils/virtual-element";
import { StateObject } from "../../../../utils/state-object";
import { dropdownTrigger } from "./dropdown-trigger";
import { dropdownContent } from "./dropdown-content";

export function dropdown({ label, child, className }: { label: string; child: HTMLElement | string; className?: string }) {
  const open = new StateObject(false);
  const element = createElement({
    type: "div",
    props: {
      children: [dropdownTrigger({ label, open }), dropdownContent({ open, child })],
      className: "dropdown " + className,
    },
  });

  window.addEventListener(
    "click",
    (e) => {
      if (!element.contains(e.target as Node)) open.value = false;
    },
    { capture: true }
  );

  return element;
}
