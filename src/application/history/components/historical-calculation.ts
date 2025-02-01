import { HistoricalCalculation } from "../../../entities/models/historical-calculation";
import { createElement } from "../../../utils/virtual-element";

export function historicalCalculation({
  calculation,
  onDelete,
  onLoad,
}: {
  calculation: HistoricalCalculation;
  onDelete: (id: number) => void;
  onLoad: (input: string) => void;
}) {
  return createElement({
    type: "div",
    props: {
      children: [
        `${calculation.input} = ${calculation.output}`,
        createElement({
          type: "button",
          props: { innerText: "-", onclick: () => onDelete(calculation.id) },
        }),
      ],
      className: "historical-calculation",
      onclick: () => onLoad(calculation.input),
    },
  });
}
