import { createElement } from "../../../../utils/virtual-element";
import { StateObject } from "../../../../utils/state-object";

export function dropdownTrigger({ label, open }: { label: string; open: StateObject<boolean> }) {
  return createElement({
    type: "button",
    props: {
      innerText: label,
      onclick: () => {
        open.value = !open.value;
      },
      className: "dropdown-trigger",
    },
  });
}
