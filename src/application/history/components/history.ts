import { createElement } from "../../../utils/virtual-element";
import { calculations } from "../../calculator/state/calculations";
import { historicalCalculation } from "./historical-calculation";
import "../styles/index.css";

export function history() {
  function render() {
    const historicalCalculations = calculations.value.map((calculation) => historicalCalculation({ calculation }));
    return createElement({
      type: "div",
      props: {
        children: [
          createElement({
            type: "div",
            props: { children: historicalCalculations, className: "history" },
          }),
        ],
        className: "dropdown-context brutal-container history-container",
      },
    });
  }

  let element = render();

  calculations.sub(() => {
    let newElement = render();
    element.replaceWith(newElement);
    element = newElement;
  });

  return element;
}
