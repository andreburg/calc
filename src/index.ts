import { solveExpression } from "./lib/math-expression/math-expression";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  </div>
`;

console.log(solveExpression("test(1,1,cos(0)cos(0))+e^10-ln(1)"));
