import { createElement } from "../../../../utils/virtual-element";
import { StateObject } from "../../../../utils/state-object";

export function dropdown({ label }: { label: string }) {
  const open = new StateObject(false);
  return createElement({
    type: "div",
    props: {
      children: [
        createElement({
          type: "button",
          props: {
            innerText: label,
            onclick: () => {
              open.value = !open.value;
            },
          },
        }),
      ],
    },
  });
}
