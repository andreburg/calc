import { createElement } from "../../../utils/virtual-element";
import { operationButtons } from "./button/operation-buttons";
import { optionRow } from "./option-row";
import { numpad } from "./button/numpad";
import { editButtons } from "./button-groups/edit-buttons";
import { formatButtons } from "./button/format-buttons";

export function calculatorButtons() {
  const miscButtons = createElement({
    type: "div",
    props: {
      children: [editButtons(), formatButtons(), operationButtons()],
      className: "flex-col flex-1",
    },
  });
  const mainButtons = createElement({
    type: "div",
    props: {
      children: [miscButtons, numpad()],
      className: "flex-row flex-1",
    },
  });
  return createElement({
    type: "div",
    props: {
      children: [optionRow(), mainButtons],
      className: "flex-row gap-md",
    },
  });
}
