import { HistoricalCalculation } from "../../../entities/models/historical-calculation";
import { historicalCalculationService } from "../../../services/historical-calculation-service";
import { createElement } from "../../../utils/virtual-element";
import { calculations } from "../../calculator/state/calculations";
import { expression } from "../../calculator/state/expression";

export function historicalCalculation({ calculation }: { calculation: HistoricalCalculation }) {
  function onDelete() {
    historicalCalculationService.deleteById(calculation.id);
    calculations.value = historicalCalculationService.getAll();
  }

  function onLoad() {
    expression.value = calculation.input;
  }

  return createElement({
    type: "div",
    props: {
      children: [
        `${calculation.input} = ${calculation.output}`,
        createElement({
          type: "button",
          props: { innerText: "-", onclick: onDelete, className: "delete-calculation-button" },
        }),
      ],
      className: "historical-calculation",
      onclick: onLoad,
    },
  });
}
