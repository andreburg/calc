import { createElement } from "../../../utils/virtual-element";
import { calculatorButtons } from "./calculator-buttons";
import { calculatorInput } from "./input";
import { historyButton } from "./button/history-button";
import "../styles/index.css";

export function calculator() {
  const historyButtonContainer = createElement({
    type: "div",
    props: { children: [historyButton()], className: "dropdown-context history-button-container" },
  });

  return createElement({
    type: "div",
    props: {
      children: [historyButtonContainer, calculatorInput(), calculatorButtons()],
      className: "calculator brutal-container brutal-shadow-container",
    },
  });
}
