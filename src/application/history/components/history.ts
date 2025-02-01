import { createElement } from "../../../utils/virtual-element";
import { historicalCalculationService } from "../../../services/historical-calculation-service";
import { calculations } from "../../calculator/state/calculations";
import { historicalCalculation } from "./historical-calculation";

export function history({ onLoad }: { onLoad: (input: string) => void }) {
  function onDelete(id: number) {
    historicalCalculationService.deleteById(id);
    calculations.value = historicalCalculationService.getAll();
  }

  function render() {
    const historicalCalculations = calculations.value.map((calculation) => historicalCalculation({ calculation, onDelete, onLoad }));
    return createElement({
      type: "div",
      props: {
        children: [
          createElement({
            type: "div",
            props: { children: historicalCalculations, className: "history" },
          }),
        ],
        className: "history-container",
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
