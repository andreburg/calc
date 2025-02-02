import { createElement } from "../../../../utils/virtual-element";
import { dropdown } from "../../../core/component/dropdown/dropdown";
import { historicalCalculation } from "../../../history/components/historical-calculation";
import { calculations } from "../../state/calculations";
import "../../styles/history.css";

export function historyButton() {
  function renderChild() {
    let historicalCalculations = calculations.value.map((calculation) => historicalCalculation({ calculation }));
    return createElement({
      type: "div",
      props: { children: historicalCalculations, className: "history-dropdown" },
    });
  }

  let child = renderChild();

  calculations.sub(() => {
    let newChild = renderChild();
    child.replaceWith(newChild);
    child = newChild;
  });

  return dropdown({
    label: "HISTORY",
    child,
    className: "history-button",
  });
}
