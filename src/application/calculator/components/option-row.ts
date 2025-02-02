import { createElement } from "../../../utils/virtual-element";
import { constantButtons } from "./button-groups/constant-buttons";
import { functionButtons } from "./button-groups/function-buttons";
import { trigonomotryButtons } from "./button-groups/trigonometry-buttons";

export function optionRow() {
  return createElement({
    type: "div",
    props: {
      children: [trigonomotryButtons(), functionButtons(), constantButtons()],
      className: "flex-row dropdown-context w-full",
    },
  });
}
